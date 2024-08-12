'use client'
import React from 'react' 
import ProductCard from '../components/products/ProductCard'

interface FavouritesProps {
    favourites: any
}

const Favourites: React.FC<FavouritesProps> = ({
    favourites
}) => {
  return (
    <div className="bg-white">
        <div className="mx-auto"> 
            <div className="flex justify-between items-center"> 
                {/* Title */}
                <div className="inline-block border-b-[2.5px] border-gray-600 mb-10 mt-10">
                    <h2 className="text-2xl mb-2 font-semibold tracking-tight text-gray-600">
                        My Favourites
                    </h2>
                </div> 
            </div> 

            <div className="w-full"> 
                <div className="grid grid-cols-2 gap-4 lg:grid lg:grid-cols-4 lg:gap-4 sm:grid sm:grid-cols-2 sm:gap-4">
                    {favourites.map((favourite: any) => (
                        <div className="mb-8" key={favourite.id}>
                            <ProductCard
                            image={favourite.images[0].image}
                            productName={favourite.name}
                            productBrand={favourite.brand}
                            />
                        </div>
                    ))}
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Favourites