import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="relative py-24 lg:py-32 gradient-section overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-navy-100 text-navy-700 text-sm font-semibold mb-6">
            The Story
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-6">
            Built by a Rower,
            <span className="gradient-text-blue"> for Rowers</span>
          </h2>
        </div>

        <div className={`grid lg:grid-cols-5 gap-12 items-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 lg:w-72 lg:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-navy-200/50">
                <img
                  src="https://images.pexels.com/photos/6551069/pexels-photo-6551069.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Young athlete training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="relative mb-8">
              <blockquote className="relative z-10 pl-6 border-l-4 border-gold-400">
                <p className="text-xl lg:text-2xl text-navy-800 leading-relaxed font-medium italic">
                  I noticed that beginner rowers on my team weren't getting the individual feedback they needed.
                  Coaches are stretched thin, and by the time mistakes get corrected, they're already habits.
                  I wanted to build something that could give every rower a personal coach in their pocket.
                </p>
              </blockquote>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-1">Kyle Biemold</h3>
              <p className="text-gold-600 font-semibold mb-4">Founder & Creator, St. George's School</p>
              <p className="text-navy-600/70 leading-relaxed">
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
