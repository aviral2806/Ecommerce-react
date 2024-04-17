import { Link } from "react-router-dom"
import { getUser } from "../../services"
import { useEffect, useState } from "react"

function Dropdownloggedin({ handleSignOut }) {
    const [user, setUser] = useState({})
    useEffect(() => {
        async function fetchUser() {
            const data = await getUser()
            setUser(data)
        }
        fetchUser()
    }, [])


    return (
        <div>
            <div className="z-10 absolute w-48 mt-2  bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    <span className="text-xl font-medium block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 ">Hello {user.username}</span>
                    <Link to="/dashboard">
                        <span className="cursor-pointer block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Your Profile</span>
                    </Link>

                </div>
                <div className="py-1">
                    <span onClick={() => handleSignOut()} className="cursor-pointer block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Sign out</span>
                </div>
            </div>
        </div>
    )
}

export default Dropdownloggedin