'use client'

import React from 'react' 

import logo from "../../../public/assets/bhubs-logo.png"; 
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri"
import Image from 'next/image';
import Link from 'next/link';

const BusinessInfoSection = () => {
  return (
    <div className='justify-center'>
            <div className='flex flex-col justify-center items-center'>
              <Link href="https://flowbite.com/" className="flex items-center mb-2">
                <Image src={logo} alt="Best Hubs Logo" className="w-40 h-auto" />
               </Link>
            <p className="text-xs text-white w-64">
              Savor the Flavor, Spark the Moment Where Every Puff Unleashes
              Perfection!
            </p>              
            </div>

            {/* Icons */}
            <div className="flex justify-center mt-10 gap-4">
              <Link
                href="#"
                className="text-white hover:bg-gray-900 border-2 bg-french-bistre rounded-lg p-2"
              >
                <FaFacebookF size={20} />
                <span className="sr-only">Facebook page</span>
              </Link>

              <Link
                href="#"
                className="text-white hover:bg-gray-900 border-2 bg-french-bistre rounded-lg p-2"
              >
                <FaInstagram size={20} />
                <span className="sr-only">Instagram page</span>
              </Link>

              <Link
                href="#"
                className="text-white hover:bg-gray-900 border-2 bg-french-bistre rounded-lg p-2"
              >
                <RiTwitterXLine size={20} />
                <span className="sr-only">Twitter page</span>
              </Link>
            </div>
          </div>
  )
}

export default BusinessInfoSection