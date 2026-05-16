'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 17, suffix: '+', label: 'Colleges Under Trust', desc: 'ASIA Charitable Trust' },
  { value: 60, suffix: '+', label: 'Years of Excellence', desc: 'Since 1965' },
  { value: 25, suffix: ' LPA', label: 'Highest Package', desc: 'Placement 2024' },
  { value: 95, suffix: '%', label: 'Placement Rate', desc: 'Industry Connections' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          let start = 0
          const duration = 2000
          const step = (timestamp: number) => {
            if (!start) start = timestamp
            const progress = Math.min((timestamp - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(step)
            else setCount(target)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="relative py-16 bg-navy-900">
      <div className="absolute inset-0 border-t border-b border-gold-400/10" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-gold-400/10">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-6 group">
              <div className="font-display font-black text-4xl md:text-5xl gold-text mb-1 group-hover:scale-105 transition-transform duration-300">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-cream font-semibold text-sm mb-0.5">{stat.label}</div>
              <div className="text-cream/40 text-xs font-mono">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
