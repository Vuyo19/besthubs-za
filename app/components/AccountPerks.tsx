'use client'

import React from 'react' 
import Image from 'next/image' 
import background from "../../public/assets/perks-background.jpeg"
import logo from "../../public/assets/b-logo.png"; 

import { IoMdHeart } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

const AccountPerks = () => { 
  return ( 

    <div className="relative max-w-lg h-[44rem] rounded-b-2xl flex flex-col justify-start items-center">
        {/* Background Image */}
        <Image
            className="h-full w-full rounded-b-2xl object-cover"
            alt='AuthImage' 
            src={background}
            layout="fill"
            objectFit="cover"
        />

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4"> 

            <Image 
                src={logo}
                className="w-[5rem] mt-20 mb-4"
                alt='BestHubs Logo'
            />


            {/* Title */}
            <div className="text-white font-semibold text-xl mb-4">
                <p>Join and get all the benefits!</p>
            </div> 

            {/* Perks */}
            <div className="justify-between items-center text-center gap-x-4 text-wrap mt-4 flex">
                {/* Perk 1 */}
                <div className="text-royal-gold text-xs font-normal flex flex-col items-center gap-4 w-20">
                    <IoMdHeart className="bg-white rounded-md p-2 w-10 h-10" />
                    <p className="text-white">Manage your favourites</p>
                </div>

                {/* Perk 2 */}
                <div className="text-royal-gold text-xs font-normal flex flex-col items-center gap-4 w-20">
                    <MdManageHistory className="bg-white rounded-md p-2 w-10 h-10" />
                    <p className="text-white">Access your order history</p>
                </div>

                {/* Perk 3 */}
                <div className="text-royal-gold text-xs font-normal flex flex-col items-center gap-4 w-24">
                    <MdOutlineShoppingCartCheckout className="bg-white rounded-md p-2 w-10 h-10" />
                    <p className="text-white">Save time during checkout</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccountPerks