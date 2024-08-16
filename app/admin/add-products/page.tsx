import React from 'react'
import FormWrap from '@/app/components/FormWrap'
import Container from '@/app/components/Container'
import AddProductForm from './AddProductForm'
import Button from '@/app/components/Button'
import Heading from '@/app/components/Heading' 
import { Input } from '@/app/components/inputs/input' 
import NullData from '@/app/components/NullData'; 
import { getCurrentUser } from '@/actions/getCurrentUser'; 
import RedirectUser from "../../components/RedirectUser"

const AddProducts = async() => { 

  const currentUser = await getCurrentUser(); 

  if(!currentUser || currentUser.role !== 'ADMIN') {
    return <RedirectUser />
  }

  return (
    <div className="p-8">
        <Container> 
            <FormWrap> 
                <AddProductForm /> 
            </FormWrap>
        </Container>
    </div>
  )
}

export default AddProducts