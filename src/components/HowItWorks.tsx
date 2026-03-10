import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Smartphone, Activity, BarChart3, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Smartphone,
    title: 'Mount the Sensor',
    description:
      'Attach the lightweight Catch Perfect sensor to your oar. It takes seconds to clip on and won\'t affect your stroke. The sensor uses a combination of accelerometers and gyroscopes to capture every movement of the oar throughout the rowing stroke.',
  },
  {
    number: '02',
    icon: Activity,
    title: 'Row Like Normal',
    description:
      'There\'s nothing to change about your routine. Just row. The sensor captures hundreds of data points per stroke, measuring blade entry angle, drive force curve, recovery timing, handle speed, and body sequencing in real time.',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Get Your Breakdown',
    description:
      'When your session ends, a detailed report is delivered straight to your phone. Every phase of the stroke -- catch, drive, and recovery -- is scored individually with specific, actionable feedback on what to fix and how to fix it.',
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
          {steps.map((step, index) => (
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
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex items-center self-center">
                    <ArrowRight className="w-5 h-5 text-zinc-700" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.03] p-6 lg:p-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1">Built for athletes and coaches alike</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Athletes get personal feedback after every row. Coaches get a dashboard view of their entire team's technique data,
                so they can spot patterns, track progress over time, and prioritize who needs the most attention during practice.
              </p>
            </div>
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-500 text-white font-semibold text-sm hover:bg-emerald-600 transition-colors duration-300 shrink-0"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
