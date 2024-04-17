import { useState, useEffect } from 'react';
import { ProductCard } from '../Products/ProductCard';
import { getFeaturedProducts } from '../../services';

function FeaturedProducts() {
    const [prods, setProds] = useState([]);
    useEffect(() => {
        async function fetchProds() {
            const data = await getFeaturedProducts();
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