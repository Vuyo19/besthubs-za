'use client'
import { StaticImageData } from 'next/image'
import React from 'react'  
import { FaStar } from "react-icons/fa";
import Image from 'next/image';


interface SpotlightCard {
    image: string | StaticImageData
    productRating: string
}

const SpotlightCard: React.FC<SpotlightCard>= ({
    image, productRating
}) => {
  return (
    <div className="relative bg-slate-gray border-2 rounded-lg p-2 w-full h-full">
        <div className="flex justify-center items-center mt-4 mb-4">
            <Image 
                src={image} 
                alt="Product" 
                className="max-w-full max-h-full"
                layout="responsive"
                width={500} // Adjust width as needed
                height={500} // Adjust height as needed
            />        

        </div>
        <div className="mb-6">
          {/* <p className="text-lg md:text-base sm:text-base font-semibold">
            {productName}
          </p> */}
          {/* <p className="text-sm md:text-xs sm:text-xs text-gray-600">
            {productDetails}
          </p> */}
        </div>
        <div className="flex absolute bottom-2 right-2">
          <FaStar className="mr-2 text-royal-gold" />
          <p className="text-lg font-medium text-royal-gold">{productRating}</p>
        </div>
    </div>
  )
}

export default SpotlightCard