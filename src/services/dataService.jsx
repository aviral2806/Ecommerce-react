export async function getUser() {
    const tok = sessionStorage.getItem('token')
    const user = JSON.parse(sessionStorage.getItem('user'))
    const response = await fetch(`http://localhost:3000/600/users/${user}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', authorization: `Bearer ${tok}` }
    });
    const data = await response.json()
    return data
}

export async function getOrders() {
    const tok = sessionStorage.getItem('token')
    const user = JSON.parse(sessionStorage.getItem('user'))
    try {
        const response = await fetch(`http://localhost:3000/660/orders?user=${user}`, {
            method: 'GET',
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${tok}` }
        });
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err)
    }


}

export async function createOrder(order) {
    const tok = sessionStorage.getItem('token')
    const response = await fetch('http://localhost:3000/660/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', authorization: `Bearer ${tok}` },
        body: JSON.stringify(order)
    });
    const data = await response.json()
    return data
}