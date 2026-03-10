import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeedbackReport from './components/FeedbackReport';
import Explore from './components/Explore';
import About from './components/About';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <Hero />
      <FeedbackReport />
      <Explore />
      <About />
      <Waitlist />
      <Footer />
    </div>
  );
}

export default App;
