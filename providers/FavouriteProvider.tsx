'use client'
import { FavouritesContextProvider } from "@/hooks/useFavourite" 

interface FavouriteProviderProps {
    children: React.ReactNode
}

const FavouriteProvider: React.FC<FavouriteProviderProps> = ({
    children
}) => {
  return (
    <FavouritesContextProvider>
        {children}
    </FavouritesContextProvider>
  )
}

export default FavouriteProvider; 
