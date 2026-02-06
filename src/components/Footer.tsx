import { Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 flex items-center justify-center">
                <Activity className="w-5 h-5 text-navy-950 absolute" strokeWidth={3} />
                <div className="w-1.5 h-1.5 rounded-full bg-navy-950 absolute top-1.5 right-1.5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Catch Perfect
              </span>
            </a>
            <p className="text-white/40 leading-relaxed text-sm max-w-xs">
              AI-powered rowing technique feedback. Train smarter. Row better. Improve every stroke.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Features', href: '#features' },
                { label: 'About', href: '#about' },
                { label: 'Join Waitlist', href: '#waitlist' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Get In Touch</h4>
            <p className="text-sm text-white/40 mb-4">
              Have questions about Catch Perfect? Interested in partnerships or coaching collaborations?
            </p>
            <a
              href="#waitlist"
              className="inline-flex px-5 py-2.5 rounded-full border border-white/10 text-sm text-white/60 hover:text-gold-400 hover:border-gold-400/30 transition-all"
            >
              Join the Waitlist
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Catch Perfect. Created by Kyle Biemold.
          </p>
        </div>
      </div>
    </footer>
  );
}
