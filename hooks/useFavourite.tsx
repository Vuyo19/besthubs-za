import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { toast } from 'react-hot-toast';
import axios from 'axios'; // For making API requests 
import { CartProductType } from "@/app/products/[productBrand]/[productName]/ProductDetails";
import prisma from "@/libs/prismadb"
import { getCurrentUser } from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";

type FavouritesContextType = {
    favourites: CartProductType[] | null; 
    handleAddToFavourites: (product: CartProductType) => void;
    handleRemoveFromFavourites: (product: CartProductType) => void;
    handleClearFavourites: () => void;
}  

export const FavouritesContext = createContext<FavouritesContextType | null >(null);

interface Props {
    [propName: string]: any 
} 

export const FavouritesContextProvider = (props: Props) => {
    const [favourites, setFavourites] = useState<CartProductType[] | null>(null); 

    useEffect(() => {
        const fetchFavourites = async () => { 

            try {
                // make dynamic for the userId. 
                const favourites = await prisma.favourites.findMany({
                    where: { userId: '66a4db91c338b37a422338e9' },
                    include: { product: true }
                }); 
                 
                const favouriteProducts: CartProductType[] = favourites.map(favourite => ({
                    id: favourite.product.id,
                    name: favourite.product.name,
                    description: favourite.product.description,
                    price: favourite.product.price,
                    brand: favourite.product.brand,
                    category: favourite.product.category,
                    inStock: favourite.product.inStock,
                    unique_id: favourite.product.unique_id,
                    images: favourite.product.images,
                    quantity: 1, // Default or adjust based on your logic
                    image: favourite.product.images[0]?.image || '', // Default or adjust based on your logic
                  }));
          
                  setFavourites(favouriteProducts); 

            } catch (error) {
                toast.error('Failed to load favourites');
            }
        } 
        
        // console.log(favourites); 
        fetchFavourites();

    }, []);  

    // Add product to favourites
    const handleAddToFavourites = useCallback(async (product: CartProductType) => {
        try {
            await axios.post(`/api/favourites`, product);
            setFavourites((prev) => prev ? [...prev, product] : [product]);
            toast.success('Product added to favourites');
        } catch (error) {
            toast.error('Failed to add to favourites');
        }
    }, []); 

    // Remove product from favourites
    const handleRemoveFromFavourites = useCallback(async (product: CartProductType) => {
        try {
            await axios.delete(`/api/favourites/${product.id}`);
            setFavourites((prev) => prev?.filter(item => item.id !== product.id) || null);
            toast.success('Product removed from favourites');
        } catch (error) {
            toast.error('Failed to remove from favourites');
        }
    }, []); 

    // Clear all favourites  
    const handleClearFavourites = useCallback(() => {
        setFavourites(null);
        toast.success('All favourites cleared');
    }, []);

    const value = {
        favourites,
        handleAddToFavourites,
        handleRemoveFromFavourites,
        handleClearFavourites
    };

    return <FavouritesContext.Provider value={value} {...props} />;

} 

export const useFavourites = () => {
    const context = useContext(FavouritesContext);

    if (context === null) {
        throw new Error("useFavourites must be used within a FavouritesContextProvider");
    }

    return context;
};
