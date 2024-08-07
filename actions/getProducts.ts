// Getting the products via MongoDB. 
import prisma from "@/libs/prismadb"


export default async function getProducts() {
    try { 

        let query: any = {} 

        const products = await prisma.product.findMany({
            where: {
                ...query
            }
        }) 

        return products; 

    } catch(error: any) {
        throw new Error(error)
    }
}
