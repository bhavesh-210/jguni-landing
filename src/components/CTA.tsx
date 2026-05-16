'use client'
import { useEffect, useRef, useState } from 'react'

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '' })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="cta" ref={ref} className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0f2e 0%, #111d52 50%, #0a0f2e 100%)' }}>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(ellipse, #f5c842 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="animate-on-scroll inline-flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-gold-400" />
              <span className="text-gold-400 font-mono text-sm tracking-widest uppercase">Admissions 2025–26</span>
            </div>
            <h2 className="animate-on-scroll font-display font-black text-4xl md:text-5xl text-cream mb-6 leading-tight" style={{ transitionDelay: '0.1s' }}>
              Your Journey to{' '}
              <span className="gold-text">Excellence</span>{' '}
              Starts Here
            </h2>
            <p className="animate-on-scroll text-cream/60 text-lg mb-8 leading-relaxed" style={{ transitionDelay: '0.2s' }}>
              Applications are open for 2025–26. Secure your seat in a UGC-approved, industry-aligned programme at JG University, Ahmedabad.
            </p>

            <div className="animate-on-scroll space-y-4" style={{ transitionDelay: '0.3s' }}>
              {[
                { icon: '📋', text: 'UG: Based on 10th & 12th marks — no entrance exam for most courses' },
                { icon: '🏆', text: 'PG: Bachelor\'s degree with 45–50% marks; JGET or national exams' },
                { icon: '🔬', text: 'PhD: Master\'s degree with 55%+; JGET or NET/SLET exemption' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <span className="text-cream/60 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="animate-on-scroll mt-8 p-5 glass-card rounded-2xl inline-flex items-center gap-4" style={{ transitionDelay: '0.4s' }}>
              <div className="w-10 h-10 rounded-full bg-gold-400/20 flex items-center justify-center text-lg">📞</div>
              <div>
                <div className="text-cream/40 text-xs font-mono">Call Admissions</div>
                <div className="text-gold-400 font-semibold">+91 7567 756 759</div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="glass-card rounded-3xl p-8 border border-gold-400/15">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="font-display font-bold text-2xl text-cream mb-2">Application Received!</h3>
                  <p className="text-cream/50">Our admissions team will contact you within 48 hours. Welcome to the JG family!</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-gold-400 text-sm hover:text-gold-500 transition-colors font-mono"
                  >
                    Submit another →
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display font-bold text-2xl text-cream mb-1">Apply Now</h3>
                  <p className="text-cream/40 text-sm mb-6 font-mono">Seats filling fast for 2025–26</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-cream/50 text-xs font-mono uppercase tracking-widest mb-1.5 block">Full Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream placeholder-cream/20 text-sm focus:outline-none focus:border-gold-400/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-cream/50 text-xs font-mono uppercase tracking-widest mb-1.5 block">Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream placeholder-cream/20 text-sm focus:outline-none focus:border-gold-400/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-cream/50 text-xs font-mono uppercase tracking-widest mb-1.5 block">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream placeholder-cream/20 text-sm focus:outline-none focus:border-gold-400/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-cream/50 text-xs font-mono uppercase tracking-widest mb-1.5 block">Interested Program</label>
                      <select
                        required
                        value={form.course}
                        onChange={(e) => setForm({ ...form, course: e.target.value })}
                        className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-cream text-sm focus:outline-none focus:border-gold-400/50 transition-colors"
                      >
                        <option value="" disabled>Select a program</option>
                        <optgroup label="Undergraduate">
                          <option>B.Tech</option>
                          <option>BCA</option>
                          <option>BBA</option>
                          <option>B.Com</option>
                          <option>LLB</option>
                        </optgroup>
                        <optgroup label="Postgraduate">
                          <option>MBA</option>
                          <option>MCA</option>
                          <option>M.Com</option>
                          <option>MSc IT</option>
                        </optgroup>
                        <optgroup label="Doctoral">
                          <option>PhD</option>
                        </optgroup>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gold-400 text-navy-900 font-bold py-3.5 rounded-xl hover:bg-gold-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,200,66,0.4)] hover:scale-[1.02] text-sm mt-2"
                    >
                      Submit Application →
                    </button>
                  </form>

                  <p className="text-cream/20 text-xs text-center mt-4 font-mono">
                    Applications reviewed within 48 hours
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
