import Container from "@/app/components/Container";
import NullData from "@/app/components/NullData";
import React from 'react'
import ManageProductsClient from "./ManageProductsClient";
import getProducts from "@/actions/getProducts"; 
import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from '@/libs/prismadb';



const ManageProducts = async () => { 

  const products = await getProducts({})  
  const currentUser = await getCurrentUser(); 

  // If the user is not an admin. 
  if(!currentUser || currentUser.role !== 'ADMIN'){
    return <NullData title="Oops! Access Denied" />
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