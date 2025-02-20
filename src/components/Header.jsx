import { NavLink, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Dropdownloggedout from "./Dropdown/Dropdownloggedout";
import Dropdownloggedin from "./Dropdown/Dropdownloggedin";
export function Header() {
    const tok = sessionStorage.getItem('token')
    const [dropDownShow, setDropDownShow] = useState(false);
    const [hidden, setHidden] = useState(true);
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('dark')) || false);
    const active = "block py-2 px-3 text-white bg-blue-700 rounded mds:bg-transparent mds:text-blue-700 mds:p-0 mds:dark:text-blue-500";
    const inactive = 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 mds:hover:bg-transparent mds:hover:text-blue-700 mds:p-0 dark:text-white mds:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white mds:dark:hover:bg-transparent dark:border-gray-700';
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const search = e.target.search.value
        e.target.search.value = ''
        navigate(`/products?q=${search}`)
    }
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('dark', JSON.stringify(darkMode))
    }, [darkMode])

    function handleSignOut() {
        sessionStorage.removeItem('token')
        setDropDownShow(false)
        navigate('/')
    }

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900" style={{ paddingBottom: '6px' }}>
                <div className="max-w-screen flex flex-wrap items-center justify-between mx-10 p-4">
                    <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecommerce</span>
                    </NavLink>
                    <div className="flex mds:order-3">
                        {/* Mobile screen search */}
                        <button type="button" data-collapse-toggle="navbar-search" onClick={() => { setHidden(!hidden) }} aria-controls="navbar-search" aria-expanded="false" className="mds:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                        <span className="p-1">
                            <svg onClick={() => setDropDownShow(!dropDownShow)} className="pt-1 w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            {dropDownShow && (tok ? <Dropdownloggedin handleSignOut={handleSignOut} /> : <Dropdownloggedout setDropDownShow={setDropDownShow} />)}
                        </span>
                        <span className="py-1.5 pr-1.5">
                            <NavLink to={'/cart'}>
                                <svg className="w-[26px] h-[26px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                                </svg>
                            </NavLink>
                        </span>



                        <div className="flex flex-row gap-4 text-black dark:text-white">
                            <button className="" onClick={() => { setDarkMode(!darkMode) }} >
                                {darkMode ? <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V3m0 18v-2M7 7 5.7 5.7m12.8 12.8L17 17M5 12H3m18 0h-2M7 17l-1.4 1.4M18.4 5.6 17 7.1M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                </svg> : <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 0 1-.5-18v0A9 9 0 0 0 20 15h.5a9 9 0 0 1-8.5 6Z" />
                                </svg>}
                            </button>
                            <form onSubmit={handleSubmit}>
                                <input type="text" id="search-navbar" name='search' className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mds:block hidden" placeholder="Search..." />
                            </form>
                        </div>
                        <button data-collapse-toggle="navbar-search" type="button" onClick={() => { setHidden(!hidden) }} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg mds:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    {/* Burger menu contents */}
                    <div className={`items-center justify-between ${hidden ? 'hidden' : ''} w-full mds:flex mds:w-auto mds:order-1`} id="navbar-search">

                        <div className="relative mt-3 mds:hidden">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>

                            </div>


                            <form onSubmit={handleSubmit}>
                                <input type="text" id="search-navbar" name="search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                            </form>

                        </div>

                        <ul className="flex flex-col p-4 mds:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 mds:space-x-8 rtl:space-x-reverse mds:flex-row mds:mt-0 mds:border-0 mds:bg-white dark:bg-gray-800 mds:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to="" className={({ isActive }) => isActive ? active : inactive} aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products" className={({ isActive }) => isActive ? active : inactive}>Products</NavLink>
                            </li>

                        </ul>
                    </div>
                </div >
            </nav >

        </div >
    )
}

