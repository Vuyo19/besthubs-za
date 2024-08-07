'use client'

import React from 'react'
import { CartProductType } from '@/app/products/[productBrand]/[productName]/ProductDetails';

interface SetQtyProps {
    cartCounter?: boolean;
    cartProduct: CartProductType; 
    handleQtyIncrease: () => void; 
    handleQtyDecrease: () => void; 
}

const btnStyles = 'font-bold border-[1.6px] border-slate-400 px-2 rounded text-slate-700'

const SetQuantity: React.FC<SetQtyProps> = ({ cartProduct, cartCounter, handleQtyIncrease,  
  handleQtyDecrease }) => {
  return (
    <div className="flex gap-8 items-center">
        {cartCounter ? null : <div className="font-bold text-lg text-slate-600"> QUANTITY: </div>}  

        {/* div for counter */}
        <div className="flex gap-4 items-center text-base"> 
            <button className={btnStyles} onClick={handleQtyDecrease}> - </button>
            <div> {cartProduct.quantity} </div> 
            <button className={btnStyles} onClick={handleQtyIncrease}> + </button>
        </div>
    </div>
  )
}

export default SetQuantity