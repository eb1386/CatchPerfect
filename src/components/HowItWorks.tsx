import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Smartphone, Activity, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Smartphone,
    title: 'Mount the Sensor',
    description:
      'Attach the lightweight Catch Perfect sensor to your oar. It takes seconds to clip on and won\'t affect your stroke.',
  },
  {
    number: '02',
    icon: Activity,
    title: 'Row Like Normal',
    description:
      'There\'s nothing to change about your routine. Just row. The sensor captures hundreds of data points per stroke in real time.',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Get Your Breakdown',
    description:
      'When your session ends, a detailed report is delivered straight to your phone with specific, actionable feedback.',
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how" className="relative py-16 lg:py-20 bg-zinc-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`max-w-3xl mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm font-semibold text-emerald-400 tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Simple to use. Powerful results.
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Catch Perfect is designed to disappear into your routine. No complex setup, no coaching certifications required.
            Clip the sensor on, row, and let the data do the talking.
          </p>
        </div>

        <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 lg:p-8 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex items-center gap-4 lg:gap-6 shrink-0">
                  <span className="text-3xl lg:text-4xl font-extrabold text-white/[0.06] font-mono">{step.number}</span>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm lg:text-base text-zinc-500 leading-relaxed max-w-2xl">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
