'use client'

import CartClient from '@/app/cart/CartClient'
import ItemContent from '@/app/cart/ItemContent';
import { useCart } from '@/hooks/useCart';
import { useRouter } from 'next/navigation';
import React from 'react'
import QuoteItems from './QuoteItems';
import { formatPrice } from '@/utils/formatPrice';

const Table = () => { 
 
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();  
  const router = useRouter();  

  return (
    <div className='pt-8'>
        <div className="grid grid-cols-5 
                text-xs gap-4 items-center
                bg-amazon-green text-white font-bold p-2
                "> 
                <div className="col-span-2 justify-self-start"> PRODUCT </div>
                <div className="justify-self-center"> PRICE </div>
                <div className="justify-self-center"> QUANTITY </div>
                <div className="justify-self-end"> TOTAL </div> 
        </div>    

        <div>
                {/* Looping through the cart products. */} 
                {cartProducts && cartProducts.map((item) => {
                    return <QuoteItems key={item.id} item={item} /> 
                })}
        </div> 

        <div className='px-2 justify-end'>
            <div className="flex justify-end w-full text-base font-semibold"> 
                <span> Subtotal {formatPrice(cartTotalAmount)} </span>
            </div>  
            <p className="text-slate-500 text-right text-sm"> Taxes and shipping included </p>

        </div>

    </div>
  )
}

export default Table   