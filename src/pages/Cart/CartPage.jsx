import CartList from "./components/CartList";
import CartEmpty from "./components/CartEmpty";
import { useCart } from "../../context/cartContext"

function CartPage() {
    const { state } = useCart();
    console.log(state.cart)
    const isEmpty = state.cart.length === 0;
    return (
        <div className="dark:bg-slate-800">
            {isEmpty ? <CartEmpty /> : <CartList />}
        </div>
    )
}

export default CartPage