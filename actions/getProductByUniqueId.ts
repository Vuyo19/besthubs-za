import prisma from "@/libs/prismadb"; 

interface IParams {
    productBrand?: string,
    productName?: string
}

export default async function getProductByUniqueId(params: IParams) {
    try {
        const { productBrand, productName } = params; 

        const unique_id = `${params.productBrand}-${params.productName}`
        
        const product = await prisma.product.findFirst({
            where: {unique_id: unique_id}
        })  

        if(!product) {
            return null;
        }

        return product;  

    } catch(error: any) {
        throw new Error(error);
    }
}