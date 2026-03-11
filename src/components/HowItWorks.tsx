import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Smartphone, Activity, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Smartphone,
    title: 'Mount the Sensor',
    accent: 'emerald',
    description:
      'Attach the lightweight Catch Perfect sensor to your oar. It takes seconds to clip on and won\'t affect your stroke. The sensor uses a combination of accelerometers and gyroscopes to capture every movement of the oar throughout the rowing stroke.',
    details: ['Under 30g weight', 'Waterproof IP68', 'Clips in seconds'],
  },
  {
    number: '02',
    icon: Activity,
    title: 'Row Like Normal',
    accent: 'sky',
    description:
      'There\'s nothing to change about your routine. Just row. The sensor captures hundreds of data points per stroke, measuring blade entry angle, drive force curve, recovery timing, handle speed, and body sequencing in real time.',
    details: ['200+ data points per stroke', 'Real-time capture', 'Zero interference'],
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Get Your Breakdown',
    accent: 'amber',
    description:
      'When your session ends, a detailed report is delivered straight to your phone. Every phase of the stroke is scored individually with specific, actionable feedback on what to fix and how to fix it.',
    details: ['Phase-by-phase scoring', 'Actionable insights', 'Progress tracking'],
  },
];

const accentStyles: Record<string, { bg: string; border: string; text: string; glow: string; dot: string; badge: string }> = {
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
    glow: 'shadow-emerald-500/20',
    dot: 'bg-emerald-400',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  sky: {
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
    text: 'text-sky-400',
    glow: 'shadow-sky-500/20',
    dot: 'bg-sky-400',
    badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  },
  amber: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    text: 'text-amber-400',
    glow: 'shadow-amber-500/20',
    dot: 'bg-amber-400',
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
};

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how" className="relative py-16 lg:py-24 bg-zinc-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`max-w-3xl mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm font-semibold text-emerald-400 tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Simple to use.
            <span className="font-serif italic text-emerald-400"> Powerful</span> results.
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Catch Perfect is designed to disappear into your routine. No complex setup, no coaching certifications required.
            Clip the sensor on, row, and let the data do the talking.
          </p>
        </div>

        <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="hidden lg:block absolute left-[52px] top-12 bottom-12 w-px bg-gradient-to-b from-emerald-500/30 via-sky-500/30 to-amber-500/30" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => {
              const colors = accentStyles[step.accent];
              return (
                <div key={step.number} className="relative lg:pl-28 lg:pb-16 last:lg:pb-0">
                  <div className="hidden lg:flex absolute left-[40px] top-6 w-6 h-6 items-center justify-center z-10">
                    <div className={`w-3 h-3 rounded-full ${colors.dot} ring-4 ring-zinc-900`} />
                  </div>

                  <div className={`group relative rounded-2xl border ${colors.border} bg-white/[0.02] overflow-hidden hover:bg-white/[0.04] transition-all duration-500 hover:shadow-lg ${colors.glow}`}>
                    <div className={`absolute top-0 left-0 w-1 h-full ${colors.dot} opacity-50`} />

                    <div className="p-6 lg:p-8">
                      <div className="flex items-start gap-5 mb-5">
                        <div className={`relative w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                          <step.icon className={`w-7 h-7 ${colors.text}`} />
                          <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-zinc-900 border ${colors.border} flex items-center justify-center text-xs font-bold ${colors.text}`}>
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <span className={`text-xs font-mono font-semibold ${colors.text} tracking-wider uppercase`}>Step {step.number}</span>
                          <h3 className="text-xl lg:text-2xl font-bold text-white mt-1">{step.title}</h3>
                        </div>
                      </div>

                      <p className="text-sm lg:text-base text-zinc-400 leading-relaxed mb-5">{step.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {step.details.map((detail) => (
                          <span key={detail} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${colors.badge}`}>
                            <span className={`w-1 h-1 rounded-full ${colors.dot}`} />
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`mt-16 rounded-2xl border border-white/5 bg-white/[0.02] p-6 lg:p-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-lg font-bold text-white mb-1">Built for athletes and coaches alike</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Athletes get personal feedback after every row. Coaches get a dashboard view of their entire team's technique data,
            so they can spot patterns, track progress over time, and prioritize who needs the most attention during practice.
          </p>
        </div>
      </div>
    </section>
  );
}
