import { NavLink } from "react-router-dom"

const Dropdownloggedout = ({ setDropDownShow }) => {
    return (
        <div>
            <div className="z-10 absolute w-48 mt-2  bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    <NavLink to={'/login'} onClick={() => { setDropDownShow(false) }} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Login</NavLink>
                    <NavLink to={'/register'} onClick={() => { setDropDownShow(false) }} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Register</NavLink>
                </div>
                <div className="py-1">
                    <NavLink to={'/products'} onClick={() => { setDropDownShow(false) }} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">All ebooks</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Dropdownloggedout