import { ArrowDown } from 'lucide-react';
import Waves from './Waves';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center bg-zinc-950">
      <Waves
        lineColor="rgba(23,38,58,0.35)"
        backgroundColor="transparent"
        waveSpeedX={0.01}
        waveSpeedY={0.008}
        waveAmpX={50}
        waveAmpY={25}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={14}
        yGap={40}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="max-w-3xl">
          <h1 className="opacity-0 animate-fade-in-up text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-8">
            Master Your
            <span className="block font-serif italic text-brand-400 mt-2">
              Rowing Form
            </span>
          </h1>

          <p className="opacity-0 animate-fade-in-up delay-200 text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-xl mb-12">
            Multi-sensor feedback that measures every stroke. Detailed post-session reports delivered straight to your phone.
          </p>

          <div className="opacity-0 animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4">
            <a
              href="#waitlist"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-400 text-brand-dark font-bold text-base hover:bg-brand-300 hover:-translate-y-0.5 transition-all duration-300"
            >
              Join the Waitlist
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#feedback"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-dark border border-brand-dark text-white font-semibold text-base hover:bg-[#1e3250] hover:border-[#1e3250] transition-all duration-300"
            >
              See the Feedback
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ArrowDown className="w-5 h-5 text-zinc-600 animate-bounce" />
      </div>
    </section>
  );
}
