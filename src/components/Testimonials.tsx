'use client'
import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'MBA Batch 2023 · Placement at TCS',
    quote: 'JG University\'s emphasis on personality development and real-world exposure completely transformed my perspective. I went from being a hesitant student to confidently landing my dream job at TCS.',
    avatar: 'PS',
    rating: 5,
  },
  {
    name: 'Rahul Mehta',
    role: 'BCA Batch 2022 · Software Developer',
    quote: 'What sets JG apart is how they push you to think critically and collaborate with peers from different backgrounds. I discovered skills I never knew I had. The faculty mentorship was invaluable.',
    avatar: 'RM',
    rating: 5,
  },
  {
    name: 'Sneha Patel',
    role: 'BBA Batch 2023 · Recruitment Consultant',
    quote: 'The BBA programme gave me a strong foundation in business that I draw on every single day. The focus on experiential learning through internships and real-world projects made all the difference.',
    avatar: 'SP',
    rating: 5,
  },
  {
    name: 'Arjun Nair',
    role: 'MSc IT Batch 2023 · DevOps Engineer',
    quote: 'My time at JG enriched my life in ways I never expected. The diverse student community and the research opportunities helped me build a network and a skill set that opened doors globally.',
    avatar: 'AN',
    rating: 5,
  },
  {
    name: 'Kavya Reddy',
    role: 'M.Com Batch 2022 · Financial Analyst',
    quote: 'The teaching methodologies at JG are unlike anything I\'d encountered before. They challenged us to think beyond textbooks and into the real financial world. I feel completely industry-ready.',
    avatar: 'KR',
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

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

  // Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const t = testimonials[active]

  return (
    <section id="testimonials" ref={ref} className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0f2e 0%, #0d1540 100%)' }}>

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10"
        style={{ background: 'radial-gradient(circle, #f5c842 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="animate-on-scroll inline-flex items-center gap-2 mb-6">
          <div className="h-px w-12 bg-gold-400" />
          <span className="text-gold-400 font-mono text-sm tracking-widest uppercase">Student Stories</span>
          <div className="h-px w-12 bg-gold-400" />
        </div>

        <h2 className="animate-on-scroll font-display font-black text-4xl md:text-5xl text-cream mb-16" style={{ transitionDelay: '0.1s' }}>
          Voices of JG{' '}
          <span className="gold-text">Alumni</span>
        </h2>

        {/* Featured testimonial */}
        <div className="animate-on-scroll glass-card rounded-3xl p-10 md:p-14 relative" style={{ transitionDelay: '0.2s' }}>
          {/* Quote mark */}
          <div className="font-display text-8xl text-gold-400/15 absolute top-6 left-8 leading-none select-none">"</div>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i} className="text-gold-400 text-xl">★</span>
            ))}
          </div>

          {/* Quote */}
          <p className="text-cream text-xl md:text-2xl font-light leading-relaxed mb-10 relative z-10 transition-all duration-500">
            "{t.quote}"
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-900 font-bold text-sm">
              {t.avatar}
            </div>
            <div className="text-left">
              <div className="text-cream font-semibold">{t.name}</div>
              <div className="text-cream/40 text-sm font-mono">{t.role}</div>
            </div>
          </div>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? 'bg-gold-400 w-8' : 'bg-cream/20 w-2 hover:bg-cream/40'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail grid below */}
        <div className="grid grid-cols-5 gap-3 mt-10">
          {testimonials.map((test, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`p-3 rounded-xl text-center transition-all duration-300 ${
                i === active
                  ? 'glass-card border-gold-400/40'
                  : 'border border-transparent hover:border-cream/10'
              }`}
            >
              <div className={`w-8 h-8 rounded-full mx-auto mb-1.5 flex items-center justify-center text-xs font-bold ${
                i === active ? 'bg-gold-400 text-navy-900' : 'bg-cream/10 text-cream/60'
              }`}>
                {test.avatar}
              </div>
              <div className="text-cream/40 text-xs hidden md:block truncate">{test.name.split(' ')[0]}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
