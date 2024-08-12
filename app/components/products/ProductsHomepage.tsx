import React from 'react'
import ProductCard from './ProductCard'
import Link from 'next/link'

interface ProductsHomepageProps {
    products: any
}


const ProductsHomepage: React.FC<ProductsHomepageProps> = ({ products }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          {/* Title */}
          <div className="inline-block border-b-[2.5px] border-gray-600 mb-10 mt-10">
            <h2 className="text-2xl mb-2 font-semibold tracking-tight text-gray-600">
              Browse Products
            </h2>
          </div>

          {/* View Also */}
          <Link href="/shop-flavour">
            <div className="flex items-center">
              <button className="bg-gray-300 hover:bg-mystique-green text-gray-600 font-semibold hover:text-white hover:underline rounded-lg p-2"> 
                View All
              </button>
            </div>
          </Link>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-2 gap-4 lg:grid lg:grid-cols-4 lg:gap-4 sm:grid sm:grid-cols-2 sm:gap-4">
            {products.map((product: any) => (
              <div className="mb-8" key={product.id}>
                <ProductCard
                  image={product.images[0].image}
                  productName={product.name}
                  productBrand={product.brand}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsHomepage