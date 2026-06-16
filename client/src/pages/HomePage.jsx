import { usePageMeta } from '../hooks/usePageMeta';

import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Categories from '../components/Categories.jsx';
import Benefits from '../components/Benefits.jsx';
import AboutUs from '../components/AboutUs.jsx';
import FeaturedProducts from '../components/FeaturedProducts.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Footer from '../components/Footer.jsx';

export default function HomePage() {
    usePageMeta('El Musiquero | Instrumentos musicales');

    return (
        <>
        <Navbar />
        <Hero />
        <Categories />
        <Benefits />
        <AboutUs />
        <FeaturedProducts />
        <Testimonials />
        <Footer />
        </>
    )
}