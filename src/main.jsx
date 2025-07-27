import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./App.css"
import App from './App.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ModalProvider } from "./context/ModalProvider";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </StrictMode>,
)
