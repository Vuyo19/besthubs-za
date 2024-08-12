import React, { useEffect, useState } from 'react'
import Favourites from './Favourites'
import Container from '../components/Container'
import getFavouriteProductsByUser from '@/actions/getFavouriteProductsByUser'
import { useFavourites } from '@/hooks/useFavourite'
import { getCurrentUser } from '@/actions/getCurrentUser'
import { NextResponse } from 'next/server'

const MyFavourites = async () => {   

  const currentUser = await getCurrentUser(); 

  if(!currentUser) {
    return NextResponse.error()
  } 

  const favourites = await getFavouriteProductsByUser(currentUser.id)  

  if(!favourites) {
    return NextResponse.error()
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