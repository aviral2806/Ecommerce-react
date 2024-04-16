import imgreact from '../../assets/download.jpg'
import { NavLink } from 'react-router-dom'

function Hero() {


    return (
        <div className='flex flex-col mds:flex-row w-full justify-center flex-wrap gap-8 dark:bg-slate-800 dark:text-white items-center mds:items-start'>
            <div className="p-12 max-w-[50vw] text-center mds:text-left">
                <h1 className='text-4xl font-bold my-4 mds:mt-16'>Best website to buy books</h1>
                <p className='mb-5 font-medium'>Explore our website to find the best collection of books and courses.
                    Scroll through the products page to find books and courses to help you succeed in life</p>
                <NavLink to='/products'>
                    <button className="cursor-pointer rounded-xl px-6 py-2 bg-blue-500 text-white hover:bg-blue-600 font-medium">
                        Explore
                    </button>
                </NavLink>

            </div>
            <div className="align-center">
                <img src={imgreact} alt="" className='w-[350px] h-[350px] m-8 rounded' />
            </div>
        </div>
    )
}

export default Hero