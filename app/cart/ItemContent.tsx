'use client'
import React from 'react' 
import { CartProductType } from '../products/[productBrand]/[productName]/ProductDetails'
import { formatPrice } from "@/utils/formatPrice"
import { truncateText } from "@/utils/truncateText"
import Image from "next/image"
import Link from "next/link"
import SetQuantity from "../components/products/SetQuantity"
import { useCart } from "@/hooks/useCart" 

interface ItemContentProps { 
    item: any // Change back to CartProductType
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => { 
  
  const { handleRemoveProductFromCart, 
        handleCartQtyIncrease, handleCartQtyDecrease
  } = useCart();  

  console.log(item.image); 
    
  return ( 
    <div
        className="
        grid grid-cols-5 text-xs md:text-sm
        gap-4 border-t-[1.5px] border-slate-200
        py-4 items-center"> 

        <div 
            className='col-span-2 justify-self-start 
            flex gap-2 md:gap-4'> 
                {/* Item Image */}
                <Link href={``}> 
                    <div className="relative w-[70px] aspect-square"> 
                        <Image src={item.image} 
                            alt={item.name} fill className="object-contain" />     
                    </div> 
                </Link>   

                {/* Displaying the Name */} 
                <div className="flex flex-col justify-between"> 
                    <Link href={``}> 
                        <h2 className='font-bold mb-1 text-lg'> {truncateText(item.name)} </h2> 
                        <p> {truncateText(item.brand)} </p>
                    </Link>
                    {/* Remove option */}
                    <div className='w-[70px]'>
                        <button onClick={() => handleRemoveProductFromCart(item)}
                            className="text-slate-500 underline"> 
                            Remove
                        </button>
                    </div>
                </div>

        </div> 
        <div className="justify-self-center"> {formatPrice(item.price)} </div> {/* For the price */}
        <div className="justify-self-center"> 
            <SetQuantity 
                    cartCounter={true}
                    cartProduct={item}
                    handleQtyIncrease={() => {handleCartQtyIncrease(item)}} // The empty function. 
                    handleQtyDecrease={() => {handleCartQtyDecrease(item)}} // An empty function. 
                />     
        </div> {/* For the quantity */} 
        <div className="justify-self-end font-semibold"> 
            {formatPrice(item.price * item.quantity)}
        </div>
    </div>
  )
}

export default ItemContent