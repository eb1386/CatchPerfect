import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-zinc-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid lg:grid-cols-5 gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="lg:col-span-2 flex justify-center">
            <div className="w-64 h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden border border-white/5">
              <img
                src="https://images.pexels.com/photos/6551069/pexels-photo-6551069.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Young athlete training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="relative mb-8">
              <blockquote className="relative z-10 pl-6 border-l-2 border-brand-400">
                <p className="text-xl lg:text-2xl text-zinc-200 leading-relaxed font-light italic">
                  I noticed that beginner rowers on my team weren't getting the individual feedback they needed.
                  Coaches are stretched thin, and by the time mistakes get corrected, they're already habits.
                  I wanted to build something that could give every rower a personal coach in their pocket.
                </p>
              </blockquote>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Kyle Biemold</h3>
              <p className="text-brand-400 font-medium mb-4">Founder & Creator</p>
              <p className="text-zinc-500 leading-relaxed">
                As a coxswain, Kyle saw how beginner rowers struggled without consistent coaching.
                He created Catch Perfect to bring elite-level technique feedback to every athlete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
