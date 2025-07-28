import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./App.css"
import App from './App.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ModalProvider } from "./context/ModalProvider";
import { AuthProvider } from "./context/AuthProvider";
import { CartProvider } from "./context/CartProvider";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
