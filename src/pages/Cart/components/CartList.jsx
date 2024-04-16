import { useState } from "react";
import { useCart } from "../../../context/cartContext"
import CheckoutModal from "./CheckoutModal";
import CartCard from "./CartCard"

function CartList() {
    const { state } = useCart();
    const [showModal, setShowModal] = useState(false);
    return (

        <div className="dark:bg-slate-800 dark:text-white text-black flex flex-col items-center">
            <div className="flex justify-between w-[60vw] pt-4 px-4">
                <h1 className="text-2xl font-semibold">Cart({state.cart.length})</h1>
                <h1 className="text-2xl font-semibold">Total: {state.totalAmount}$</h1>
            </div>
            <div className="min-h-[73vh] flex gap-10 flex-col items-center pb-14 pt-8 mb-1">
                {state.cart.map(product => (
                    <CartCard key={product.id} product={product} />
                ))}
            </div>

            <button onClick={() => setShowModal(true)} className="cursor-pointer rounded-xl px-6 py-2 bg-blue-500 text-white hover:bg-blue-600 font-medium">Check out</button>
            {showModal && <CheckoutModal setShowModal={setShowModal} />}
        </div>
    )
}

export default CartList