export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#" className="flex items-baseline gap-0.5 mb-4">
              <span className="text-xl font-bold text-white tracking-tight">
                Catch
              </span>
              <span className="text-xl font-serif italic text-brand-400 tracking-tight">
                Perfect
              </span>
            </a>
            <p className="text-zinc-400 leading-relaxed text-sm max-w-xs">
              Sensor-based rowing technique feedback. Train smarter. Row better. Improve every stroke.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: 'Feedback', href: '#feedback' },
                { label: 'Why', href: '#explore' },
                { label: 'About', href: '#about' },
                { label: 'Join Waitlist', href: '#waitlist' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Get In Touch</h4>
            <p className="text-sm text-zinc-400 mb-4">
              Questions about Catch Perfect? Interested in partnerships?
            </p>
            <a
              href="#waitlist"
              className="inline-flex px-5 py-2.5 rounded-full bg-brand-400 text-brand-dark text-sm font-semibold hover:bg-brand-300 transition-all"
            >
              Join the Waitlist
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Catch Perfect. Created by Kyle Biemold.
          </p>
        </div>
      </div>
    </footer>
  );
}
