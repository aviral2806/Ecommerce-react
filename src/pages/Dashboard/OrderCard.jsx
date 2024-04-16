import { Link } from "react-router-dom"

function OrderCard({ order }) {
    return (
        <div className="w-1/2 flex shadow-xl flex-col">
            <div className="w-full flex justify-between p-6">
                <span>Order id: {order.id}</span><span>Total: {order.amount_paid}$</span>
            </div>
            {order.cartList.map((item) => (
                <div className="mx-4 mb-4 flex justify-between" key={item.index}>
                    <Link to={`/products/${item.id}`}>
                        <img src={item.poster} className="w-25 h-20 inline" alt="" />
                    </Link>
                    <div className="text-right">
                        <Link to={`/products/${item.id}`}>
                            <h1 className="text-xl font-medium">{item.name}</h1>
                        </Link>
                        <h1 className="text-xl font-medium">{item.price}$</h1>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OrderCard