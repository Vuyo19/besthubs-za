'use client' 

import React from 'react' 
import { useCart } from "@/hooks/useCart"
import Link from "next/link";
import { IoArrowBackCircle } from "react-icons/io5";
import Heading from "../components/Heading";
import Button from "../components/Button";
import ItemContent from "./ItemContent";
import { SafeUser } from "@/types";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/utils/formatPrice"


const CartClient = () => { 
    const { cartProducts, handleClearCart, cartTotalAmount } = useCart(); 

    const router = useRouter();  

    if(!cartProducts || cartProducts.length === 0) {
        return (
          <div className="flex flex-col items-center"> 
            <div className="text-2xl"> Your cart is empty </div>
            <div> 
                <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">  
                  <IoArrowBackCircle /> 
                  <span> Start Shopping </span>
                </Link>
            </div>
          </div>
        )
      }  


    

    return (
        <div> 
            <Heading title="Shopping Cart" center /> 
            <div className="grid grid-cols-5 
                text-xs gap-4 pb-2 items-center
                mt-8
                "> 
                <div className="col-span-2 justify-self-start"> PRODUCT </div>
                <div className="justify-self-center"> PRICE </div>
                <div className="justify-self-center"> QUANTITY </div>
                <div className="justify-self-end"> TOTAL </div> 
            </div>  
            <div> 
                {/* Looping through the cart products. */} 
                {cartProducts && cartProducts.map((item) => {
                    return <ItemContent key={item.id} item={item} /> 
                })}
            </div> 
            <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between 
                gap-4"> 
                 <div className="w-[90px]"> 
                    <Button label="Clear Cart" onClick={() => {handleClearCart()}} small outline />
                </div>  
                <div className="text-sm flex flex-col gap-1 items-start"> 
                    <div className="flex justify-between w-full text-base font-semibold"> 
                        <span> Subtotal </span>
                        <span> {formatPrice(cartTotalAmount)} </span>
                    </div> 
                    <p className="text-slate-500"> Taxes and shipping calculated at checkout </p>
                    <Button label='Checkout' /> 
                    <Link href="/quotation">
                        <Button label='Generate Quotation' outline />
                    </Link>
                    <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">  
                        <IoArrowBackCircle /> 
                        <span> Continue Shopping </span>
                    </Link>
                </div>
            </div> 
        </div>
    )
}

export default CartClient