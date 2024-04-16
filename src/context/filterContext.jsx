/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';
import { useReducer } from 'react';

const initialState = {
    productlist: [],
    price: null,
    bestSeller: false,
    inStock: false,
}

const filterContext = createContext(initialState);

const filterReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "PRODUCT_LIST":
            return {
                ...state,
                productlist: payload.products
            };
        case "BEST_SELLER": // Fix: Removed the colon after 'case' keyword and added a colon after the case value
            return {
                ...state,
                bestSeller: !state.bestSeller,
            };
        case "IN_STOCK":
            return {
                ...state,
                inStock: !state.inStock,
            };
        case "HIGH_TO_LOW":
            return {
                ...state,
                price: "high"
            };
        case "LOW_TO_HIGH":
            return {
                ...state,
                price: "low"
            };
        case "CLEAR_FILTERS":
            return {
                ...state,
                price: null,
                bestSeller: false,
                inStock: false,
            };
        default:
            return state;
    }
}

export const FilterProvider = ({ children }) => {

    const [state, dispatch] = useReducer(filterReducer, initialState);

    function initProductList(products) {
        dispatch({
            type: "PRODUCT_LIST",
            payload: { products }
        });
    }

    function setBestSeller(products) {
        return state.bestSeller ? products.filter(product => product.best_seller) : products;
    }

    function setInStock(products) {
        return state.inStock ? products.filter(product => product.in_stock) : products;
    }

    function sortList(products) {
        if (state.price === 'high') {
            return products.sort((a, b) => b.price - a.price);
        }
        if (state.price === 'low') {
            return products.sort((a, b) => a.price - b.price);
        }
        else {
            return products;
        }
    }

    const filteredList = sortList(setInStock(setBestSeller(state.productlist)));

    let value = {
        state,
        dispatch,
        products: filteredList,
        initProductList,
    }

    return (
        <filterContext.Provider value={value}>
            {children}
        </filterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(filterContext);
    return context;
}
