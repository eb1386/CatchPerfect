import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-navy-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-400/3 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-sm font-medium text-gold-300">AI-Powered Rowing Coach</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.2] tracking-tight mb-8">
              Perfect Your
              <span className="block gradient-text-gold mt-2 pb-2">Rowing Form</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-xl mb-10">
              A multi-sensor system that measures blade placement, handle speed, body angles, and timing. Get instant feedback through lights or vibration, plus detailed post-session analysis via your phone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#waitlist"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 font-bold text-base hover:shadow-xl hover:shadow-gold-400/25 hover:-translate-y-1 transition-all duration-300"
              >
                Join the Waitlist
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full glass text-white font-semibold text-base hover:bg-white/20 transition-all duration-300"
              >
                See How It Works
              </a>
            </div>
          </div>

          <div className="relative animate-slide-up delay-200 hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy-950/50 animate-float">
              <img
                src="https://images.pexels.com/photos/18287336/pexels-photo-18287336.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Rowers on calm water"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-white/30" />
      </div>
    </section>
  );
}
