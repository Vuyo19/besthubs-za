import React, { useEffect, useState } from 'react'
import Favourites from './Favourites'
import Container from '../components/Container'
import getFavouriteProductsByUser from '@/actions/getFavouriteProductsByUser'
import { useFavourites } from '@/hooks/useFavourite'
import { getCurrentUser } from '@/actions/getCurrentUser'
import { NextResponse } from 'next/server'
import router from 'next/router'
import { useRouter } from 'next/navigation'

const MyFavourites = async () => {   

  const router = useRouter(); 
  const currentUser = await getCurrentUser();  

  if(!currentUser) {
    return router.push('/login')
  } 

  const favourites = await getFavouriteProductsByUser(currentUser.id)  

  if(!favourites) {
    return router.push('/')
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