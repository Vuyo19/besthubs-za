'use client'

import { useRouter } from 'next/navigation';
import React from 'react' 
import Image from "next/image";
import { formatPrice } from "@/utils/formatPrice"

interface ProductCardFlavoursProps { 
    data: any
}

const ProductCardFlavours: React.FC<ProductCardFlavoursProps> = ({ data }) => { 

 const router = useRouter(); 

  return (
    <div 
    onClick={() => router.push(`/products/${data.brand.toLowerCase()}/${data.name.toLowerCase().replace(/ /g, '-')}`)}
    className="col-span-1 
        cursor-pointer
        border-[1.2px] 
      border-slate-200
      bg-slate-50
        rounded-sm
        p-2 
        transition
        hover:scale-105
        text-center 
        text-sm
        mr-4
    ">
        <div
            className="
            flex flex-col items-center 
            w-full gap-1">

                {/* Image Factor */} 
                <div> 
                    <Image 
                            src={data.images[0].image}
                            className="w-full h-full object-contain" 
                            alt={data.name}
                            width={100}
                            height={100}
                        />
                </div>  

                {/* Product Name */}
                <div> 
                    <p className='text-2xl'> {data.name} </p>
                    <p className='text-md'> {data.brand} </p> 
                    <p className='text-xl font-bold'> {formatPrice(data.price)} </p>
                </div>

        </div>
    </div>
  )
}

export default ProductCardFlavours