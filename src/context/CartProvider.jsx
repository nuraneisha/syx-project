import { useState, createContext, useContext } from "react";
import { AuthContext } from "../context/AuthContext";



export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const { currentUser } = useContext(AuthContext);

    const updateCartCount = async () => {

        if (currentUser) {
            const cartResponse = await fetch(`https://syx-backend-project.vercel.app/cart/${currentUser.uid}`);
            if (cartResponse.ok) {
                const cartData = await cartResponse.json();
                setCartCount(cartData.items.length);
            } else {
                console.error("Cannot count items");
            }
        }
    }

    return (
        <CartContext.Provider value={{ cartCount, updateCartCount }}>
            {children}
        </CartContext.Provider>
    );


}
