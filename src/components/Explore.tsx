import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Users, Clock, AlertTriangle, TrendingDown } from 'lucide-react';

const problems = [
  {
    icon: Users,
    title: 'Coaches Are Stretched Thin',
    description: 'Most programs have one coach for dozens of athletes. Individual attention is nearly impossible during practice.',
  },
  {
    icon: Clock,
    title: 'Feedback Comes Too Late',
    description: 'By the time a coach spots a technique error and gets to correct it, the rower has already repeated it hundreds of times.',
  },
  {
    icon: AlertTriangle,
    title: 'Bad Habits Form Fast',
    description: 'Without real-time correction, small mistakes become deeply ingrained habits that are exponentially harder to fix later.',
  },
  {
    icon: TrendingDown,
    title: 'Progress Stalls Without Data',
    description: 'Rowers have no way to objectively track their technique over time. Improvement becomes guesswork instead of science.',
  },
];

export default function Explore() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="explore" className="relative py-16 lg:py-20 bg-zinc-950 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`max-w-3xl mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm font-semibold text-emerald-400 tracking-widest uppercase mb-4">The Problem</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Beginner rowers don't get the feedback they need.
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Rowing is one of the most technical sports in the world, yet most beginners learn through trial and error.
            Coaches can only be in one place at a time, and video review after practice only goes so far.
            The result? Athletes repeat the same mistakes for weeks before anyone catches them.
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 lg:p-8 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                <problem.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{problem.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
