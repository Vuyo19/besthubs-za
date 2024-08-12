'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Image from "next/image" 
import SetQuantity from '@/app/components/products/SetQuantity'
import Button from '@/app/components/Button'
import { useCart } from '@/hooks/useCart'
import { useRouter } from 'next/navigation'
import { formatPrice } from "@/utils/formatPrice"
import { IoIosArrowForward, IoMdInformationCircle } from 'react-icons/io'
import Accordian from '@/app/components/accordion/Accordion'
import { IoCloseOutline } from 'react-icons/io5'
import BestSellingProducts from './BestSellingProducts'
import ProductInformation from './ProductInformation'
import SpotlightCard from '@/app/components/card/SpotlightCard'
import Accordion from '@/app/components/accordion/Accordion'
import { useFavourites } from '@/hooks/useFavourite'
import getFavouriteProductsByUser from '@/actions/getFavouriteProductsByUser'
import { getCurrentUser } from '@/actions/getCurrentUser'
import { NextResponse } from 'next/server'

interface ProductDetailsProps {
    product: any,
    isFavourited: boolean;
}  

export type CartProductType = {
    id: string, 
    brand: string, 
    name: string, 
    description: string, 
    category: string, 
    price: number, 
    inStock: boolean, 
    image: String,
    quantity: number, 
} 

