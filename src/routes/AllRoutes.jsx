import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import { HomePage, ProductList, ProductDetails } from '../pages';
import ProtectedRoutes from './ProtectedRoutes';
import CartPage from '../pages/Cart/CartPage';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Pagenotfound from '../pages/Pagenotfound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/products',
                element: <ProductList />
            },
            {
                path: '/products/:id',
                element: <ProductDetails />
            },
            {
                path: '/cart',
                element: <ProtectedRoutes><CartPage /></ProtectedRoutes>
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: "/dashboard",
                element: <ProtectedRoutes><Dashboard /></ProtectedRoutes>
            },
            {
                path: '*',
                element: <Pagenotfound />
            }
        ]
    }
]);

export function AllRoutes() {
    return (
        <RouterProvider router={router} />
    )
}