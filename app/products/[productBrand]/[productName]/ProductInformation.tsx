'use client'
import React from 'react'
import tobacco from "../../../../public/assets/pipe-tobacco.png"; 
import Image from 'next/image'; 

// Importing React Icon(s)
import { GiApothecary } from "react-icons/gi";

const ProductInformation = () => {
  return (
    <div className="px-10 w-screen">
      <div className="flex flex-col-reverse bg-slate-gray p-8 rounded-xl lg:flex-row md:flex-row items-center justify-center">
        {/* Product */}
        <div className="mr-4 mx-auto mt-20 md:mt-4 sm:mt-20">
            <Image 
                src={tobacco} 
                alt="Tobacco Image" 
                className="px-10" 
                layout="intrinsic" 
            />
        </div>
        {/* Content */}
        <div className="max-w-7xl flex flex-col grow p-4">
          <div className="mb-4">
            <p className="text-2xl mb-2 uppercase">How to use</p>
            <p>
              Begin by removing the packaging, ensuring the flavour is intact.
              Fluff the flavour to improve airflow and load it evenly into the
              Hookah bowl. Cover the bowl with perforated foil, poke
              holes, and place charcoal on top to heat the tobacco. Adjust heat
              as needed for a smooth smoke. Prioritize safety and hygiene in
              handling the flavour and smoking apparatus for a satisfying and
              enjoyable experience.
            </p>
            <hr className="border-t-2 mt-4 border-neutral-500" />
          </div>

          {/*  */}
          <div className="mb-4">
            <div className="flex items-center">
              <p className="text-2xl mb-2 uppercase">Ingredients</p>
              <div className="border-2 border-royal-gold p-2 rounded-xl ml-4">
                <GiApothecary className="text-royal-gold" size={25} />
              </div>
            </div>

            {/* Ingredients List */}
            <div className="ingredients-list mt-4">
              <ul className="list-disc pl-4">
                <li>Tobacco Base</li>
                <li>Grape Flavoring</li>
                <li>Sweetener</li>
                <li>Moisturizer</li>
                <li>Acidity Regulator</li>
                <li>Optional Enhancements</li>
              </ul>
            </div>

            <hr className="border-t-2 mt-4 border-neutral-500" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInformation