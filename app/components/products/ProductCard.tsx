'use client' 

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';


interface ProductCardProps {
    image: string, 
    productName: string, 
    productBrand: string
}

const ProductCard: React.FC<ProductCardProps> = ({
    image, productName, productBrand
}) => {
 
 const router = useRouter(); 


  return (
    <div onClick={() => router.push(`/products/${productBrand.toLowerCase()}/${productName.toLowerCase().replace(/ /g, '-')}`)}>
      <div className="relative bg-slate-gray hover:bg-[#d3d3d3] border-2 hover:border-royal-gold hover:text-black rounded-lg p-2 w-full h-full">
        <div className="flex justify-center items-center mt-4 mb-4 group overflow-hidden transition-transform transform-gpu hover:translate-y-[-20px]">
          <Image src={image} alt="Product" className="max-w-full max-h-full" 
          layout="responsive" 
          width={100} 
          height={100} />
        </div>
        <div className="mb-6">
          <p className="text-xl md:text-lg sm:text-md font-semibold">
            {productName}
          </p>
          <p className="text-base md:text-md sm:text-md text-gray-600">
            {productBrand}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard