'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from "react";
import Container from '../Container'
import { NavItems } from '@/utils/NavItems'
import { CartCount } from './CartCount'
import UserMenu from './UserMenu' 
import Image from 'next/image';
import { getCurrentUser } from '@/actions/getCurrentUser' 
import { SafeUser } from '@/types';

import logo from "../../../public/assets/bhubs-logo.png"

import { FiShoppingBag } from "react-icons/fi";
import { PiUserRectangleFill } from "react-icons/pi";
import { HiOutlineMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6"; 
import Reveal from '../Reveal/Reveal'; 
import { useCart } from "@/hooks/useCart";
import { FaShoppingCart } from "react-icons/fa"; 
import { useRouter } from "next/navigation";  
import { signOut } from 'next-auth/react';

interface NavBarProps {
    // Based on user context. 
    currentUser: SafeUser | null; 
}


const NavBar: React.FC<NavBarProps> = ({ currentUser }) => {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserAccountDropdownOpen, setIsUserAccountDropdownOpen] = useState(false)
  const [isNestedOpen, setIsNestedOpen] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);
  const [isFavHovered, setIsFavHovered] = useState(false);
  const dropdownRef = useRef(null);  
  const router = useRouter(); 
  const { cartTotalQty } = useCart(); 

  const toggleNested = () => {
    setIsNestedOpen(!isNestedOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setShowMenuItems(false);
  };

  const toggleMenuItems = () => {
    setShowMenuItems(!showMenuItems);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const isActive = (path: any) => {
    return location.pathname === path ? "border-b-2" : "";
  };

  return ( 

    <nav className="bg-mystique-green p-4 px-10 fixed w-full top-0 z-50 shadow-2xl"> 
        <div className="container mx-auto flex justify-between items-center">
            {/* Company Logo */} 
            <div>
                <Link href="/">
                    <Image src={logo} alt="Best Hubs Logo" className="w-40 h-auto" />
                </Link>
            </div> 

            {/* Nav Items Laptop */} 
            <div className="hidden lg:flex items-center ml-[12rem] gap-4">
                
                <div className={`mt-4 pb-4 ${isActive("/")}`}>
                    <Link
                        className="flex items-center text-white font-medium focus:outline-none mx-2 text-sm md:text-sm lg:text-base xl:text-md"
                        href="/"
                    >
                        Home
                    </Link>
                </div>   

                <div className={`mt-4 pb-4 ${isActive("/about-us")}`}>
                    <Link
                        className="flex items-center text-white font-medium focus:outline-none mx-2 text-sm md:text-sm lg:text-base xl:text-md"
                        href="/about-us"
                        style={{ whiteSpace: "nowrap" }}
                    >
                        About Us
                    </Link>
                </div>  

                <div
                    ref={dropdownRef}
                    className={`relative inline-block text-left mt-4 pb-4 ${
                        isActive("/shop-flavour") ||
                        isActive("/shop-pipe") ||
                        isActive("/product-detail")
                    }`}
                    >  

                    <button
                        className="flex items-center text-white font-medium focus:outline-none mx-2 text-sm md:text-sm lg:text-base xl:text-md"
                        onClick={toggleDropdown}
                    >
                        Products
                        {isDropdownOpen ? (
                        <MdKeyboardArrowUp className="ml-2" />
                        ) : (
                        <MdKeyboardArrowDown className="ml-2" />
                        )}
                    </button>  
                     
                    {isDropdownOpen && (
                        <div className="absolute z-50 p-2 left-0 mt-6 w-[15rem] bg-white rounded-md shadow-2xl">
                            <div className="py-2">
                                <Link
                                href="/shop-flavour"
                                className="block px-4 py-2 text-gray-500 rounded-md hover:bg-gray-200 hover:text-mystique-green"
                                onClick={closeDropdown}
                                >
                                Shisha Flavour
                                </Link>
                            </div>
                            <div className="py-2">
                                <Link
                                href="/shop-pipes"
                                className="block px-4 py-2 text-gray-500 rounded-md hover:bg-gray-200 hover:text-mystique-green"
                                onClick={closeDropdown}
                                >
                                Shisha Pipes
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div> 

            {/* On Small Screen Button to toggle (small screen) Menu Items */}
            <button
                className="lg:hidden text-white focus:outline-none"
                onClick={toggleMenuItems}
            >
                {showMenuItems ? <CgClose size={25} /> : <HiOutlineMenu size={25} />}
            </button>   

            {/* (small screen) Menu Items */}
            {showMenuItems && (
            <div className="lg:hidden absolute top-[4.5rem] left-0 w-full bg-mystique-green border-t text-white">
                <div className="container mx-auto py-2 w-full pr-6 pl-6">
                    <Link
                        href="/"
                        className="flex items-center py-2 pl-4 w-full pr-10 mb-4"
                    >
                        <span className="ml-4 text-md font-medium">Home</span>
                    </Link>
                    <Link
                        href="/about-us"
                        className="flex items-center py-2 pl-4 w-full pr-10 mb-4"
                    >
                        <span className="ml-4 text-md font-medium">About Us</span>
                    </Link>

                    <div className="relative mt-6 mb-4 mx-auto text-left px-4">
                    <button
                        onClick={toggleNested}
                        type="button"
                        className="py-3 inline-flex items-center gap-x-2 ml-4 text-md font-medium rounded-lg text-white disabled:opacity-50 disabled:pointer-events-none"
                    >
                        Products
                        {isNestedOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </button>

                    <div
                        className={`transition-opacity transition-margin duration-300 ${
                        isNestedOpen ? "opacity-100 mt-4" : "opacity-0 hidden"
                        } min-w-[15rem] bg-amazon-green shadow-md rounded-lg p-2 divide-y divide-gray-200 border border-zinc-100 dark:divide-gray-700`}
                    >
                        <div className="py-2 first:pt-0 last:pb-0">
                        <Link href="/dummy">
                            <div className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-300 dark:hover:text-white">
                                Shop Shisha Flavour
                            </div>
                        </Link>
                        <Link href="/dummy">
                            <div className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-300 dark:hover:text-white">
                            Shop Shisha Pipe
                            </div>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            )} 

            {/* User Functions */} 
            <div className="hidden lg:flex items-center space-x-6">
                <Link href="/cart">
                    <button className="relative flex items-center font-medium text-white/[.8] hover:text-white sm:my-6 sm:ps-6">
                    <FiShoppingBag size={24} />
                    <div className="absolute top-[-5px] left-10 w-4 h-4 bg-[#8fbc8f] text-white rounded-full flex items-center justify-center text-xs">
                        { cartTotalQty }
                    </div>
                    </button>
                </Link>

                <Link href="/my-favourites">
                    <button
                    className="flex items-center font-medium text-white/[.8] hover:text-white sm:my-6"
                    onMouseEnter={() => setIsFavHovered(true)}
                    onMouseLeave={() => setIsFavHovered(false)}
                    >
                    {isFavHovered ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
                    </button>
                </Link>

                <div className="h-6 border-r border-white/[.3]"></div>
                    {/* Conditionally render based on user authentication */}
                        {currentUser ? (

                                <> 
                                    <button onClick={() => {signOut()}} className="py-3 px-4 inline-flex items-center gap-x-2 text-md font-semibold rounded-lg border bg-amazon-green text-gray-100 hover:bg-white  hover:text-amazon-green whitespace-nowrap">
                                        My Account
                                    </button>
                                    <button onClick={() => {signOut()}} className="py-3 px-4 inline-flex items-center gap-x-2 text-md font-semibold rounded-lg border bg-amazon-green text-gray-100 hover:bg-white  hover:text-amazon-green whitespace-nowrap">
                                        Sign Out
                                    </button>
                                </>
                          
                        ) : (
                            <div className='flex flex-row gap-3'> 
                                <Link href="/register">
                                    <button className="py-3 px-4 inline-flex items-center gap-x-2 text-md font-semibold rounded-lg border border-amazon-green bg-white text-amazon-green hover:bg-white  hover:text-amazon-green whitespace-nowrap">
                                        Register
                                    </button> 
                                </Link> 
                                <Link href="/login">
                                    <button className="py-3 px-4 inline-flex items-center gap-x-2 text-md font-semibold rounded-lg border bg-amazon-green text-gray-100 hover:bg-white  hover:text-amazon-green whitespace-nowrap">
                                        Login
                                    </button> 
                                </Link>
                            </div>

                        )}
                    </div> 
        

        </div>
    </nav>

  )
}

export default NavBar