const ProductDetails: React.FC<ProductDetailsProps> =  ({ product, isFavourited }) => {  

  
    const {handleAddProductToCart, cartProducts} = useCart(); 
    const {handleAddToFavourites, handleClearFavourites, handleRemoveFromFavourites } = useFavourites(); 
    const [isProductInCart, setIsProductInCart] = useState(false);  // checking if the product is in the cart.  

    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id, 
        name: product.name, 
        description: product.description, 
        category: product.category, 
        brand: product.brand, 
        image: product.images[0].image, 
        quantity: 1, 
        inStock: product.inStock,
        price: product.price
    });     


    const router = useRouter();   

    console.log(cartProducts) 
    
    // The moment a change happens. 
    useEffect(() => {
        setIsProductInCart(false); 

        if(cartProducts) { 
            const existingIndex = cartProducts.findIndex((item) => 
            item.id === product.id) // finding the existing item. 
            // If the product exists, will return number bigger than -1.  

            if(existingIndex > -1 ) { 
                setIsProductInCart(true); 
            }
        } 

    }, [cartProducts]);  

    const handleQtyIncrease = useCallback(() => {
        // Increasing the Cart Size
        setCartProduct((prev) => {
            if(prev.quantity === 99) {
                return {...prev, quantity: 99}
            } else {
                return {...prev, quantity: prev.quantity + 1}
            }
        })
    }, [cartProduct]) 

    const handleQtyDecrease = useCallback(() => {
        setCartProduct((prev) => { 
            if (prev.quantity === 1) {
                return {...prev, quantity: 1}
            } else {
                return {...prev, quantity: prev.quantity - 1}
            }
        })
    }, [cartProduct])

  return (
    <div> 
        
        <div className="px-20 w-screen">
          {/* Breadcrumbs */}
          <div className="w-full mt-40 px-10">
            <ol
              className="flex items-center whitespace-nowrap mb-6 ml-2"
              aria-label="Breadcrumb"
            >
              <li className="inline-flex items-center">
                <a
                  className="flex items-center text-sm text-gray-500 hover:text-navy-purple focus:outline-none focus:text-blue-600 dark:focus:text-blue-500"
                  href="/"
                >
                  Home
                </a>
                <IoIosArrowForward className="text-neutral-600 ml-2 mr-2" />
              </li>
              <li className="inline-flex items-center">
                <a
                  className="flex items-center text-sm text-gray-500 hover:text-navy-purple focus:outline-none focus:text-blue-600 dark:focus:text-blue-500"
                  href="/shop-flavour"
                >
                  Products
                  <IoIosArrowForward className="text-neutral-600 ml-2 mr-2" />
                </a>
              </li>
              <li
                className="inline-flex items-center text-sm font-semibold text-neutral-600 truncate"
                aria-current="page"
              >
                Shop Flavour
                <IoMdInformationCircle className="text-neutral-600 ml-2 mr-2" />

              </li>
              {/* Close Button */}
              <div className="ml-auto  bg-royal-gold hover:bg-french-bistre text-white hover:text-white p-2 rounded-xl flex items-center justify-center">
                <IoCloseOutline size={24} />
              </div>
            </ol>
          </div>

          {/*  */}
          <div className="flex flex-col lg:flex-row medi:flex-row medi:items-start items-center justify-center px-10">
            <div className="lg:mr-20 mr-0 max-w-xl">
              <SpotlightCard
                image={product.images[0].image}
                productRating="4.1/5"
              />
            </div>
            <div className="flex-grow">
            <div className="bg-white rounded-lg max-w-7xl flex flex-col grow p-4">
                <p className="text-2xl mb-2">{product.brand} - {product.name}</p>
                <p className="bg-slate-gray rounded-full p-2 w-28 mb-4 text-base text-gray-600 font-medium text-center">
                    {formatPrice(product.price)}
                </p>
                <p className={product.inStock === false ? `text-rose-500 mb-2` : `text-mystique-green mb-2`}> 
                    {product.inStock === false ? 
                      'Out of stock' : 'In stock'
                    }
                </p>
                <p>
                    {product.description}
                </p>

      <div className="mt-4">
        {/* Add Counter */} 

        {product.inStock === false ?
          (
            <> 

            </> 
          ) : (
            <SetQuantity 
              cartProduct={cartProduct} 
              handleQtyIncrease={handleQtyIncrease} 
              handleQtyDecrease={handleQtyDecrease}
            />
          )
        }
    

      </div>

      <div className="flex flex-row">
        {/* Buttons */}
                <div className="mt-8 gap-3 flex justify-start">
                    <button 
                        onClick={() => handleAddProductToCart(cartProduct)}
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold uppercase rounded-lg border border-transparent bg-amazon-green hover:bg-mystique-green text-white whitespace-nowrap">
                        {product.inStock === false ? 'Notify me when available' : 'Add to cart'}
                    </button>

                    {isFavourited === true ? (
                      <button 
                        onClick={() => handleRemoveFromFavourites(cartProduct)}
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold uppercase rounded-lg border-2  border-royal-gold bg-transparent hover:bg-royal-gold hover:text-white text-royal-gold whitespace-nowrap">
                          Remove from favourites
                      </button> 
                      
                    ) : (
                      <button 
                        onClick={() => handleAddToFavourites(cartProduct)}
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold uppercase rounded-lg  border-transparent bg-royal-gold hover:bg-french-bistre text-white whitespace-nowrap">
                            Add to favourites
                      </button>
                    )}

                    
                </div> 

                </div>
                    {/* Accordion  */}
                    <div className="mt-4">
                        <Accordion
                            title1="Delivery"
                            description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            title2="Storage"
                            description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            title3="Payment & Delivery"
                            description3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        /> 
                    </div>
                </div>
            </div> 
          </div>

          <div className="w-full flex items-center justify-center mt-20">
            <ProductInformation />
          </div>

          <div className="px-10 mt-32 mb-20">
            <BestSellingProducts title="See Also" />
          </div>
        </div>
    
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className='relative aspect-square border'> 
                <Image 
                    src={product.images[0].image}
                    className="w-full border-2 border-primary rounded-xl
                    object-container max-h-[500px] min-h-[500px] 
                    sm:min-h-[400px]" 
                    alt='bubble-gum'
                    fill
                />
            </div>

            <div className='flex flex-col gap-1 text-sm'> 
                <div className='mb-2'> 
                    <h2 className='text-4xl font-medium text-black mb-1'> {product.name} </h2> 
                    <p className='text-xl font-medium text-slate-700 mb-3'> {product.brand} </p> 

                    <p className='text-taintGreen font-bold text-3xl mb-2'> {formatPrice(product.price)} </p>

                    <p className='text-green-500 mb-2 font-medium'> {product.inStock === true ? 'In Stock' : 'Out of Stock'} </p>  

                    <p> 
                        {product.description}
                    </p>

                </div>

                <div className='mb-4'> 
                    <SetQuantity 
                        cartProduct={cartProduct} 
                        handleQtyIncrease={handleQtyIncrease} 
                        handleQtyDecrease={handleQtyDecrease}
                    />
                </div> 

                <div className="max-w-[300px]"> 
                    <Button label="Add to Cart"
                        outline 
                        onClick={() => handleAddProductToCart(cartProduct)}
                    />
                </div>
            </div> 
            
        </div>  */}
    </div>
  )
}

export default ProductDetails