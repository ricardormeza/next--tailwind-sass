import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';
import Testimonial from '../Testimonial';
import Static from '../Static';
import Contact from '../Contact';

export default function Layout({children}) {
    return (
        <div className="main">
            <Header/>
            {children}
            <Hero/>
            <Static/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </div>
    )
}