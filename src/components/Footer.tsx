export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 border-t border-gold-400/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-900 font-display font-black text-lg">
                JG
              </div>
              <div>
                <div className="font-display font-bold text-cream text-lg leading-tight">JG University</div>
                <div className="text-gold-400/60 text-xs font-mono">Ahmedabad, Gujarat</div>
              </div>
            </div>
            <p className="text-cream/40 text-sm leading-relaxed mb-5">
              A New Age Tech-Driven University. UGC Approved. Sponsored by ASIA Charitable Trust since 1965.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'Facebook', 'Twitter'].map((s) => (
                <a key={s} href="https://jguni.in" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-cream/10 flex items-center justify-center text-cream/40 hover:border-gold-400/40 hover:text-gold-400 transition-all text-xs font-mono">
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-cream font-semibold text-sm mb-5 tracking-widest uppercase font-mono">Programs</h4>
            <ul className="space-y-2.5">
              {['B.Tech', 'MBA', 'BCA', 'MCA', 'BBA', 'M.Com', 'B.Com', 'LLB', 'PhD'].map((p) => (
                <li key={p}>
                  <a href="#programs" className="text-cream/40 text-sm hover:text-gold-400 transition-colors">{p}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-cream font-semibold text-sm mb-5 tracking-widest uppercase font-mono">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Features', href: '#features' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Apply Now', href: '#cta' },
                { label: 'Research', href: '#about' },
                { label: 'Campus Life', href: '#features' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-cream/40 text-sm hover:text-gold-400 transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream font-semibold text-sm mb-5 tracking-widest uppercase font-mono">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-gold-400 mt-0.5">📍</span>
                <span className="text-cream/40 text-sm">Drive-In Road, ASIA Campus, Ahmedabad, Gujarat</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold-400">📞</span>
                <a href="tel:+917567756759" className="text-cream/40 text-sm hover:text-gold-400 transition-colors">
                  +91 7567 756 759
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold-400">🌐</span>
                <a href="https://jguni.in" target="_blank" rel="noopener noreferrer"
                  className="text-cream/40 text-sm hover:text-gold-400 transition-colors">
                  jguni.in
                </a>
              </li>
            </ul>

            {/* Accreditations */}
            <div className="mt-8 flex flex-wrap gap-2">
              {['UGC Approved', 'NAAC', 'AICTE'].map((badge) => (
                <span key={badge} className="border border-gold-400/20 text-gold-400/60 text-xs px-3 py-1 rounded-full font-mono">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/25 text-sm font-mono">
            © {year} JG University, Ahmedabad. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((l) => (
              <a key={l} href="#" className="text-cream/25 text-xs hover:text-gold-400/60 transition-colors font-mono">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
