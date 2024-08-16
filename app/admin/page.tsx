import React from 'react'
import Container from '../components/Container'
import { getCurrentUser } from '@/actions/getCurrentUser';
import NullData from '../components/NullData';
import RedirectUser from '../components/RedirectUser';


const Admin = async () => {  

  const currentUser = await getCurrentUser();  

  // If the user is not an admin. 
  if(!currentUser || currentUser.role !== 'ADMIN'){
    return <RedirectUser />
  }

  return (
    <div className='pt-8'>
        <Container> 
            <div> 
                Admin Page
            </div>
        </Container>
    </div>
  )
}

export default Admin