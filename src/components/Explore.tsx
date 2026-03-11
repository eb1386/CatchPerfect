import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Users, Clock, AlertTriangle, TrendingDown, ChevronRight } from 'lucide-react';

const problems = [
  {
    icon: Users,
    title: 'Coaches Are Stretched Thin',
    description: 'Most programs have one coach for dozens of athletes. Individual attention is nearly impossible during practice.',
    stat: '1:25',
    statLabel: 'avg coach-to-athlete ratio',
  },
  {
    icon: Clock,
    title: 'Feedback Comes Too Late',
    description: 'By the time a coach spots a technique error and gets to correct it, the rower has already repeated it hundreds of times.',
    stat: '48h',
    statLabel: 'avg delay for feedback',
  },
  {
    icon: AlertTriangle,
    title: 'Bad Habits Form Fast',
    description: 'Without real-time correction, small mistakes become deeply ingrained habits that are exponentially harder to fix later.',
    stat: '3x',
    statLabel: 'harder to fix ingrained habits',
  },
  {
    icon: TrendingDown,
    title: 'Progress Stalls Without Data',
    description: 'Rowers have no way to objectively track their technique over time. Improvement becomes guesswork instead of science.',
    stat: '0',
    statLabel: 'objective data points for most rowers',
  },
];

export default function Explore() {
  const { ref, isVisible } = useScrollAnimation();
  const [expandedIndex, setExpandedIndex] = useState(0);

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

        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="explore-accordion">
            {problems.map((problem, index) => {
              const isOpen = expandedIndex === index;
              return (
                <button
                  key={problem.title}
                  onClick={() => setExpandedIndex(isOpen ? -1 : index)}
                  className="explore-accordion-item"
                >
                  <div className="explore-accordion-header">
                    <div className="explore-accordion-left">
                      <div className={`explore-icon-box ${isOpen ? 'explore-icon-active' : ''}`}>
                        <problem.icon className="w-5 h-5" style={{ color: isOpen ? '#10b981' : '#71717a' }} />
                      </div>
                      <span className={`text-base lg:text-lg font-semibold transition-colors duration-200 ${isOpen ? 'text-white' : 'text-zinc-400'}`}>
                        {problem.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      {!isOpen && (
                        <span className="hidden sm:block text-2xl font-bold text-zinc-700 font-mono">{problem.stat}</span>
                      )}
                      <motion.div
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="w-5 h-5 text-zinc-600" />
                      </motion.div>
                    </div>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="explore-accordion-body">
                          <p className="text-sm lg:text-base text-zinc-400 leading-relaxed flex-1">{problem.description}</p>
                          <div className="explore-stat-block">
                            <span className="text-3xl lg:text-4xl font-bold text-emerald-400 font-mono">{problem.stat}</span>
                            <span className="text-xs text-zinc-500 mt-1 leading-tight">{problem.statLabel}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
