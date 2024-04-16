import AccordianCard from "./AccordianCard"

function Accordian() {
    const faq = [
        {
            id: 1,
            question: "What is React?",
            answer: "React is a front-end JavaScript library developed by Facebook in 2011. It is used in a lot of companies as a frontend framework to build web apps"
        },
        {
            id: 2,
            question: "What is a component?",
            answer: "A component is a reusable piece of code that can be used to build elements sharing functionality and styling."
        },
        {
            id: 3,
            question: "What is JSX?",
            answer: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML."
        }
    ]

    return (
        <div className="dark:bg-slate-800 py-8  flex flex-col items-center justify-evenly">
            <div className="dark:bg-slate-700 w-[75vw] rounded-lg">
                <h1 className='text-4xl dark:text-white text-center py-4 mb-8 font-semibold'>FAQ</h1>
                {faq.map((f) => (
                    <AccordianCard key={f.id} question={f.question} answer={f.answer} />
                ))}
            </div>
        </div>
    )
}

export default Accordian