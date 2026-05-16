'use client';
import { useEffect, useRef, useState } from 'react';

const programs = [
    {
        level: 'UG',
        name: 'B.Tech',
        duration: '4 Years',
        fee: '₹75,000/yr',
        tags: ['Computer Science', 'AI & ML', 'Data Science'],
        desc: 'Industry-integrated engineering with hands-on project experience from day one.',
        color: '#6366f1',
    },
    {
        level: 'UG',
        name: 'BCA',
        duration: '3 Years',
        fee: '₹65,000/yr',
        tags: ['Programming', 'Web Dev', 'Databases'],
        desc: 'Foundation in computing with specialisations in modern tech stacks.',
        color: '#0ea5e9',
    },
    {
        level: 'UG',
        name: 'BBA',
        duration: '3 Years',
        fee: '₹60,000/yr',
        tags: ['Management', 'Finance', 'Marketing'],
        desc: 'Business acumen built through real-world case studies and industry interactions.',
        color: '#10b981',
    },
    {
        level: 'UG',
        name: 'B.Com',
        duration: '3 Years',
        fee: '₹45,000/yr',
        tags: ['Accounting', 'Commerce', 'Taxation'],
        desc: 'Commerce education designed for the modern financial landscape.',
        color: '#f59e0b',
    },
    {
        level: 'PG',
        name: 'MBA',
        duration: '2 Years',
        fee: '₹81,000/yr',
        tags: ['Leadership', 'Strategy', 'Entrepreneurship'],
        desc: 'Intensive management programme with mentorship from industry leaders.',
        color: '#ef4444',
    },
    {
        level: 'PG',
        name: 'MCA',
        duration: '2 Years',
        fee: '₹70,000/yr',
        tags: ['Advanced CS', 'Cloud', 'Security'],
        desc: 'Master-level computing with specialisation tracks and live project experience.',
        color: '#8b5cf6',
    },
    {
        level: 'PG',
        name: 'M.Com',
        duration: '2 Years',
        fee: '₹50,000/yr',
        tags: ['Research', 'Advanced Commerce', 'Analysis'],
        desc: 'Advanced commerce with research methodology and finance specialisations.',
        color: '#ec4899',
    },
    {
        level: 'PG',
        name: 'MSc IT',
        duration: '2 Years',
        fee: '₹65,000/yr',
        tags: ['IT Systems', 'Networks', 'DevOps'],
        desc: 'Deep dive into IT infrastructure, systems design, and emerging technologies.',
        color: '#14b8a6',
    },
];

export default function Programs() {
    const ref = useRef<HTMLDivElement>(null);
    const [activeFilter, setActiveFilter] = useState<'All' | 'UG' | 'PG'>(
        'All',
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting)
                        entry.target.classList.add('in-view');
                });
            },
            { threshold: 0.05 },
        );
        const els = ref.current?.querySelectorAll('.animate-on-scroll');
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const filtered = programs.filter(
        (p) => activeFilter === 'All' || p.level === activeFilter,
    );

    return (
        <section
            id="programs"
            ref={ref}
            className="py-28 relative"
            style={{
                background:
                    'linear-gradient(180deg, #0a0f2e 0%, #0d1540 50%, #0a0f2e 100%)',
            }}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="animate-on-scroll inline-flex items-center gap-2 mb-6">
                        <div className="h-px w-12 bg-gold-400" />
                        <span className="text-gold-400 font-mono text-sm tracking-widest uppercase">
                            Academic Programs
                        </span>
                        <div className="h-px w-12 bg-gold-400" />
                    </div>
                    <h2
                        className="animate-on-scroll font-display font-black text-4xl md:text-5xl text-cream mb-4"
                        style={{ transitionDelay: '0.1s' }}>
                        Build Your Future,{' '}
                        <span className="gold-text">Your Way</span>
                    </h2>
                    <p
                        className="animate-on-scroll text-cream/50 text-lg max-w-2xl mx-auto"
                        style={{ transitionDelay: '0.2s' }}>
                        From undergraduate foundations to postgraduate
                        specialisations — find the programme that launches your
                        ambition.
                    </p>

                    <div
                        className="animate-on-scroll flex justify-center gap-3 mt-8"
                        style={{ transitionDelay: '0.3s' }}>
                        {(['All', 'UG', 'PG'] as const).map((f) => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                    activeFilter === f
                                        ? 'bg-gold-400 text-navy-900'
                                        : 'border border-cream/20 text-cream/60 hover:border-gold-400/40 hover:text-gold-400'
                                }`}>
                                {f === 'All'
                                    ? 'All Programs'
                                    : f === 'UG'
                                      ? 'Undergraduate'
                                      : 'Postgraduate'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Program cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {filtered.map((prog, i) => (
                        <div
                            key={prog.name}
                            className="animate-on-scroll glass-card rounded-2xl p-6 hover:border-gold-400/25 transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                            style={{ transitionDelay: `${i * 0.05}s` }}>
                            {/* Top */}
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <span className="font-mono text-xs tracking-widest text-cream/40 uppercase">
                                        {prog.level} · {prog.duration}
                                    </span>
                                    <h3 className="font-display font-black text-2xl text-cream mt-1 group-hover:text-gold-400 transition-colors">
                                        {prog.name}
                                    </h3>
                                </div>
                                <div
                                    className="w-3 h-3 rounded-full mt-2 ring-2 ring-offset-2 ring-offset-navy-800 transition-transform group-hover:scale-125"
                                    style={{ background: prog.color }}
                                />
                            </div>

                            <p className="text-cream/50 text-sm mb-4 leading-relaxed">
                                {prog.desc}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-5">
                                {prog.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-2 py-0.5 rounded-full"
                                        style={{
                                            background: `${prog.color}15`,
                                            color: prog.color,
                                            border: `1px solid ${prog.color}30`,
                                        }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Fee + CTA */}
                            <div className="flex items-center justify-between pt-4 border-t border-cream/5">
                                <span className="text-gold-400 font-semibold text-sm">
                                    {prog.fee}
                                </span>
                                <a
                                    href="#cta"
                                    className="text-cream/40 text-xs hover:text-gold-400 transition-colors font-mono">
                                    Apply →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
