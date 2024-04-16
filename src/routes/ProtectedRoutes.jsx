import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Login } from '../pages/Login'
import { useEffect } from 'react';


function ProtectedRoutes({ children }) {
    const tok = sessionStorage.getItem('token')
    useEffect(() => {
        if (!tok) {
            toast.error('You need to login first!')
        }
    }, [])
    return tok ? children : <Login />
}

export default ProtectedRoutes