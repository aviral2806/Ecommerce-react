import { useEffect, useState } from "react"
import { useTitle } from "../hooks/useTitle";
import { useParams } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { addToCart, cart } = useCart();
    const [inCart, setInCart] = useState(false);

    const { id } = useParams();
    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch(`http://localhost:3000/products/${id}`);
            const data = await response.json()
            setProduct(data);
        }
        fetchProducts();
    }, [id]);

    useTitle(product.name);

    useEffect(() => {
        const found = cart.find(item => item.id === product.id)
        if (found) {
            setInCart(true)
        } else {
            setInCart(false)
        }
    }, [cart, product.id])



    function handleAdd() {
        if (inCart) {
            toast.error("Product already in cart!")
        } else {
            addToCart(product);
            toast.success("Product added to cart!")
        }
    }

    return (
        <main className="dark:bg-slate-800 m-0 pb-12">
            <section>
                <h1 className="pt-10 pb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{product.name}</h1>
                <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{product.overview}</p>
                <div className="flex flex-wrap justify-around">
                    <div className="max-w-xl my-3">
                        <img className="rounded" src={product.poster} alt={product.name} />
                    </div>
                    <div className="max-w-xl my-3">
                        <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                            <span className="mr-1">$</span>
                            <span className="">{product.price}</span>
                        </p>
                        <p className="my-4 select-none">
                            {product.best_seller && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>}
                            {product.in_stock && <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span>}
                            {!product.in_stock && <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span>}
                            <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{product.size} MB</span>
                        </p>
                        <p className="my-3">
                            <button onClick={handleAdd} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800`}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>
                            {/* <button className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}  disabled={ product.in_stock ? "" : "disabled" }>Remove Item <i className="ml-1 bi bi-trash3"></i></button> */}
                        </p>
                        <p className="text-lg text-gray-900 dark:text-slate-200">
                            {product.long_description}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}