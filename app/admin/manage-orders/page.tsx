import React from 'react'
import NullData from "@/app/components/NullData";
import Container from "@/app/components/Container";
import ManageOrdersClient from './ManageOrdersClient';
import { getCurrentUser } from '@/actions/getCurrentUser';
import RedirectUser from "../../components/RedirectUser"



const ManageOrders = async () => { 

  const currentUser = await getCurrentUser(); 

  if(!currentUser || currentUser.role !== 'ADMIN') {
    return <RedirectUser />
  }


  return (
    <div className="pt-8">
        <Container> 
            <ManageOrdersClient /> 
        </Container>
    </div>
  )
}

export default ManageOrders