import { CartProductType } from "@/app/products/[productBrand]/[productName]/ProductDetails";
import { createContext, use, useCallback, useContext, useEffect, useState } from "react"; 
import { toast } from 'react-hot-toast'; 

type CartContextType = {
    cartTotalQty: number,
    cartTotalAmount: number,
    cartProducts: CartProductType[] | null // if empty. 
    handleAddProductToCart: (product: CartProductType) => void;
    handleRemoveProductFromCart: (product: CartProductType) => void;
    handleCartQtyIncrease: (product: CartProductType) => void;
    handleCartQtyDecrease: (product: CartProductType) => void;
    handleClearCart: () => void; 
    // paymentIntent: string | null; 
    // handleSetPaymentIntent: (val: string | null) => void; 
}

export const CartContext = createContext<CartContextType | null>(null); 

interface Props {
    [propName: string]: any 
}

export const CartContextProvider = (props: Props) => { 

    // Store the total Quantity 
    const [cartTotalQty, setCartTotalQty] = useState(0);   
    const [cartTotalAmount, setCartTotalAmount] = useState(0); 
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);  
    const [paymentIntent, setPaymentIntent] = useState<string | null>(null); 
    

    // Getting the cart items
    useEffect(() => {
        // Storing the cart Items. 
        const cartItems: any = localStorage.getItem('BestHubsCartItems'); 
        const cProducts: CartProductType[] | null = JSON.parse(cartItems);   
        // const shopoPaymentIntent: any = localStorage.getItem('shopoPaymentIntent');
        // const paymentIntent: string | null = JSON.parse(shopoPaymentIntent); 

        setCartProducts(cProducts); 
        setPaymentIntent(paymentIntent); 

    }, []);  

    {/* useEffect to get the total amount of the products.  */}
    useEffect(() => {
        const getTotals = () => {
        
            if(cartProducts) {
                const { total, qty } = cartProducts?.reduce((acc, item) => {
                    const itemTotal = item.price * item.quantity 

                    acc.total += itemTotal; 
                    acc.qty += item.quantity;  

                    return acc; 
                }, { 
                    total: 0,
                    qty: 0
                }) 

                setCartTotalQty(qty); 
                setCartTotalAmount(total); 
            }
        }

        getTotals() 
    }, 
    [cartProducts])

    {/* For adding the product. */}
    const handleAddProductToCart = useCallback((product: CartProductType) => {
            setCartProducts((prev) => {
            let updatedCart; 

            if(prev) { 
                // Adding to the existing cart
                updatedCart = [...prev, product]
            } else {
                updatedCart = [product]
            }  

            // Saving the cart to local storage. 
            localStorage.setItem('BestHubsCartItems', JSON.stringify(updatedCart));  
            toast.success('Product added to cart'); 
            return updatedCart; 
        }) 

    }, []) 

    {/* For removing the product */}
    const handleRemoveProductFromCart = useCallback((product: CartProductType) => {
        if(cartProducts) {
            // Removing one of the products. 
            const filteredProducts = cartProducts.filter((item) => {
                return item.id !== product.id
            }) 

            setCartProducts(filteredProducts) 
            // Saving the cart to local storage. 
            localStorage.setItem('BestHubsCartItems', JSON.stringify(filteredProducts));  
            toast.success('Product removed'); 
        }
    }, [cartProducts]); 

    {/*  Handling the cart QTY increase. */} 
    const handleCartQtyIncrease = useCallback((
        product: CartProductType
        ) => {
        let updatedCart; 

        if(product.quantity === 99) {
            return toast.error('Ooops Maximum reached!')
        } 

        // Finding the index of the product to update. 
        if(cartProducts) {
            updatedCart = [...cartProducts] 

            const existingIndex = cartProducts.findIndex((item) => 
            item.id === product.id);  // finding the existing item. 
            // If the product exists, will return number bigger than -1.   

            // updating the qty by increasing. 
            if(existingIndex > -1) {
                updatedCart[existingIndex].quantity = updatedCart[existingIndex].quantity + 1 
            } 

            // Updating the cart products.  
            setCartProducts(updatedCart); 
            localStorage.setItem('BestHubsCartItems', JSON.stringify(updatedCart)); 

        }
    }, 
    [cartProducts]); 

    {/* Handling the cart QTY decrease. */} 
    const handleCartQtyDecrease = useCallback((product: CartProductType) => {
        let updatedCart; 

        if(product.quantity === 1) {
            return toast.error('Ooops Minimum reached!')
        } 

        // Finding the index of the product to update. 
        if(cartProducts) {
            updatedCart = [...cartProducts] 

            const existingIndex = cartProducts.findIndex((item) => 
            item.id === product.id);  // finding the existing item. 
            // If the product exists, will return number bigger than -1.   

            // updating the qty by increasing. 
            // Making sure the product exists in the first place.
            if(existingIndex > -1) {
                updatedCart[existingIndex].quantity = updatedCart[existingIndex].quantity - 1 
            } 

            // Updating the cart products.  
            setCartProducts(updatedCart); 
            localStorage.setItem('BestHubsCartItems', JSON.stringify(updatedCart)); 

        }
    }, [cartProducts]) ; 

    const handleClearCart = useCallback(() => {
        setCartProducts(null); // clearing the cart. 
        setCartTotalQty(0); 
     
        localStorage.setItem('BestHubsCartItems', JSON.stringify(null));  

    }, [cartProducts]);

    // Handling the payment intent into local storage
    /* const handleSetPaymentIntent = useCallback((val: string | null) => {
        setPaymentIntent(val)
        localStorage.setItem('shopoPaymentIntent', JSON.stringify(val)); 
    }, 
    [paymentIntent]) */

    const value = {
        cartTotalQty, 
        cartProducts, 
        cartTotalAmount,
        handleAddProductToCart, 
        handleRemoveProductFromCart,
        handleCartQtyIncrease, 
        handleCartQtyDecrease, 
        handleClearCart,
        // paymentIntent,
        // handleSetPaymentIntent
    }

    return <CartContext.Provider value={value} {...props} /> 
} 

export const useCart = () => {
    const context = useContext(CartContext);  

    if(context === null) {
        throw new Error("useCart must be used within a CartContextProvider"); 

    }

    return context; 
}; 

