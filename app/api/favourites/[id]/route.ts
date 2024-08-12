import prisma from "@/libs/prismadb"
import { getCurrentUser } from "@/actions/getCurrentUser" 
import { NextResponse } from "next/server"
import { json } from "stream/consumers";

export async function DELETE(request: Request, {params}: {params: {id: string}}) {
    const currentUser = await getCurrentUser();  

    if (!currentUser) {
        return NextResponse.error(); 
    }

    const productId = params.id;    

    try {
        const favourite = await prisma.favourites.delete({
            where: {
                userId_productId: {
                    userId: currentUser.id,
                    productId: productId,
                },
            },
        });  

        return NextResponse.json(favourite);
    } catch (error) {
        console.error('Failed to delete favourite:', error);
        return new NextResponse('Failed to delete favourite', { status: 500 });
    } 
}