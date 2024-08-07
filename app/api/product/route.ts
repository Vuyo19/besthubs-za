import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"
import { getCurrentUser } from "@/actions/getCurrentUser" 

export async function POST(request: Request) {
    const currentUser = await getCurrentUser(); 

    if(!currentUser || currentUser.role !== 'ADMIN') {
        return NextResponse.error(); 
    }

    const body = await request.json(); 

    const { name, description, price, brand, category, inStock, images } = body; 
    
    const unique_id = brand.toLowerCase().replace(/\s+/g, '-') + "-" + name.toLowerCase().replace(/\s+/g, '-'); 

    const product = await prisma.product.create({
        data: {
            name, 
            description, 
            brand, 
            category, 
            images, 
            price: parseFloat(price),
            inStock,
            unique_id: unique_id
        }
    })  

    return NextResponse.json(product); 

} 

export async function PUT(request: Request) {
    const currentUser = await getCurrentUser();  
    
    if(!currentUser || currentUser.role !== 'ADMIN') {
        return NextResponse.error(); 
    } 

    const body = await request.json(); 

    const { id, inStock } = body
    
    const product = await prisma.product.update({
        where: {id: id}, 
        data: {inStock}
    })

    return NextResponse.json(product)
 
} 

