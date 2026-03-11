import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Explore from './components/Explore';
import HowItWorks from './components/HowItWorks';
import FeedbackReport from './components/FeedbackReport';
import About from './components/About';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <Hero />
      <Marquee />
      <Explore />
      <HowItWorks />
      <FeedbackReport />
      <About />
      <Waitlist />
      <Footer />
    </div>
  );
}

export default App;
