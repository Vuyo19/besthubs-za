'use client'

import React, { useCallback, useState } from 'react' 
import { SafeUser } from '@/types';
import { FaCaretDown } from 'react-icons/fa';
import Avatar from '../Avatar';
import Link from 'next/link';
import MenuItem from './MenuItem';
import { signOut } from 'next-auth/react';

interface UserMenuProps {
    // Based on user context. 
    currentUser: SafeUser | null; 
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {

  const [isOpen, setIsOpen] = useState(false); 
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev); 
  }, []); 

  return (
    <> 
        <div className='relative z-30'> 
            <div
                onClick={toggleOpen}
                className='p-2 
                border-[1px] 
                border-slate-400 flex flex-row 
                items-center gap-1 rounded-full 
                cursor-pointer hover:shadow-md
                transition text-slate-700'
            > 
                <Avatar src={'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png'} />
                <FaCaretDown size={22} color='white' /> 
            </div> 

            <div> 
                { isOpen && (
                  <div className='absolute rounded-md shadow-md 
                    w-[170px] bg-white overflow-hidden
                    right-0 top-19 text-sm flex 
                    flex-col cursor-pointer text-black mb-4'> 
                    {/* Checking if the user is logged in or not. */} 
                    {currentUser ? 
                        <div> 
                            <Link href="/orders"> 
                                <MenuItem onClick={toggleOpen}> 
                                    Your Orders
                                </MenuItem>
                            </Link> 
                            <Link href="/admin"> 
                                <MenuItem onClick={toggleOpen}> 
                                    Admin Dashboard
                                </MenuItem>
                            </Link>
                            <MenuItem onClick={() => {
                                 toggleOpen();
                                 signOut()
                            }
                               }>  
                                Logout
                            </MenuItem>
                        </div> : 
                        <div> 
                            <Link href="/login"> 
                                <MenuItem onClick={toggleOpen}> 
                                    Login
                                </MenuItem>
                            </Link>  
                            <Link href="/register"> 
                                <MenuItem onClick={toggleOpen}> 
                                    Register
                                </MenuItem>
                            </Link> 
                        </div>
                    }
                 </div>
                )}
            </div>
        </div>
    </>
  )
}

export default UserMenu