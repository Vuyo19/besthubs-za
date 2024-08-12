import Container from "./components/Container";
import Image from "next/image";
import HomeBanner from "./components/HomeBanner";
import ProductCardFlavours from "./components/products/ProductCardFlavours";
import getProducts from "@/actions/getProducts";
import Hero from "./components/hero/Hero";
import ProductsHomepage from "./components/products/ProductsHomepage";
import ShopCategories from "./components/category/ShopCategories";


export default async function Home() {
  
  const products = await getProducts();

  return (
    <div>   

      <div> 
        <Hero />
      </div>  

      <div className="p-8"> 
        <Container> 
            <ProductsHomepage products={products} /> 
        </Container> 
      </div> 
      
      <ShopCategories /> 

    </div>
  );
}
