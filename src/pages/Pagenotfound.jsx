import { Link } from "react-router-dom"
function Pagenotfound() {
    return (
        <div className="h-[81vh] flex justify-start pt-20 flex-col gap-16 items-center w-full dark:text-white dark:bg-slate-800">
            <h1 className="text-3xl font-semibold">Page does not exist</h1>
            <Link>
                <button className="cursor-pointer rounded-xl px-6 py-2 bg-blue-500 text-white hover:bg-blue-600 font-medium">Back to home</button>
            </Link>
        </div>
    )
}

export default Pagenotfound