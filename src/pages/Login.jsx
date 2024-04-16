import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { login } from '../services';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
    const tok = sessionStorage.getItem('token')
    const navigate = useNavigate()
    async function handleSubmit(e) {
        e.preventDefault();
        const authDetail = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        const data = await login({ authDetail })
        console.log(data)
        if (data.accessToken) {
            toast.success("User logged in successfully!")
            navigate('/products')
            sessionStorage.setItem('token', data.accessToken)
            sessionStorage.setItem('user', JSON.stringify(data.user.id))
        } else {
            toast.error(data)
        }
    }

    return (
        <div>
            <div className="flex justify-center items-start h-screen dark:bg-slate-800 pt-14">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col dark:bg-slate-700 dark:text-white h-[50vh] w-[70vw]">
                    {tok && <h1 className='text-bold text-3xl'>Already logged in</h1>}
                    {!tok && (<><h1 className="text-3xl font-semibold mb-6">Login</h1><form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                        <button className="mt-24 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Login
                        </button>
                    </form></>)}

                </div>
            </div>
        </div>
    )
}
