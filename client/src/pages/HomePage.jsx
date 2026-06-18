import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { usePageMeta } from '../hooks/usePageMeta';
import { scrollToSection } from '../utils/scrollToSection';

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
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return;

        const sectionId = location.hash.replace('#', '');
        requestAnimationFrame(() => scrollToSection(sectionId));
    }, [location]);

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