import FlowingMenu from './FlowingMenu';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const menuItems = [
  {
    link: '#feedback',
    text: 'No Individual Feedback',
    image: 'https://images.pexels.com/photos/3766217/pexels-photo-3766217.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    link: '#feedback',
    text: 'Coaches Are Stretched Thin',
    image: 'https://images.pexels.com/photos/2403547/pexels-photo-2403547.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    link: '#feedback',
    text: 'Bad Habits Form Fast',
    image: 'https://images.pexels.com/photos/1480520/pexels-photo-1480520.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    link: '#feedback',
    text: 'Technique Goes Unchecked',
    image: 'https://images.pexels.com/photos/2885578/pexels-photo-2885578.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Explore() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="explore" className="relative py-24 lg:py-32 bg-zinc-950 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Beginner rowers don't get the feedback they need.
          </h2>
          <p className="text-lg text-zinc-500 leading-relaxed">
            Most rowing programs have one coach for dozens of athletes. By the time technique errors get noticed and corrected, they're already ingrained habits. Rowers deserve real-time, personalized feedback on every single stroke.
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
