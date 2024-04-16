import React from 'react'
import { FilterProvider } from './context/filterContext.jsx'
import { CartProvider } from './context/cartContext.jsx'
import ReactDOM from 'react-dom/client'
import { AllRoutes } from './routes/AllRoutes.jsx'
import { ToastContainer } from 'react-toastify'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FilterProvider>
      <CartProvider>
        <AllRoutes />
        <ToastContainer />
      </CartProvider>
    </FilterProvider>
  </React.StrictMode>,
)
