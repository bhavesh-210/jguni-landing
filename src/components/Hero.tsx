'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const starsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!starsRef.current) return
    const container = starsRef.current
    for (let i = 0; i < 80; i++) {
      const star = document.createElement('div')
      const size = Math.random() * 2.5 + 0.5
      star.className = 'star'
      star.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        --duration: ${Math.random() * 4 + 2}s;
        --delay: ${Math.random() * 4}s;
      `
      container.appendChild(star)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Stars */}
      <div ref={starsRef} className="absolute inset-0 z-0" />

      {/* Gradient bg */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(ellipse, #f5c84240 0%, transparent 70%)' }} />

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full border border-gold-400/8 animate-[spin_30s_linear_infinite]" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full border border-gold-400/6 animate-[spin_20s_linear_infinite_reverse]" />
      <div className="absolute top-1/2 right-10 w-3 h-3 rounded-full bg-gold-400/60 animate-float" />
      <div className="absolute top-1/4 left-16 w-2 h-2 rounded-full bg-gold-400/40 animate-float" style={{ animationDelay: '2s' }} />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(245,200,66,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,200,66,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-gold-400/30 rounded-full px-4 py-2 mb-8 bg-gold-400/5 backdrop-blur-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-400 text-sm font-mono tracking-widest uppercase">UGC Approved · Est. 1965</span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-black text-6xl md:text-7xl lg:text-8xl leading-[0.92] mb-6">
            <span className="block text-cream animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Knowledge
            </span>
            <span className="block gold-text animate-slide-up" style={{ animationDelay: '0.25s' }}>
              Beyond Books.
            </span>
            <span className="block text-cream/60 text-5xl md:text-6xl lg:text-7xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Futures Beyond Limits.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-cream/60 text-xl md:text-2xl font-light mt-8 mb-10 max-w-2xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.5s' }}>
            A tech-driven university in Ahmedabad where industry-relevant curriculum meets real-world experience. Shape your career with us.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.65s' }}>
            <a href="#cta" className="btn-primary text-center text-base">
              Apply for 2025–26 →
            </a>
            <a href="#programs" className="btn-outline text-center text-base">
              Explore Programs
            </a>
          </div>

          {/* Quick tags */}
          <div className="flex flex-wrap gap-3 mt-10 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            {['MBA', 'B.Tech', 'BCA', 'MCA', 'BBA', 'LLB', 'B.Com', 'PhD'].map((tag) => (
              <span key={tag} className="text-cream/40 text-sm border border-cream/10 px-3 py-1 rounded-full hover:border-gold-400/40 hover:text-gold-400/70 transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-400/50 to-transparent animate-[slideDown_1.5s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  )
}
