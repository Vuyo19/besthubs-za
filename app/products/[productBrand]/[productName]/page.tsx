import Container from "@/app/components/Container";
import React from 'react'
import ProductDetails from "./ProductDetails";
import { productsShishFlavours } from "@/utils/products";
import getProductByUniqueId from "@/actions/getProductByUniqueId";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import getFavouriteProductsByUser from "@/actions/getFavouriteProductsByUser";


interface IParams {
    productBrand?: string,
    productName?: string
} 

const Product = async ({ params }: {params: IParams}) => { 

  const product = await getProductByUniqueId(params); 
  
  if(!product) {
    return NextResponse.error()
  }

  const currentUser = await getCurrentUser(); 

  if(!currentUser) {
    return NextResponse.error()
  } 

  const favourites = await getFavouriteProductsByUser(currentUser.id)  

  if(!favourites) {
    return NextResponse.error()
  }  

  // Check if the product is in the favourites list
  const isFavourited = favourites.some(fav => fav.id === product.id); 
  console.log(isFavourited)

  return (
    <div className="p-8">
          <ProductDetails product={product} isFavourited={isFavourited} />
    </div>
  )
}

export default Product