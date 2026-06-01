const stats = [
  { value: '2+',    label: 'Years Coding' },
  { value: '5+',    label: 'Projects Shipped' },
  { value: 'MERN',  label: 'Primary Stack' },
]

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ backgroundColor: '#f0ebe2' }}>
      <div className="container-max grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Left — visual panel */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#c5e8e0] p-6 flex flex-col gap-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="1"/><path d="M8 21h8M12 17v4"/></svg>
              <p className="font-bold text-ink text-sm uppercase tracking-wide mt-2">Frontend</p>
              <p className="text-muted text-xs">React, Tailwind, JS</p>
            </div>
            <div className="bg-[#f5d88c] p-6 flex flex-col gap-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>
              <p className="font-bold text-ink text-sm uppercase tracking-wide mt-2">Backend</p>
              <p className="text-muted text-xs">Node, Express, APIs</p>
            </div>
            <div className="bg-[#f5c0b0] p-6 flex flex-col gap-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/></svg>
              <p className="font-bold text-ink text-sm uppercase tracking-wide mt-2">Database</p>
              <p className="text-muted text-xs">MongoDB, SQL</p>
            </div>
            <div className="bg-[#c0cff5] p-6 flex flex-col gap-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
              <p className="font-bold text-ink text-sm uppercase tracking-wide mt-2">Deployment</p>
              <p className="text-muted text-xs">Vercel, Git, Linux</p>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {stats.map(s => (
              <div key={s.label} className="bg-white text-center py-4 px-2 border-b-2 border-terracotta">
                <div className="font-bold text-2xl text-terracotta font-display">{s.value}</div>
                <div className="text-[11px] uppercase tracking-wide text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — text */}
        <div>
          <p className="eyebrow mb-4">About Me</p>
          <h2 className="font-sans font-bold text-ink leading-tight mb-6"
              style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
            I'm a Full Stack Developer<br />
            building for the web.
          </h2>
          <div className="space-y-4 text-muted text-[15px] leading-relaxed">
            <p>
              I'm a Computer Engineering student from Pune who got completely
              hooked on web development and hasn't looked back since. Most of
              my time goes into building things with React, Node, and Express —
              making them feel fast, clean, and intuitive to use.
            </p>
            <p>
              Right now I work as a <span className="text-terracotta font-semibold">Full Stack Developer at CodeServeTech Pvt Ltd</span>,
              where I ship real features for real users. Before that, I trained as a
              web developer at Corizo. What I love most is the loop — build an idea,
              put it in front of people, then make it better.
            </p>
            <p>
              Outside of code I'm reading about system design, exploring new
              tools, or pushing a side project across the finish line.
            </p>
          </div>
          <div className="mt-8">
            <a href="#contact" className="btn-terra">Get in Touch</a>
          </div>
        </div>

      </div>
    </section>
  )
}
