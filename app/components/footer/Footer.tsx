import React from 'react'
import Container from '../Container'
import FooterList from './FooterList'
import { NavItems } from '@/utils/NavItems'
import Link from 'next/link' 
import { FaFacebook, FaTwitter, FaInstagramSquare, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-primary text-white text-sm mt-16'>
        <Container> 
            <div className="flex flex-col md:flex-row
                justify-between pt-16 pb-8"> 
                <FooterList> 
                    <h3 className="text-base font-bold mb-2"> Browse BestHubs </h3> 
                    {NavItems.map((item) => {
                            return <> 
                                <Link href={item.href}> 
                                    {item.name}
                                </Link>
                            </>
                        })}
                </FooterList> 
                <FooterList> 
                        <h3 className="text-base font-bold mb-2"> Customer Service </h3> 
                        <Link href="/"> Shipping Policy </Link>
                        <Link href="/"> FAQs </Link> 
                </FooterList> 
                <div className="w-full md:w-1/3 mb-6 md:mb-0"> 
                    <h3 className="text-base font-bold mb-2"> 
                        About Us
                    </h3> 
                    <p className="mb-2"> At BestHubs, we strive to go beyond what&apos;s required 
                        and deliver the best to you.  </p>
                    <p>&copy; 2024 Logoipsum. All rights reserved.  </p>
                </div>      
                <FooterList> 
                    <h3 className="text-base font-bold mb-2"> 
                        Follow Us
                    </h3>  
                    <div className="flex gap-2"> 
                        <Link href="/"> 
                            <FaFacebook size={24} /> 
                        </Link>
                        <Link href="/">  
                            <FaTwitter size={24} />
                        </Link>
                        <Link href="/"> 
                            <FaInstagramSquare size={24} /> 
                        </Link> 
                        <Link href="/"> 
                            <FaYoutube size={24} />
                        </Link>
                    </div>
                </FooterList>
            </div>
        </Container>
    </div>
  )
}

export default Footer