'use client'

import React, { useEffect, useState } from 'react'; 
import mapImage from "../../public/assets/sa-gold.png"; 
import cityImage from "../../public/assets/scenery-cities.png"; 
import Image from 'next/image';

const LocationSection = () => { 
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [cityImg, setCityImg] = useState<string | null>(null);

    useEffect(() => {
        const img = new window.Image(); // Use window.Image to create a new HTMLImageElement
        img.src = typeof cityImage === 'string' ? cityImage : cityImage.src;
        img.onload = () => {
        setCityImg(img.src);
        };
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
  return (
    <div>
        <section className="w-screen"> 
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 mb-20">
                <div className="font-normal text-black sm:text-md">
                    <div className="inline-block border-b-4 border-royal-gold mb-10">
                        <h2 className="mb-4 text-4xl font-palanquin tracking-tight font-extrabold text-royal-gold">
                        Where We Are Based
                        </h2>
                    </div>
                    <p className="mb-4">
                        We are situated in the captivating city of Cape Town, South
                        Africa, where the stunning scenery mirrors the exceptional
                        quality we offer to our valued customers.
                    </p>
                </div>  

                <div className="grid gap-4 mt-16"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}> 

                    <Image 
                        src={isHovered ? cityImage : mapImage}
                        alt="Hero Wheel"
                        className={`w-full rounded-lg overflow-hidden transform transition-transform ${
                            isHovered ? "scale-110" : ""
                        }`}
                    /> 
                </div>
            </div>
        </section>
    </div>
  )
}

export default LocationSection