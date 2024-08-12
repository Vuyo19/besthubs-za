import React from 'react'
import Container from "../components/Container";
import CartClient from "./CartClient";

const Cart = async () => {
  return (
    <div className='mt-[100px] lg:mt-[120px]'>
        <Container> 
            <CartClient />
        </Container>
    </div>
  )
}

export default Cart