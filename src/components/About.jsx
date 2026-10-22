const stats = [
  { value: '2+', label: 'Years Coding' },
  { value: '5+', label: 'Projects Shipped' },
  { value: 'MERN', label: 'Primary Stack' },
]

const capabilities = [
  {
    label: 'Frontend',
    sub: 'React, Tailwind, JavaScript',
    accent: '#c5e8e0',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="1"/><path d="M8 21h8M12 17v4"/></svg>,
  },
  {
    label: 'Backend',
    sub: 'Node, Express, APIs',
    accent: '#f5d88c',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>,
  },
  {
    label: 'Database',
    sub: 'MongoDB, SQL',
    accent: '#f5c0b0',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/></svg>,
  },
  {
    label: 'Deployment',
    sub: 'Vercel, Git, Linux',
    accent: '#c0cff5',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20" style={{ backgroundColor: '#f0ebe2' }}>
      <div className="container-max">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">

          <div>
            <p className="eyebrow mb-3">My toolkit</p>
            <h2 className="mb-5 max-w-md font-display text-3xl font-bold italic leading-tight text-ink md:text-4xl">
              From the first screen to the final deploy.
            </h2>

            <div className="grid sm:grid-cols-2 sm:gap-x-8">
              {capabilities.map((item, index) => (
                <div key={item.label} className="flex items-center gap-4 border-t border-black/10 py-5">
                  <span className="h-10 w-1 shrink-0" style={{ backgroundColor: item.accent }} aria-hidden="true" />
                  <span className="shrink-0" aria-hidden="true">{item.icon}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-[12px] uppercase tracking-[0.12em] text-ink">{item.label}</p>
                      <span className="text-[10px] font-semibold tracking-wider text-muted/70">0{index + 1}</span>
                    </div>
                    <p className="mt-1 text-[13px] leading-snug text-muted">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 border-t border-black/15 pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="min-w-0 px-2 first:pl-0 last:pr-0">
                  <div className="font-display text-[clamp(20px,2.5vw,28px)] font-bold leading-none text-terracotta">{stat.value}</div>
                  <div className="mt-2 text-[9px] uppercase leading-snug tracking-[0.12em] text-muted sm:text-[10px]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="eyebrow mb-3">About me</p>
            <h2 className="mb-5 font-sans text-[clamp(26px,3vw,38px)] font-bold leading-[1.15] text-ink">
              I'm a Full Stack Developer building for the web.
            </h2>
            <div className="flex flex-col gap-4 text-[15px] leading-[1.75] text-muted">
              <p>
                I'm a Computer Engineering student from Pune who got completely
                hooked on web development and hasn't looked back since. Most of
                my time goes into building things with React, Node, and Express —
                making them feel fast, clean, and intuitive to use.
              </p>
              <p>
                I completed a Full Stack Developer internship at{' '}
                <span className="font-semibold text-terracotta">CodeServeTech Pvt Ltd, Pune</span>{' '}
                from May 2026 to June 2026, contributing to real product features.
                Before that I trained at Corizo. What I love most is the loop —
                build an idea, put it in front of people, then make it better.
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
      </div>
    </section>
  )
}
