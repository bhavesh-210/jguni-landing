'use client'
import { useEffect, useRef } from 'react'

const pillars = [
  {
    icon: '🧠',
    title: 'Whole Brain Learning',
    desc: 'Balancing left-brain technical skills with right-brain creativity to produce complete professionals.',
  },
  {
    icon: '🏭',
    title: 'Industry-Aligned',
    desc: 'Curriculum co-designed with industry leaders to match real-world demands and evolving job markets.',
  },
  {
    icon: '🚀',
    title: 'Future-Proof Skills',
    desc: 'Pedagogy that empowers learners with skills for careers that don\'t exist yet.',
  },
  {
    icon: '🤝',
    title: 'Expert Mentorship',
    desc: 'Guided by dynamic scholars with vast academic knowledge and real-world experience.',
  },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.1 }
    )
    const els = ref.current?.querySelectorAll('.animate-on-scroll')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-28 bg-navy-900 relative overflow-hidden">
      {/* Bg accent */}
      <div className="absolute -right-40 top-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #f5c842 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <div className="animate-on-scroll inline-flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-gold-400" />
              <span className="text-gold-400 font-mono text-sm tracking-widest uppercase">About JG University</span>
            </div>
            <h2 className="animate-on-scroll font-display font-black text-4xl md:text-5xl text-cream mb-6 leading-tight" style={{ transitionDelay: '0.1s' }}>
              Empowering India's Next{' '}
              <span className="gold-text">Generation</span> of Leaders
            </h2>
            <p className="animate-on-scroll text-cream/60 text-lg leading-relaxed mb-6" style={{ transitionDelay: '0.2s' }}>
              JG University is a New Age Tech-Driven University in Ahmedabad, Gujarat — UGC approved and sponsored by the ASIA Charitable Trust, a trust with 60+ years in education managing 17 colleges and 3 schools.
            </p>
            <p className="animate-on-scroll text-cream/60 text-lg leading-relaxed mb-8" style={{ transitionDelay: '0.3s' }}>
              We believe in knowledge beyond books. Our focus on experiential, immersive learning prepares students not just for employment — but for impact.
            </p>
            <div className="animate-on-scroll flex items-center gap-4" style={{ transitionDelay: '0.4s' }}>
              <a href="#programs" className="btn-primary">See Our Programs</a>
              <a href="#features" className="text-gold-400 font-medium hover:text-gold-500 transition-colors flex items-center gap-1">
                Why JG? <span>→</span>
              </a>
            </div>
          </div>

          {/* Right pillar cards */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="animate-on-scroll glass-card rounded-2xl p-6 hover:border-gold-400/30 transition-all duration-300 hover:-translate-y-1 group"
                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-display font-semibold text-cream text-base mb-2 group-hover:text-gold-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
