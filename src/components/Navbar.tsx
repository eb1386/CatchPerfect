import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Why', href: '#explore' },
    { label: 'How It Works', href: '#how' },
    { label: 'Feedback', href: '#feedback' },
    { label: 'About', href: '#about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-xl shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-baseline gap-0.5 group">
            <span className="text-xl font-bold text-white tracking-tight">
              Catch
            </span>
            <span className="text-xl font-serif italic text-brand-400 tracking-tight">
              Perfect
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="px-5 py-2.5 rounded-full bg-white text-zinc-950 text-sm font-semibold hover:bg-zinc-200 transition-all duration-300"
            >
              Join Waitlist
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-6 space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-full bg-white text-zinc-950 text-sm font-semibold"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
