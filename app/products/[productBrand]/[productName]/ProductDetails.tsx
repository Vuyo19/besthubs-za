'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Image from "next/image" 
import SetQuantity from '@/app/components/products/SetQuantity'
import Button from '@/app/components/Button'
import { useCart } from '@/hooks/useCart'
import { useRouter } from 'next/navigation'
import { formatPrice } from "@/utils/formatPrice"

interface ProductDetailsProps {
    product: any
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

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {  

  
    const {handleAddProductToCart, cartProducts} = useCart(); 
    const [isProductInCart, setIsProductInCart] = useState(false);  // checking if the product is in the cart. 

    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id, 
        name: product.name, 
        description: product.description, 
        category: product.category, 
        brand: product.brand, 
        image: product.image, 
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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

                {/* Price */}
                <p className='text-taintGreen font-bold text-3xl mb-2'> {formatPrice(product.price)} </p>

                {/* Colour */}
                <p className='text-green-500 mb-2 font-medium'> {product.inStock === true ? 'In Stock' : 'Out of Stock'} </p>  

                {/* Description */}
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
        
    </div>
  )
}

export default ProductDetails