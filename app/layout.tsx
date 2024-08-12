import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import CartProvider from "@/providers/CartProvider";
import { getCurrentUser } from "@/actions/getCurrentUser";
import FavouriteProvider from "@/providers/FavouriteProvider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BestHubs",
  description: "Create good times with the best moments",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser(); 

  return (
    <html lang="en">
      <body className={nunito.className}> 
        <CartProvider> 
          <FavouriteProvider> 
            <div className="flex flex-col min-h-screen"> 
              <NavBar currentUser={currentUser} />
              <main className="flex-grow bg-white"> 
                {children}
              </main>
              <Footer />
            </div>
          </FavouriteProvider>
        </CartProvider>
      </body>
    </html>
  );
}
