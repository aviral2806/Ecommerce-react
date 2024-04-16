/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useCart } from '../../context/cartContext';
import './ProductCard.css';
import { Link } from 'react-router-dom';

export function ProductCard({ prod }) {
    const { addToCart, removeFromCart, cart } = useCart()
    const [inCart, setInCart] = useState(false)

    useEffect(() => {
        const found = cart.find(item => item.id === prod.id)
        if (found) {
            setInCart(true)
        } else {
            setInCart(false)
        }
    }, [cart, prod.id])

    console.log(cart)


    return (
        <div className="">
            <div className={`card dark:bg-slate-700 ${inCart && 'hover:border-red-600'}`}>
                {prod.best_seller && (<span className='text-white bg-orange-600 py-1 px-2 rounded-lg absolute top-3 left-3 text-xs'>best seller</span>)}
                <div className="flex flex-col justify-between h-[90%]">
                    <Link to={`/products/${prod.id}`}>
                        <img src={prod.poster} alt="" className='w-full' />
                    </Link>
                    <div className="">
                        <p className="text-title dark:text-white mb-2">{prod.name}</p>
                        <p className="text-body dark:text-white mb-2">{prod.overview}</p>
                        <p className='dark:text-white text-2xl'>${prod.price}</p>
                    </div>
                </div>
                {inCart ? <button className={`card-button bg-red-600`} onClick={() => removeFromCart(prod)}>Remove from cart</button> : <button className={`card-button`} onClick={() => addToCart(prod)}>Add to cart</button>}
            </div>
        </div>
    )
}

