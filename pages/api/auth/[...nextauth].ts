import NextAuth, { AuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google" 
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/libs/prismadb"; 
import bcrypt from 'bcrypt';   

export const authOptions: AuthOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
      CredentialsProvider({
          name: 'credentials', 
          credentials: {
              email: {
                  label: 'email', 
                  type: 'text'
              }, 
              password: {
                  label: 'password', 
                  type: 'password'
              },
          }, 
          async authorize(credentials) {
              // Logic for authorizing the user. 
              if(!credentials?.email || !credentials.password) {
                  throw new Error('Invalid email or password')
              } 
              
              // getting the user from db
              const user = await prisma.user.findUnique({
                  where: {
                      email: credentials.email 
                  }
              }) 
  
              if(!user || !user?.hashedPassword) {
                  throw new Error('Invalid email or password')
              }   
              
              // Checking if the password matches. return true or false
              const isCorrectPassword = await bcrypt.compare(
                  credentials.password, 
                  user.hashedPassword
              ) 
  
              if(!isCorrectPassword) {
                  throw new Error('Invalid email or password')
              } 
              
              // Returning the user if the details are correct. 
              return user
          }
      })
    ],
    adapter: PrismaAdapter(prisma),
    pages: {
      signIn: '/login'
    },
    debug: process.env.NODE_ENV === 'development', 
    session: {
      strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET // Get NEXTAUTH_SECRET.
  }

export default NextAuth(authOptions); 

