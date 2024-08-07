import { PrismaClient } from "@prisma/client"; 

declare global {
    var prisma: PrismaClient | undefined
} 

// checking if the globalPrisma already exists.
const client = globalThis.prisma || new PrismaClient(); 

if(process.env.NODE_ENV !== 'production') globalThis.prisma = client 

export default client; 