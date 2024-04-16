import { useState, useEffect } from 'react';
import { ProductCard } from '../Products/ProductCard';

function FeaturedProducts() {
    const [prods, setProds] = useState([]);
    useEffect(() => {
        async function fetchProds() {
            const response = await fetch('http://localhost:3000/featured_products')
            const data = await response.json()
            setProds(data)
        }
        fetchProds();
    }, [])

    return (
        <div className='dark:bg-slate-800'>
            <h1 className='text-4xl dark:text-white text-center py-4 mb-8 font-semibold'>Featured Products</h1>
            <div className="flex flex-row flex-wrap justify-center items-center mds:gap-24 gap-10 pb-8">
                {prods.map((prod) => (
                    <ProductCard key={prod.id} prod={prod} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts