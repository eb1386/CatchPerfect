import {
  Activity,
  Brain,
  Smartphone,
  TrendingUp,
  Shield,
  Clock,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: Activity,
    title: 'Instant Feedback',
    description: 'Lightweight sensors provide immediate feedback through lights or vibration. Know when your catch timing is off before the next stroke.',
  },
  {
    icon: Brain,
    title: 'Multi-Sensor Precision',
    description: 'Sensors on your oar handle, wrist, seat track, and oarlock capture blade placement, handle speed, and body angles with precision.',
  },
  {
    icon: Smartphone,
    title: 'Post-Session Analysis',
    description: 'After each row or erg session, your phone app provides detailed data breakdowns with specific, actionable tips for improvement.',
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Watch your technique improve over time. See exactly which areas you have mastered and where to focus next.',
  },
  {
    icon: Shield,
    title: 'Waterproof & Durable',
    description: 'Designed for real rowing conditions. The sensors are waterproof and built to withstand the demands of on-water training.',
  },
  {
    icon: Clock,
    title: 'Catch-Focused Training',
    description: 'Master the most critical part of the stroke, the catch, while also improving technique across all other phases.',
  },
];

export default function Features() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 text-sm font-semibold mb-6">
            Features
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-6">
            Everything You Need to
            <span className="gradient-text-gold"> Row Better</span>
          </h2>
          <p className="text-lg text-navy-600/70 leading-relaxed">
            Catch Perfect combines waterproof sensors with intelligent analysis to help you master the catch
            and improve technique across every phase of the stroke.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group relative p-8 rounded-2xl border border-navy-100 hover:border-gold-200 bg-white hover:bg-gradient-to-br hover:from-white hover:to-gold-50/50 transition-all duration-500 hover:shadow-xl hover:shadow-gold-100/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-navy-900 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-500 flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gold-400/20">
                <feature.icon className="w-6 h-6 text-gold-400 group-hover:text-navy-950 transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
              <p className="text-navy-600/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-20 grid lg:grid-cols-2 gap-8 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative rounded-3xl overflow-hidden h-72 lg:h-auto">
            <img
              src="https://images.pexels.com/photos/17845767/pexels-photo-17845767.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Rowing team on water"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-dark rounded-xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6 text-navy-950" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Real-Time Feedback</div>
                  <div className="text-xs text-white/50">Lights & vibration alert you to technique issues instantly</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-72 lg:h-auto">
            <img
              src="https://images.pexels.com/photos/18879411/pexels-photo-18879411.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Aerial view of rowing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-dark rounded-xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-500 to-navy-700 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Post-Session Report</div>
                  <div className="text-xs text-white/50">Detailed AI analysis of every stroke in your session</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
