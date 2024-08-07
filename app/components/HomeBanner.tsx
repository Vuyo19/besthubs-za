import React from 'react'
import Image from "next/image"
import Button from './Button'
import Link from 'next/link'

const HomeBanner = () => {
  return (
    <div className='relative bg-gradient-to-r from-primary to to-taintGreen mb-8'>
        <div className="mx-auto px-8 py-12 flex flex-row gap-2 md:flex-row items-center
        justify-evenly"> 
            <div className="mb-8 md:mb-0 text-left text-white"> 
                <p className='text-white mb-1'> Find Inspiration </p> 
                <h1 className='font-bold text-5xl mb-1'> SHOP </h1>
                <h1 className='font-bold text-5xl mb-4'> SHISHA FLAVOUR </h1> 
                <Link href="/products"> 
                  <Button label='View More'/>
                </Link> 
                  
            </div> 
            <div className="w-1/3 relative aspect-video"> 
                <Image 
                     src='/home-banner.png'
                     alt="Banner image"
                     className="object-contain"
                     width={300}
                     height={300}
                />
            </div>
        </div>
    </div>
  )
}

export default HomeBanner