// Getting the Favourite Products
import prisma from "@/libs/prismadb" 
import { getCurrentUser } from "./getCurrentUser" 
import { NextResponse } from "next/server"

export default async function getFavouriteProductsByUser(userId: string) {
    try {

        const favourites = await prisma.favourites.findMany({
            where: {
                userId: userId,
            },
            include: {
                product: true, // Include the product details in the response
            },
        }); 

        const favouriteProducts = favourites.map((favourite) => favourite.product);

        return favouriteProducts;

    } catch(error: any) {
        throw new Error(error)
    }
}
