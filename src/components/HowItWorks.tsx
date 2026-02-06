import { Cpu, Radio, BarChart3, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    icon: Radio,
    number: '01',
    title: 'Attach the Sensors',
    description: 'Place waterproof sensors on your oar handle, wrist, seat track, and oarlock. They pair instantly with the Catch Perfect app via Bluetooth.',
    color: 'from-navy-600 to-navy-800',
  },
  {
    icon: Zap,
    number: '02',
    title: 'Row Naturally',
    description: 'Row as you normally would on water or the erg. The sensors track blade placement, handle speed, body angles, and timing throughout your stroke.',
    color: 'from-navy-500 to-navy-700',
  },
  {
    icon: Cpu,
    number: '03',
    title: 'Get Instant Feedback',
    description: 'Receive immediate feedback through lights or vibration when your timing or technique needs adjustment, helping you correct in real-time.',
    color: 'from-gold-500 to-gold-600',
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Analyze Your Session',
    description: 'After your workout, review detailed data from every stroke in your phone app with specific tips for improvement.',
    color: 'from-gold-400 to-gold-500',
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 gradient-section overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 text-sm font-semibold mb-6">
            How It Works
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-6">
            Four Steps to
            <span className="gradient-text-gold"> Better Rowing</span>
          </h2>
          <p className="text-lg text-navy-600/70 leading-relaxed">
            From clipping on the sensors to receiving world-class coaching insights, the entire process is seamless and intuitive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="relative p-8 rounded-2xl bg-white border border-navy-100 hover:border-transparent hover:shadow-2xl hover:shadow-navy-200/50 transition-all duration-500 h-full">
                <div className="text-6xl font-black text-navy-50 group-hover:text-navy-100/80 transition-colors absolute top-4 right-6">
                  {step.number}
                </div>

                <div className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="relative z-10 text-xl font-bold text-navy-900 mb-3">
                  {step.title}
                </h3>
                <p className="relative z-10 text-navy-600/70 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-navy-200" />
              )}
            </div>
          ))}
        </div>

        <div
          className={`mt-20 relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.pexels.com/photos/29204731/pexels-photo-29204731.jpeg?auto=compress&cs=tinysrgb&w=1200"
            className="w-full h-64 sm:h-80 lg:h-[420px] object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/14378403/14378403-hd_1920_1080_30fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
