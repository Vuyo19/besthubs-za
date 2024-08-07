import Container from "./components/Container";
import Image from "next/image";
import HomeBanner from "./components/HomeBanner";
import ProductCardFlavours from "./components/products/ProductCardFlavours";
import getProducts, { IProductParams } from "@/actions/getProducts";

interface HomeProps {
  searchParams: IProductParams
}

export default async function Home({searchParams}: HomeProps) {
  
  const products = await getProducts(searchParams);

  return (
    <div>  
      <div> 
        <HomeBanner />
      </div> 
      <div className="p-8"> 
        <Container> 
            <div>  
              <div className="mb-5"> 
                <h2 className="text-3xl font-bold text-slate-700"> Browse Shisha Flavours </h2>
              </div>
              <div 
                className="grid grid-cols-2 sm:grid-grid-cols-3 
                lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap:10"> 
                  {products.map((product: any) => {
                    return <ProductCardFlavours key={product.id} data={product} />
                  })}
              </div>
            </div>
        </Container>
      </div>
    </div>
  );
}
