'use client' 

import React from "react"; 

import pipeImg from "../../../public/assets/coal-category.jpeg"
import hoseImg from "../../../public/assets/hose.jpeg"
import flavourImg from "../../../public/assets/flavour-category.jpeg"
import CategoryCard from "./CategoryCard";

const ShopCategories = () => {
  return (
    <div className="flex flex-col items-center justify-center p-20 bg-royal-gold w-screen">
        {/* Description */}  
        <div className="flex-col items-center justify-center">
          <h1 className="text-white text-center text-3xl mb-12">
            SHOP BY CATEGORY
          </h1>
      </div>  

      {/* Circle Section */} 
      <div className="flex items-center justify-center mb-4 gap-8"> 
        <CategoryCard 
            image={pipeImg}
            label={"Pipe"}
            href={"Pipe Image"}
        />  

        <CategoryCard 
            image={hoseImg}
            label={"Hose"}
            href={"Hose Image"}
        />  

        <CategoryCard 
            image={flavourImg}
            label={"Flavour"}
            href={"Flavour Image"}
        /> 


      </div>
        
    </div>
  )
}

export default ShopCategories