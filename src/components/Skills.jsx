const skills = [
  {
    bg: '#c5e8e0',
    title: 'Frontend Development',
    items: ['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'jQuery', 'React Router'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="1"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    )
  },
  {
    bg: '#f5d88c',
    title: 'Backend Development',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Mongoose ODM', 'Axios'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/>
        <line x1="8" y1="16" x2="8.01" y2="16"/>
        <line x1="8" y1="20" x2="8.01" y2="20"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
        <line x1="12" y1="22" x2="12.01" y2="22"/>
        <line x1="16" y1="16" x2="16.01" y2="16"/>
        <line x1="16" y1="20" x2="16.01" y2="20"/>
      </svg>
    )
  },
  {
    bg: '#f5c0b0',
    title: 'Database & Storage',
    items: ['MongoDB', 'SQL / MySQL', 'Mongoose ORM', 'Database Design', 'Query Optimisation'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12"/>
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
      </svg>
    )
  },
  {
    bg: '#c0cff5',
    title: 'Tools & DevOps',
    items: ['Git & GitHub', 'Postman', 'VS Code', 'Linux Terminal', 'Vercel Deployments', 'npm / Node CLI'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    )
  },
  {
    bg: '#c8e0b8',
    title: 'Soft Skills',
    items: ['Problem Solving', 'Team Collaboration', 'Clear Communication', 'Self-Learning', 'Adaptability'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    bg: '#d8c0f0',
    title: 'Currently At',
    items: ['CodeServeTech Pvt Ltd', 'Full Stack Developer', 'May 2026 – Present', 'Pune, India', 'React · Node · MongoDB'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    )
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-pad" style={{ backgroundColor: '#f0ebe2' }}>
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">What I know</p>
          <h2 className="section-title">My Skills</h2>
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="w-2 h-2 rounded-full bg-terracotta opacity-60"></span>
            ))}
          </div>
        </div>

        {/* Card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-black/10">
          {skills.map((s, i) => (
            <div
              key={s.title}
              className="skill-card border border-black/10"
              style={{ backgroundColor: s.bg }}
            >
              <div className="flex items-start gap-4">
                <div className="skill-icon-box">{s.icon}</div>
                <div className="min-w-0">
                  <h3 className="font-bold text-ink text-[16px] leading-tight">{s.title}</h3>
                </div>
              </div>
              <ul className="space-y-1.5 mt-1">
                {s.items.map(it => (
                  <li key={it} className="flex items-center gap-2 text-[13px] text-ink/75">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta/70 flex-shrink-0"></span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
