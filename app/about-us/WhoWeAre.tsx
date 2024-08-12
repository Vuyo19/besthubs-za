'use client'

import React from 'react'
import { FaRegHandshake } from 'react-icons/fa'
import { IoPin } from 'react-icons/io5'
import Image from 'next/image' 
import decoImage from "../../public/assets/its-us.jpeg"

const WhoWeAre = () => { 
    const scrollToSection = (sectionId: any) => {
        const targetSection = document.getElementById(sectionId);
    
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
    };
  return (
    <div>
        <section className="w-screen"> 
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-normal text-black sm:text-md"> 
                    <div className="inline-block border-b-4 border-royal-gold mb-10 lg:mt-0 mt-40">
                        <h2 className="mb-4 text-4xl font-palanquin tracking-tight font-extrabold text-royal-gold">
                        About Us
                        </h2>
                    </div>

                    <p className="mb-4">
                        Best Hubs specializes in supplying premium shisha tobacco and
                        accessories for upscale restaurants. With a wide selection of
                        classic and innovative flavors, Our top-quality tobacco leaves
                        are infused with exotic flavors. Whether it is a special occasion
                        or a casual gathering, Best Hubs strives to elevate the
                        experience with exceptional shisha tobacco.
                    </p> 

                    {/* Items */}
                    <div className="flex flex-row gap-10 mt-12"> 

                        <button
                            className="flex flex-col text-gray-500 hover:text-mystique-green items-center"
                            onClick={() => scrollToSection("partners-section")}
                        >
                            <FaRegHandshake size={30} />
                            <p>Partners</p>
                        </button> 

                        <button
                            className="flex flex-col text-gray-500 hover:text-mystique-green items-center"
                            onClick={() => scrollToSection("location-section")}
                        >
                            <IoPin size={30} />
                            <p>Location</p>
                        </button>
                    </div>
                </div> 

                {/*Image*/}
                <div className='grid gap-4 mt-16'> 
                    <Image 
                        className="w-full rounded-lg" 
                        src={decoImage}
                        alt="Hero wheel"
                    /> 
                </div>
            </div>
        </section>
    </div>
  )
}

export default WhoWeAre