import { useCart } from "../../../context/cartContext"

function CartCard({ product }) {
    const { removeFromCart } = useCart()

    return (
        <div className="dark:bg-slate-700 rounded-xl min-w-[60vw] flex flex-row h-[15vh] justify-around shadow-md items-center">
            <img src={product.poster} alt="" className="h-[80%] w-auto" />
            <h1 className="text-xl">{product.name}</h1>
            <h1 className="text-lg">{product.price}$</h1>
            <svg onClick={() => removeFromCart(product)} className="cursor-pointer w-[29px] h-[29px] text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
        </div>
    )
}

export default CartCard