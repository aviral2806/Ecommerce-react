import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from "../../../context/cartContext"
import { getUser, createOrder } from "../../../services";

function CheckoutModal({ setShowModal }) {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({})
    const { state, cart, clearCart } = useCart();
    const tok = sessionStorage.getItem('token')
    const user = JSON.parse(sessionStorage.getItem('user'))
    useEffect(() => {
        async function fetchUser() {
            const data = await getUser()
            setUserData(data)
            console.log(data)
        }
        if (tok && user) {
            fetchUser()
        }
    }, [])
    async function handleSubmit(e) {
        e.preventDefault();
        if (e.target.name.value && e.target.email.value && e.target.cardNumber.value && e.target.cvv.value) {
            const order = {
                cartList: cart,
                user: user,
                amount_paid: state.totalAmount,
                quantity: cart.length
            }
            const data = await createOrder(order)
            console.log(data)
            if (data) {
                toast.success('Order placed successfully')
                navigate('/')
                clearCart()
            } else {
                toast.error('Something went wrong')
            }
        } else {
            toast.error('Please fill all the fields')
        }
    }

    return (
        <div className="fixed bg-black bg-opacity-50 w-full h-screen z-10 top-0 left-0">
            <div className="flex justify-center items-center w-full h-full">
                <div className="w-1/3 pb-8 bg-slate-700 flex-col flex rounded-lg justify-center items-center">

                    <span onClick={() => setShowModal(false)} className="items-end flex-col pr-2 pt-2 flex w-full cursor-pointer">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                    </span>

                    <form onSubmit={handleSubmit} className="w-5/6">
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                defaultValue={userData.username || ""}
                            // value={userData.username || ""}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                defaultValue={userData.email || ""}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="cardNumber">
                                Card Number
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="cardNumber"
                                type="text"
                                placeholder="Enter your card number"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="cvv">
                                CVV
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="cvv"
                                type="text"
                                placeholder="Enter your CVV"
                            />
                        </div>
                        <div className="text-center pt-3 pb-5 text-green-400 font-semibold text-2xl">
                            {state.totalAmount}$
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-blue-500 rounded-lg px-12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Pay
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default CheckoutModal