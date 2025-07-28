import Header from "./Header";
import Footer from "./Footer";
import Login from "../pages/Login"
import { ModalContext } from "../context/ModalProvider";
import { useContext } from "react"

//to make Header always on top and Footer always at the bottom
export default function Layout({ children }) {
    const { showLoginModal } = useContext(ModalContext);

    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <div style={{ flex: 1 }}>
                {children}
            </div>
            <Footer />
            {showLoginModal && <Login />}
        </div>
    );
}