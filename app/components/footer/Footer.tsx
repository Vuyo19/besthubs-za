import React from 'react'
import Container from '../Container'
import { NavItems } from '@/utils/NavItems'
import Link from 'next/link' 
import { FaFacebook, FaTwitter, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import BusinessInfoSection from './BusinessInfoSection';
import ContactUsSection from './ContactUsSection';
import NewsletterSection from './NewsletterSection';


const Footer = () => {
  return (
    <div className='w-full bg-royal-gold'>
        <Container> 
            {/* Content */}
            <div className="w-full bg-royal-gold relative bottom-0 pt-2 px-10">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                {/* Sections */}
                <div className="grid grid-cols-1 medi:grid-cols-3 medi:grid-rows-1 gap-4 text-center mt-10">
                    <BusinessInfoSection />
                    <ContactUsSection />
                    <NewsletterSection />
                </div>

                {/* Divider */}
                <hr className="my-6 border-white sm:mx-auto lg:my-8" />

                {/* Copyright */}
                <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-sm text-white sm:text-white">
                    © 2024{" "}
                    <Link href="https://flowbite.com/" className="hover:underline">
                        Best Hubs
                    </Link>
                    . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:mt-0">
                        <p className="text-sm text-white mr-6">Privacy</p>
                        <p className="text-sm text-white">Terms of Services</p>
                    </div>
                </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer