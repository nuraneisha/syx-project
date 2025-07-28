import { useState, createContext } from "react";
import { getAuth } from "firebase/auth";
const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    const updateCartCount = async () => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            const cartResponse = await fetch(`https://syx-backend-project.vercel.app/cart/${user.uid}`);
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
