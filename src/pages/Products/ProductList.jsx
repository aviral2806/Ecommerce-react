import { useState, useEffect } from "react"
import { useTitle } from "../../hooks/useTitle";
import { ProductCard } from "./ProductCard"
import { useLocation } from "react-router-dom";
import { useFilter } from "../../context/filterContext";


export function ProductList() {
    const searchT = useLocation();
    const searchTerm = new URLSearchParams(searchT.search).get('q')
    const { state, dispatch, initProductList, products } = useFilter()
    // console.log(productlist)
    // console.log(searchTerm)
    useTitle('Products List')
    useEffect(() => {
        async function fetchProds() {
            const response = await fetch(`http://localhost:3000/products?name_like=${searchTerm ? searchTerm : ''}`)
            const data = await response.json()
            initProductList(data)
        }
        fetchProds();
    }, [searchTerm])
    const [isOpen, setIsOpen] = useState(false)
    // console.log(productlist.sort((a, b) => a.price - b.price))

    // console.log(productlist)
    // console.log(productlist.filter(product => product.best_seller))
    // 'transition ease-in-out absolute left-0 h-full w-1/4 dark: bg-slate-800 z-10 dark:text-white pt-8 pl-8 shadow-xl'
    return (
        <div className="relative">
            <div className={`transition - all ease -in -out ${isOpen ? 'absolute' : 'hidden'} left-0 h-full w-1/4 dark:bg-slate-800 z-20 bg-white dark:text-white pt-8 pl-8 shadow-xl flex flex-col gap-8`}>
                <h1 className="text-2xl font-semibold">Filters</h1>
                <fieldset>
                    <legend>Sort By:</legend>
                    <div>
                        <input type="radio" id="plh" name="drone" value="huey" onChange={() => dispatch({ type: "LOW_TO_HIGH" })} checked={state.price === 'low' || false} />
                        <label htmlFor="plh">Price: Low to High</label>
                    </div>
                    <div>
                        <input type="radio" id="phl" name="drone" value="dewey" onChange={() => dispatch({ type: "HIGH_TO_LOW" })} checked={state.price === 'high' || false} />
                        <label htmlFor="phl">Price: High to Low</label>
                    </div>
                </fieldset>
                <div className="">
                    <p>Other filters: </p>
                    <div className="">
                        <input type="checkbox" id="best" onChange={() => dispatch({ type: "BEST_SELLER" })} checked={state.bestSeller || false} />
                        <label htmlFor="best">Best Seller</label>
                    </div>
                    <div className="">
                        <input type="checkbox" id="stock" onChange={() => dispatch({ type: 'IN_STOCK' })} checked={state.inStock || false} />
                        <label htmlFor="stock">In Stock</label>
                    </div>
                </div>
                <button className="cursor-pointer rounded-xl px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 w-1/2" onClick={() => dispatch({ type: "CLEAR_FILTERS" })}>
                    Clear Filters
                </button>
            </div>
            <div className="dark:bg-slate-800 flex flex-col justify-center items-center">
                <div className="pt-6 pb-2 flex justify-between w-[75vw]">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Products ({products.length})</h1>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {/* <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Three dots</h3> */}
                        {/* Kebab menu svg */}
                        <span className="dark:text-white text-xl text-semibold">
                            Filters
                        </span>
                    </button>
                </div>
                <div className="dark:bg-slate-800 grid justify-items-center w-[80vw] py-8 grid-cols-1 mdx:grid-cols-2 xl:grid-cols-3 gap-12 min-h-[70vh]">
                    {products.map((prod) => (
                        <ProductCard key={prod.id} prod={prod} />
                    ))}
                </div>
            </div>
        </div >


    )
}
