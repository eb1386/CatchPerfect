import { useState, useEffect } from 'react';
import { Activity, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-xl shadow-lg shadow-navy-950/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-400/20 group-hover:shadow-gold-400/40 group-hover:scale-105 transition-all duration-300">
              <Activity className="w-5 h-5 text-navy-950 absolute" strokeWidth={3} />
              <div className="w-1.5 h-1.5 rounded-full bg-navy-950 absolute top-2 right-2" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold text-white tracking-tight">
                Catch Perfect
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-gold-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 text-sm font-semibold hover:shadow-lg hover:shadow-gold-400/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Join Waitlist
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white/80 hover:text-gold-400 transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-navy-950/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-6 py-6 space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-white/70 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 text-sm font-semibold"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
