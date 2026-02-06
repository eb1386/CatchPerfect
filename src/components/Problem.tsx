import { AlertTriangle, TrendingDown, Users, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const problems = [
  {
    icon: Users,
    title: 'Limited Coaching Access',
    description: 'Most beginner rowers only get a few minutes of personalized attention per session.',
  },
  {
    icon: TrendingDown,
    title: 'Bad Habits Form Early',
    description: 'Without immediate correction, poor technique becomes muscle memory that is hard to fix.',
  },
  {
    icon: AlertTriangle,
    title: 'Injury Risk',
    description: 'Incorrect form leads to back, knee, and shoulder injuries that can sideline rowers for months.',
  },
];

export default function Problem() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy-50 text-navy-600 text-sm font-semibold mb-6">
              The Problem
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-6">
              Beginner Rowers Are
              <span className="gradient-text-blue"> Left Behind</span>
            </h2>
            <p className="text-lg text-navy-600/70 leading-relaxed">
              With limited coaching resources and large team sizes, most novice rowers never get
              the individual feedback they need to build proper technique from day one.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((item, i) => (
            <div
              key={i}
              className={`group relative p-8 rounded-2xl border border-navy-100 hover:border-navy-200 bg-white hover:shadow-xl hover:shadow-navy-100/50 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-navy-50 group-hover:bg-navy-900 flex items-center justify-center mb-6 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-navy-600 group-hover:text-gold-400 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
              <p className="text-navy-600/70 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`relative rounded-3xl gradient-hero p-10 lg:p-16 overflow-hidden transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/10 mb-6">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span className="text-sm font-semibold text-gold-400">The Solution</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
                Your Personal Technique Coach
              </h3>
              <p className="text-lg text-white/60 leading-relaxed max-w-xl">
                Catch Perfect uses sensors on your oar handle, wrist, seat track, and oarlock to measure blade placement,
                handle speed, body angles, and timing. Get instant feedback through lights or vibration, plus detailed
                post-session data analysis through your phone app.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src="https://images.pexels.com/photos/18400492/pexels-photo-18400492.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team rowing on water"
                className="w-72 h-48 lg:w-80 lg:h-56 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
