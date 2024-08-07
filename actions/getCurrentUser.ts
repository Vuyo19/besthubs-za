import { authOptions } from "@/pages/api/auth/[...nextauth]"; 
import { getServerSession } from "next-auth"
import prisma from "@/libs/prismadb"  

// Getting the Server Session. 
export async function getSession() { 
    // Creating the user session 
    return await getServerSession(authOptions); 
}  

export async function getCurrentUser(){
    try {
        const session  = await getSession(); 

        // Checking if the user exists in the session. 
        if(!session?.user?.email) {
            return null
        } 

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session?.user?.email
            },
            include: {
                orders: true
            }
        }); 

        if(!currentUser) {
            return null;
        } 

        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(), 
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailVerified?.
            toString() || null
        }


    } catch(error: any) {
        return null
    }
}
 

