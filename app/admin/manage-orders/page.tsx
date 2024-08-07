'use client' 

import React from 'react'
import NullData from "@/app/components/NullData";
import Container from "@/app/components/Container";
import ManageOrdersClient from './ManageOrdersClient';



const ManageOrders = () => {
  return (
    <div className="pt-8">
        <Container> 
            <ManageOrdersClient /> 
        </Container>
    </div>
  )
}

export default ManageOrders