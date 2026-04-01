import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Waves from './Waves';

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
    <section id="waitlist" className="relative py-24 lg:py-32 bg-zinc-950 overflow-hidden">
      <Waves
        lineColor="rgba(254,194,5,0.06)"
        backgroundColor="transparent"
        waveSpeedX={0.008}
        waveSpeedY={0.006}
        waveAmpX={30}
        waveAmpY={15}
        friction={0.92}
        tension={0.008}
        maxCursorMove={80}
        xGap={16}
        yGap={44}
      />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Be the First to
            <span className="font-serif italic text-brand-400"> Row Smarter</span>
          </h2>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto">
            Join the waitlist to get early access when we launch.
          </p>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {status === 'success' ? (
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-400/10 border border-brand-400/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-brand-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">You're on the list</h3>
              <p className="text-zinc-500 max-w-md mx-auto">
                We'll reach out when Catch Perfect is ready. Thanks for believing in better rowing.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 lg:p-10">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-brand-400/50 focus:border-brand-400/50 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-brand-400/50 focus:border-brand-400/50 transition-all"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="role" className="block text-sm font-medium text-zinc-400 mb-2">
                  I am a...
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-400/50 focus:border-brand-400/50 transition-all appearance-none"
                >
                  <option value="rower" className="bg-zinc-900">Rower</option>
                  <option value="coach" className="bg-zinc-900">Coach</option>
                  <option value="parent" className="bg-zinc-900">Parent of a Rower</option>
                  <option value="other" className="bg-zinc-900">Other</option>
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
                className="w-full group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-400 text-brand-dark font-bold text-base hover:bg-brand-300 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
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
