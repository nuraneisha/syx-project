import { useContext, createContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
    const { currentUser } = useContext(AuthContext);
    const [isVerified, setIsVerified] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showLoginModal, setShowLoginModal] = useState(false);

    useEffect(() => {
        if (!currentUser) {
            setShowLoginModal(true);
            setIsVerified(false);
            setLoading(false);
        }
        else {
            setShowLoginModal(false);
            const verified = currentUser.emailVerified || false;
            setIsVerified(verified);
            if (!verified) {
                alert("Please verify your email")
            }
            setLoading(false);
        }


    }, [currentUser]);

    return (
        <ModalContext.Provider value={{ showLoginModal, setShowLoginModal, isVerified }}>
            {/* loading->to check if the user is log in or not */}
            {!loading && children}
        </ModalContext.Provider>
    );
}
