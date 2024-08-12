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
    <div className="gap-8 items-center">
        {cartCounter ? null : <label
              htmlFor="quantity-input"
              className="block mb-2 text-sm font-medium text-gray-900"
          >
          Choose quantity:
        </label>}  

        {/* div for counter */}
        <div className="relative flex items-center max-w-[8rem]"> 
            <button className="bg-gray-300 hover:bg-gray-400 text-black hover:text-white rounded-s-lg p-3 h-11" onClick={handleQtyDecrease}> - </button>
            <input
              type="text"
              id="quantity-input"
              value={cartProduct.quantity}
              readOnly
              aria-describedby="helper-text-explanation"
              className="bg-gray-300 border-x-2 h-11 text-center text-black font-bold text-sm block w-full py-2.5"
            />
            <button className="bg-gray-300 hover:bg-gray-400 text-black hover:text-white rounded-e-lg p-3 h-11" onClick={handleQtyIncrease}> + </button>
        </div>
    </div>
  )
}

export default SetQuantity