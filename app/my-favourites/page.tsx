import React from 'react'
import Favourites from './Favourites'
import Container from '../components/Container'
import getFavouriteProductsByUser from '@/actions/getFavouriteProductsByUser'
import { getCurrentUser } from '@/actions/getCurrentUser'

const MyFavourites = async () => {   

  const currentUser = await getCurrentUser();  

  if(!currentUser) {
    return null
  } 

  const favourites = await getFavouriteProductsByUser(currentUser.id)  

  if(!favourites) {
    return null
  }

  return (
    <div className='p-8 pt-20'>
      <Container> 
        <Favourites favourites={favourites} />
      </Container>
    </div>
  )
} 

export default MyFavourites; 