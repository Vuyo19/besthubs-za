'use client'
import React from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

interface CategoryCardProps {
    image: string | StaticImageData, 
    label: string,
    href: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    image, label, href 
}) => {
  return (
    <Link href={href}>
      <div className="bg-[#867453] border border-white p-4 md:p-6 rounded-lg w-full overflow-hidden transform transition-transform hover:scale-110">
        <Image
          className="relative h-20 w-20 md:w-40 md:h-40 sm:h-20 sm:w-20 mt-2 mb-2 p-2 bg-cover bg-center rounded-full mx-auto md:mx-4 flex items-center justify-center category-image"
          src={image}
          alt={label}
        />
        <p className="text-white text-center font-medium mt-2 md:mt-4">{label}</p>
      </div>
    </Link>
  )
}

export default CategoryCard