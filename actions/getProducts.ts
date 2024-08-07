// Getting the products via MongoDB. 
import prisma from "@/libs/prismadb"

export interface IProductParams {
    searchTerm?: string  | null
}

export default async function getProducts(params: IProductParams) {
    try { 

        const { searchTerm } = params; 
        let searchString = searchTerm; 

        if(!searchTerm) {
            searchString = ''
        }

        let query: any = {} 

        const products = await prisma.product.findMany({
            where: {
                ...query,
                OR: [
                    {
                        name: { 
                            contains: searchString, 
                            mode: 'insensitive'
                        },
                        description: {
                            contains: searchString, 
                            mode: 'insensitive'
                        }
                    }
                ]
            }
        }) 

        return products; 

    } catch(error: any) {
        throw new Error(error)
    }
}
