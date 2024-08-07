import Container from "@/app/components/Container";
import React from 'react'
import ProductDetails from "./ProductDetails";
import { productsShishFlavours } from "@/utils/products";
import getProductByUniqueId from "@/actions/getProductByUniqueId";


interface IParams {
    productBrand?: string,
    productName?: string
} 

const Product = async ({ params }: {params: IParams}) => { 


  const product = await getProductByUniqueId(params)

  return (
    <div className="p-8">
        <Container>  
            <ProductDetails product={product} />
        </Container>
    </div>
  )
}

export default Product