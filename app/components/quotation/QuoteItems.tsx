'use client'

import { formatPrice } from "@/utils/formatPrice"; 
import { truncateText } from "@/utils/truncateText"; 
import React from 'react';
import { useCart } from "@/hooks/useCart"; 

interface QuoteItemProps { 
    item: any // Change back to CartProductType
}

const QuoteItems: React.FC<QuoteItemProps> = ({ item }) => {
  return (
    <div
        className="
        grid grid-cols-5 text-xs md:text-sm
        gap-4 border-t-[1.5px] border-slate-200
        py-2 items-center px-2"
        > 

        <div className='col-span-2 justify-self-start 
            flex gap-2 md:gap-4'> 
            {/* Displaying the Name */} 
            <div className="flex flex-col justify-between"> 
                    <div>                        
                        <p> {truncateText(item.brand)} - {truncateText(item.name)} </p>
                    </div>
                </div>
        </div> 
        <div className="justify-self-center"> {formatPrice(item.price)} </div> {/* For the price */}
        <div className="justify-self-center"> 
            {item.quantity}
        </div> 
        <div className="justify-self-end font-semibold"> 
            {formatPrice(item.price * item.quantity)}
        </div>

    </div>
  )
}

export default QuoteItems


