import { useState } from "react"
import './AccordianCard.css'
function AccordianCard({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="text-black dark:bg-slate-800 dark:text-white flex justify-center flex-col items-center">
            <div className="flex justify-between items-center cursor-pointer border-b dark:bg-slate-700 dark:border-slate-600 w-[75vw]">
                <h1 className="p-4 dark:text-white">{question}</h1>
                <button onClick={() => { setIsOpen(!isOpen) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-4 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            <div className={`p-4 dark:text-white dark:bg-slate-700 w-[75vw] trans ${isOpen && 'active'}`}>
                <p>{answer}</p>
            </div>
        </div>
    )
}

export default AccordianCard