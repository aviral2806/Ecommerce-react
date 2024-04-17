import { useState, useEffect } from "react"
import { getOrders } from "../../services"
import OrderCard from "./OrderCard"

function Dashboard() {
    const [orders, setOrders] = useState([])
    const tok = sessionStorage.getItem('token')
    const user = JSON.parse(sessionStorage.getItem('user'))

    useEffect(() => {

        async function fetchData() {
            const data = await getOrders()
            setOrders(data)
        }

        fetchData()


    }, [])
    return (
        <section className="dark:bg-slate-800 dark:text-white min-h-[81vh] flex flex-col justify-start items-center gap-4">
            {orders.length === 0 && <h1 className="text-3xl font-semibold my-8">No orders made by user to show</h1>}
            {orders.length > 0 && (
                <>
                    <h1 className="text-center my-8 text-3xl font-semibold">Your orders</h1>
                    {orders.map((order) => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </>

            )}
        </section>
    )
}

export default Dashboard