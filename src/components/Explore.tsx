import FlowingMenu from './FlowingMenu';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const menuItems = [
  {
    link: '#feedback',
    text: 'Session Reports',
    image: 'https://images.pexels.com/photos/3766217/pexels-photo-3766217.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    link: '#feedback',
    text: 'Stroke Analysis',
    image: 'https://images.pexels.com/photos/2403547/pexels-photo-2403547.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    link: '#feedback',
    text: 'Real-Time Feedback',
    image: 'https://images.pexels.com/photos/1480520/pexels-photo-1480520.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    link: '#waitlist',
    text: 'Join Waitlist',
    image: 'https://images.pexels.com/photos/2885578/pexels-photo-2885578.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Explore() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="explore" className="relative py-24 lg:py-32 bg-zinc-950 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Explore
            <span className="font-serif italic text-emerald-400"> Catch Perfect</span>
          </h2>
          <p className="text-lg text-zinc-500 leading-relaxed">
            Every feature designed to make you a better rower.
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ height: '480px', position: 'relative' }}
        >
          <FlowingMenu
            items={menuItems}
            speed={15}
            textColor="#ffffff"
            bgColor="#09090b"
            marqueeBgColor="#ffffff"
            marqueeTextColor="#09090b"
            borderColor="rgba(255,255,255,0.08)"
          />
        </div>
      </div>
    </section>
  );
}
