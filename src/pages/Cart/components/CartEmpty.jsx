import { NavLink } from "react-router-dom"

function CartEmpty() {
    return (
        <div className="dark:bg-slate-800 p-[1.5px]">
            <div className="dark:bg-slate-800 min-h-[80vh]">
                <h1 className="text-2xl font-bold text-center  dark:text-white p-16">Your cart is empty! Add products by going to the <NavLink to={'/products'} className='underline'>products</NavLink> page </h1>
            </div>
        </div>
    )
}

export default CartEmpty