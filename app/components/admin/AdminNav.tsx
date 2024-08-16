'use client'
import React from 'react'
import Link from "next/link"
import Container from "../Container"
import { AdminNavItem } from "./AdminNavItem"
import { MdDashboard } from "react-icons/md";
import { usePathname } from "next/navigation";
import { IoIosAddCircle } from "react-icons/io";  
import { CiEdit } from "react-icons/ci"; 
import { HiMiniQueueList } from "react-icons/hi2";


const AdminNav = () => {

  const pathname = usePathname(); 

  return (
    <div className='w-full shadow-sm top-[1000px] border-b-[1px] pt-4'>
        <Container> 
            <div className="flex flex-row items-center justify-between md:justify-center
            gap-8 md:gap-12 overflow-x-auto flex-nowrap"> 
                <Link href='/admin'>
                    <AdminNavItem label="Summary" icon={MdDashboard} 
                    selected={pathname === '/admin'} /> 
                </Link> 
                <Link href='/admin/add-products'>
                    <AdminNavItem label="Add Products" icon={IoIosAddCircle} 
                    selected={pathname === '/admin/add-products'} /> 
                </Link>
                <Link href='/admin/manage-products'>
                    <AdminNavItem label="Manage Products" icon={CiEdit} 
                    selected={pathname === '/admin/manage-products'} /> 
                </Link> 
                <Link href='/admin/manage-orders'>
                    <AdminNavItem label="Manage Orders" icon={HiMiniQueueList} 
                    selected={pathname === '/admin/manage-orders'} /> 
                </Link>
            </div>
        </Container>
    </div>
  )
}

export default AdminNav