import Link from 'next/link'
import React from 'react'
import Container from '../Container'
import { NavItems } from '@/utils/NavItems'
import { CartCount } from './CartCount'
import UserMenu from './UserMenu' 
import { getCurrentUser } from '@/actions/getCurrentUser'

const NavBar = async () => {

  const currentUser = await getCurrentUser();  

  return (
    <div className="sticky text-white top-0 w-full bg-primary z-30 shadow-sm">
        <div className="py-5 border-b-[1px]"> 
            <Container> 
                {/* Options in the navigator */}  
                <div className="flex items-center justify-between
                gap-3 m:gap-0"> 
                    <Link href="/"> 
                        <h1> BestHubs </h1>
                    </Link>
                    <div className='flex items-center gap-8 xl:gap-12'> 
                        {NavItems.map((item) => {
                            return <> 
                                <Link href={item.href}> 
                                    {item.name}
                                </Link>
                            </>
                        })}
                    </div> 
                    <div className="flex items-center gap-8 md:gap-12"> 
                        <CartCount /> 
                        <UserMenu currentUser={currentUser} />
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default NavBar