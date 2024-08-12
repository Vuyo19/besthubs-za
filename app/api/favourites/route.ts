import prisma from "@/libs/prismadb"
import { getCurrentUser } from "@/actions/getCurrentUser" 
import { NextResponse } from "next/server"
import { json } from "stream/consumers";


// Adding the product to the user favourite 
export async function POST(request: Request) {
    const currentUser = await getCurrentUser();  

    if(!currentUser) {
        return NextResponse.error(); 
    }

    const body = await request.json();   

    const { id } = body; 

    const productId = id  

    const favourite = await prisma.favourites.create({
        data: {
            userId: currentUser.id,
            productId: productId,
        },
    }); 

    return NextResponse.json(favourite);
} 



