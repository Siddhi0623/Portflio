const stats = [
  { value: '2+',   label: 'Years Coding' },
  { value: '5+',   label: 'Projects Shipped' },
  { value: 'MERN', label: 'Primary Stack' },
]

const cards = [
  { bg: '#c5e8e0', label: 'Frontend',   sub: 'React, Tailwind, JS',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="1"/><path d="M8 21h8M12 17v4"/></svg> },
  { bg: '#f5d88c', label: 'Backend',    sub: 'Node, Express, APIs',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg> },
  { bg: '#f5c0b0', label: 'Database',   sub: 'MongoDB, SQL',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/></svg> },
  { bg: '#c0cff5', label: 'Deployment', sub: 'Vercel, Git, Linux',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg> },
]

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20" style={{ backgroundColor: '#f0ebe2' }}>
      <div className="container-max grid md:grid-cols-2 gap-8 md:gap-10 items-start">

        {/* Left — flush unified grid */}
        <div className="w-full">
          {/* 2×2 coloured cards */}
          <div className="grid grid-cols-2" style={{ border: '1px solid rgba(0,0,0,0.15)' }}>
            {cards.map((c, i) => (
              <div
                key={c.label}
                className="p-5 flex flex-col gap-2"
                style={{
                  backgroundColor: c.bg,
                  borderRight:  i % 2 === 0 ? '1px solid rgba(0,0,0,0.15)' : 'none',
                  borderBottom: i < 2       ? '1px solid rgba(0,0,0,0.15)' : 'none',
                }}
              >
                {c.icon}
                <p className="font-bold text-ink text-[13px] uppercase tracking-wide mt-2">{c.label}</p>
                <p className="text-muted text-xs">{c.sub}</p>
              </div>
            ))}
          </div>

          {/* Stats row — sits flush under the cards */}
          <div
            className="grid grid-cols-3"
            style={{ border: '1px solid rgba(0,0,0,0.15)', borderTop: 'none' }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="bg-white text-center py-4 px-2"
                style={{ borderRight: i < 2 ? '1px solid rgba(0,0,0,0.15)' : 'none' }}
              >
                <div className="font-bold text-[22px] text-terracotta font-display leading-none">{s.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted mt-1.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — text */}
        <div className="pt-1">
          <p className="eyebrow mb-3">About Me</p>
          <h2 className="font-sans font-bold text-ink leading-tight mb-5"
              style={{ fontSize: 'clamp(24px, 3.5vw, 38px)' }}>
            I'm a Full Stack Developer<br />building for the web.
          </h2>
          <div className="space-y-3 text-muted text-[14.5px] leading-relaxed">
            <p>
              I'm a Computer Engineering student from Pune who got completely
              hooked on web development and hasn't looked back since. Most of
              my time goes into building things with React, Node, and Express —
              making them feel fast, clean, and intuitive to use.
            </p>
            <p>
              Right now I work as a{' '}
              <span className="text-terracotta font-semibold">Full Stack Developer at CodeServeTech Pvt Ltd</span>,
              where I ship real features for real users. Before that I trained at
              Corizo. What I love most is the loop — build an idea, put it in
              front of people, then make it better.
            </p>
            <p>
              Outside of code I'm reading about system design, exploring new
              tools, or pushing a side project across the finish line.
            </p>
          </div>
          <div className="mt-7">
            <a href="#contact" className="btn-terra">Get in Touch</a>
          </div>
        </div>

      </div>
    </section>
  )
}
