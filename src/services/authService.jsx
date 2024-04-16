export async function login({ authDetail }) {
    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(authDetail)
    })

    const data = await response.json()
    return data
}

export async function register({ authDetail }) {
    const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(authDetail)
    })

    const data = await response.json()
    return data
}