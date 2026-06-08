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

const B = '1px solid rgba(0,0,0,0.15)'

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: '#f0ebe2', padding: '56px 0' }}>
      <div className="container-max">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '40px',
          alignItems: 'stretch',
        }}>

          {/* ── Left: flex column, stretches to match right height ── */}
          <div style={{ display: 'flex', flexDirection: 'column', border: B }}>

            {/* 2×2 cards — flex:1 fills remaining space */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', flex: 1 }}>
              {cards.map((c, i) => (
                <div key={c.label} style={{
                  backgroundColor: c.bg,
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  borderRight:  i % 2 === 0 ? B : 'none',
                  borderBottom: i < 2       ? B : 'none',
                }}>
                  {c.icon}
                  <p style={{ fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '8px', color: '#1a1a1a' }}>{c.label}</p>
                  <p style={{ fontSize: '12px', color: '#6b6b6b' }}>{c.sub}</p>
                </div>
              ))}
            </div>

            {/* Stats — fixed at bottom */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: B }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{
                  backgroundColor: '#fff',
                  textAlign: 'center',
                  padding: '16px 8px',
                  borderRight: i < 2 ? B : 'none',
                }}>
                  <div style={{ fontWeight: 700, fontSize: '22px', color: '#c94c2e', fontFamily: '"Playfair Display", serif', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6b6b6b', marginTop: '6px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: text, vertically centered ── */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p className="eyebrow" style={{ marginBottom: '12px' }}>About Me</p>
            <h2 style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.2, color: '#1a1a1a', marginBottom: '20px' }}>
              I'm a Full Stack Developer<br />building for the web.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14.5px', lineHeight: 1.7, color: '#6b6b6b' }}>
              <p>
                I'm a Computer Engineering student from Pune who got completely
                hooked on web development and hasn't looked back since. Most of
                my time goes into building things with React, Node, and Express —
                making them feel fast, clean, and intuitive to use.
              </p>
              <p>
                Right now I work as a{' '}
                <span style={{ color: '#c94c2e', fontWeight: 600 }}>Full Stack Developer at CodeServeTech Pvt Ltd</span>,
                where I ship real features for real users. Before that I trained at
                Corizo. What I love most is the loop — build an idea, put it in
                front of people, then make it better.
              </p>
              <p>
                Outside of code I'm reading about system design, exploring new
                tools, or pushing a side project across the finish line.
              </p>
            </div>
            <div style={{ marginTop: '28px' }}>
              <a href="#contact" className="btn-terra">Get in Touch</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
