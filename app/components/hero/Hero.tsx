'use client' 
import React from "react";
import background from "../../../public/assets/herobackground.jpeg"
import Image from "next/image";
// Importing React Icon(s)
import { IoIosArrowForward } from "react-icons/io"; 


const Hero = () => {
  return (
    <div>
        <div className="relative overflow-hidden mt-[5rem] w-screen h-[400px]"> 

            <Image
                src={background} // Image path
                alt="Background"
                layout="fill" // Fills the parent container
                objectFit="cover" // Ensures the image covers the entire area
                quality={100} // Adjusts the image quality (optional)
                priority // Optional: Load image as a priority for SEO-critical elements
            />

            <div className="relative z-10">
                        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
                            {/* Content */}
                            <div className="max-w-2xl text-start">
                            {/* Title and Slogan with Divider */}
                            <div className="mt-5 max-w-2xl flex">
                                <div className="pr-4">
                                <h1 className="block font-semibold text-white text-4xl md:text-5xl lg:text-10xl">
                                    Best
                                </h1>
                                <h1 className="block font-semibold text-white text-4xl md:text-5xl lg:text-10xl">
                                    Hubs
                                </h1>
                                </div>
                                <div className="border-l border-white pl-4 flex flex-col justify-end px-28">
                                <p className="text-md text-white">
                                    Savor the Flavor, Spark the Moment Where Every Puff
                                    Unleashes Perfection!
                                </p>
                                </div>
                            </div>

                            {/* End Title */}

                            {/* Buttons */}
                            <div className="mt-8 gap-3 flex justify-start">
                                <a
                                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-mystique-green text-white hover:bg-black"
                                href="/about-us"
                                >
                                About Us
                                <IoIosArrowForward />
                                </a>
                            </div>
                            {/* End Buttons */}
                            </div>
                        </div>
                </div>
        </div>
    </div>
  )
}

export default Hero
