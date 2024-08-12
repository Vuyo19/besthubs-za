'use client' 

import React from 'react'

const Footer = () => {
  return (
    <>
        {/* Footer */}
        <footer className='footer border-t-2 border-gol-300 pt-5'> 
            <ul className='flex flex-wrap items-center justify-center'> 
                <li> <span className='font-bold'> Your name: </span> Obe Dube </li>
                <li> <span className='font-bold'> Your email: </span>  obe.dube@besthubs.co.za </li>
                <li> <span className='font-bold'> Phone Number: </span> 082 678 9000 </li> 
                <li> <span className='font-bold'> Bank: </span>  Standard Bank </li>
                <li> <span className='font-bold'> Account holder: </span>  Obe Dube</li>
                <li> <span className='font-bold'> Account Number: </span> 190 000 2456 </li>
                <li> <span className='font-bold'> Website: </span> https://besthubs.co.za </li>
            </ul>
        </footer>
    </>
  )
}

export default Footer