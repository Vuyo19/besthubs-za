import Container from "@/app/components/Container";
import NullData from "@/app/components/NullData";
import React from 'react'
import ManageProductsClient from "./ManageProductsClient";
import getProducts from "@/actions/getProducts"; 
import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from '@/libs/prismadb';
import RedirectUser from "../../components/RedirectUser"


const ManageProducts = async () => { 

  const products = await getProducts()  
  const currentUser = await getCurrentUser(); 

  if(!currentUser || currentUser.role !== 'ADMIN') {
    return <RedirectUser />
  }


  return (
    <div className="pt-8"> 
      <Container> 
          <ManageProductsClient products={products} /> 
      </Container>
    </div>
  )
}

export default ManageProducts;