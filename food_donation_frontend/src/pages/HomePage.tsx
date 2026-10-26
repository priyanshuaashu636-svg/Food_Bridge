import Navbar from '../components/HomePage_components/Navbar';
import Hero from '../components/HomePage_components/Hero';
import TrustBar from '../components/HomePage_components/TrustBar';
import HowItWorks from '../components/HomePage_components/HowItWorks';
import AboutUs from '../components/HomePage_components/AboutUs';
import Statistics from '../components/HomePage_components/Statistics';
import Testimonials from '../components/HomePage_components/Testimonials';
import CTASection from '../components/HomePage_components/CTASection';
import Footer from '../components/HomePage_components/Footer';

import "../styles/global.css";
import "../styles/landing.css";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <AboutUs />
      <Statistics />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}

export default LandingPage;