import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Waitlist() {
  const { ref, isVisible } = useScrollAnimation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('rower');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    setTimeout(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setRole('rower');
    }, 500);
  };

  return (
    <section id="waitlist" className="relative py-24 lg:py-32 gradient-hero overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-navy-500/20 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-400/10 text-gold-400 text-sm font-semibold mb-6">
            Early Access
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Be the First to
            <span className="gradient-text-gold"> Row Smarter</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
            Join the waitlist to get early access to Catch Perfect when we launch.
            Be part of the future of rowing technique training.
          </p>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {status === 'success' ? (
            <div className="glass rounded-3xl p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-navy-950" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">You're on the list!</h3>
              <p className="text-white/60 max-w-md mx-auto">
                We'll reach out when Catch Perfect is ready. Thanks for believing in better rowing.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 lg:p-10">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400/50 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400/50 transition-all"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="role" className="block text-sm font-medium text-white/70 mb-2">
                  I am a...
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400/50 transition-all appearance-none"
                >
                  <option value="rower" className="bg-navy-900">Rower</option>
                  <option value="coach" className="bg-navy-900">Coach</option>
                  <option value="parent" className="bg-navy-900">Parent of a Rower</option>
                  <option value="other" className="bg-navy-900">Other</option>
                </select>
              </div>

              {status === 'error' && (
                <div className="mb-6 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 font-bold text-base hover:shadow-xl hover:shadow-gold-400/25 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join the Waitlist
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
