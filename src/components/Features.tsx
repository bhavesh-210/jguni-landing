'use client'
import { useEffect, useRef } from 'react'

const features = [
  {
    number: '01',
    title: 'Experiential Learning',
    desc: 'Hands-on projects, live case studies, and industry immersions replace passive learning. Students leave with portfolios, not just degrees.',
    icon: '⚡',
  },
  {
    number: '02',
    title: 'Industry-Driven Curriculum',
    desc: 'Curriculum co-developed with companies like TCS, Amazon, and Infosys. What you learn today is what employers need tomorrow.',
    icon: '🏗️',
  },
  {
    number: '03',
    title: 'Paid Internships',
    desc: 'Master\'s students receive paid internships (minimum ₹15,000/month) with direct industry exposure. Learn and earn simultaneously.',
    icon: '💼',
  },
  {
    number: '04',
    title: 'Top Placements',
    desc: 'Our graduates join TCS, Amazon, Infosys, and more. Average package of ₹6.5 LPA with highest reaching ₹25 LPA.',
    icon: '🎯',
  },
  {
    number: '05',
    title: 'Research & Innovation',
    desc: 'JG University\'s School of Research fuels curiosity. From cutting-edge technology to social innovation, students lead original discovery.',
    icon: '🔬',
  },
  {
    number: '06',
    title: 'Vibrant Campus Life',
    desc: 'Music, gaming, media clubs. Youth Connect Fest with concerts and DJs. A thriving campus that makes university the best years of your life.',
    icon: '🎉',
  },
]

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view')
        })
      },
      { threshold: 0.1 }
    )
    const els = ref.current?.querySelectorAll('.animate-on-scroll')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" ref={ref} className="py-28 bg-navy-900 relative overflow-hidden">
      {/* Accent */}
      <div className="absolute -left-40 bottom-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #f5c842 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="animate-on-scroll inline-flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-gold-400" />
              <span className="text-gold-400 font-mono text-sm tracking-widest uppercase">Why JG University</span>
            </div>
            <h2 className="animate-on-scroll font-display font-black text-4xl md:text-5xl text-cream leading-tight" style={{ transitionDelay: '0.1s' }}>
              What Makes Us{' '}
              <span className="gold-text">Different</span>
            </h2>
          </div>
          <p className="animate-on-scroll text-cream/50 max-w-sm text-base md:text-right" style={{ transitionDelay: '0.2s' }}>
            Six pillars that define the JG University experience — and why students choose us.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="animate-on-scroll glass-card rounded-2xl p-7 hover:border-gold-400/30 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Number watermark */}
              <div className="absolute -bottom-4 -right-2 font-display font-black text-8xl text-cream/3 select-none group-hover:text-gold-400/5 transition-colors">
                {f.number}
              </div>

              <div className="text-3xl mb-4">{f.icon}</div>
              <div className="text-gold-400/60 font-mono text-xs mb-2">{f.number}</div>
              <h3 className="font-display font-bold text-xl text-cream mb-3 group-hover:text-gold-400 transition-colors">
                {f.title}
              </h3>
              <p className="text-cream/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Recruiters band */}
        <div className="animate-on-scroll mt-20 text-center" style={{ transitionDelay: '0.2s' }}>
          <p className="text-cream/30 font-mono text-xs tracking-widest uppercase mb-6">Top Recruiters</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['TCS', 'Amazon', 'Infosys', 'Electromech', 'Samyak Infotech', 'Softvan', 'Gesia'].map((r) => (
              <span key={r} className="text-cream/25 font-display font-bold text-lg hover:text-gold-400/60 transition-colors cursor-default">
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
