import Header from "./Header";
import Footer from "./Footer";


//to make Header always on top and Footer always at the bottom
export default function Layout({ children }) {

    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <div style={{ flex: 1 }}>
                {children}
            </div>
            <Footer />
        </div>
    );
}
