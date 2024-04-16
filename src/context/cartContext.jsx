import { useContext, createContext } from "react";
import { useReducer } from "react";

const initialState = {
    cart: [],
    totalAmount: 0
}

const cartContext = createContext(initialState);

const CartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: payload.products,
                totalAmount: payload.totalAmount
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: payload.products,
                totalAmount: payload.totalAmount
            }
        case "CLEAR_CART":
            return {
                ...state,
                cart: [],
                totalAmount: 0
            }
        default:
            return state;
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    function addToCart(product) {
        const newList = state.cart.concat(product);
        const newTotalAmount = state.totalAmount + product.price;
        console.log(newList)

        dispatch({
            type: "ADD_TO_CART",
            payload: { products: newList, totalAmount: newTotalAmount }
        });
    }

    function removeFromCart(product) {
        const newList = state.cart.filter(item => item.id !== product.id);
        const newTotalAmount = state.totalAmount - product.price;

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: { products: newList, totalAmount: newTotalAmount }
        });
    }
    function clearCart() {
        dispatch({
            type: "CLEAR_CART"
        })
    }

    let value = {
        state,
        cart: state.cart,
        dispatch,
        addToCart,
        removeFromCart,
        clearCart
    }
    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}

export const useCart = () => {
    const car = useContext(cartContext);
    return car;
}