import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Explore from '../components/Explore';
import HowItWorks from '../components/HowItWorks';
import FeedbackReport from '../components/FeedbackReport';
import About from '../components/About';
import Waitlist from '../components/Waitlist';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Explore />
      <HowItWorks />
      <FeedbackReport />
      <About />
      <Waitlist />
      <Footer />
    </>
  );
}
