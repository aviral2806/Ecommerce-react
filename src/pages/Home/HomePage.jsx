import { useTitle } from "../../hooks/useTitle"
import Hero from "./Hero"
import FeaturedProducts from "./FeaturedProducts"
import Accordian from "./Accordian"

export function HomePage() {
    useTitle('Access to best books')
    return (
        <div>
            <Hero />
            <FeaturedProducts />
            <Accordian />
        </div>
    )
}