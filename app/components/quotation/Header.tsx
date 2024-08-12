'use client'

import React from 'react' 

interface HeaderProps {
    handlePrint: () => void; 
}

const Header: React.FC<HeaderProps> = ({ handlePrint }) => {
  return (
    <> 
        <header className='flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between'> 
            <div> 
                <h1 className='font-bold uppercase tracking-wide text-4xl mb-3'> Invoice </h1>
            </div> 

        </header>
    </>
  )
}

export default Header