const timeline = [
  {
    period: 'May 2026 — Present',
    role: 'Full Stack Developer',
    org: 'CodeServeTech Pvt Ltd · Pune',
    type: 'work',
    details: ['Building production apps end-to-end with the MERN stack', 'Designing REST APIs, auth flows, and database schemas', 'Collaborating on UI, performance optimisation, and code reviews'],
  },
  {
    period: 'Jan 2024 — Feb 2024',
    role: 'Web Development Trainee',
    org: 'Corizo',
    type: 'work',
    details: ['Built responsive websites with HTML, CSS, JavaScript, and jQuery', 'Translated brand guidelines into clean, accessible front-end pages', 'First real hands-on experience with the build → test → ship loop'],
  },
  {
    period: 'Aug 2023 — Aug 2027',
    role: 'B.Tech Computer Engineering',
    org: 'Nutan College of Engineering & Research',
    type: 'edu',
    details: ['Core CS: data structures, OS, networks, databases', 'Self-driven focus on full-stack web development alongside coursework'],
  },
  {
    period: 'Mar 2023',
    role: 'HSC — Science (12th)',
    org: 'S.M. Joshi Junior College, Pune',
    type: 'edu',
    details: [],
  },
  {
    period: 'Mar 2021',
    role: 'SSC (10th)',
    org: 'Sadhana English Medium School',
    type: 'edu',
    details: [],
  },
]

const certs = [
  'Web Development — Udemy',
  'Web Development — Apna College',
  '100 Days of Code: Python Pro — Udemy',
  'Data Science — Internshala',
  'Microsoft Excel Advanced — Udemy',
  'Tableau Certified — Tableau',
  'IBM Certification — IBM',
]

export default function Journey() {
  return (
    <section id="journey" className="section-pad" style={{ backgroundColor: '#faf6f0' }}>
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-3">How I got here</p>
          <h2 className="section-title">My Journey</h2>
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="w-2 h-2 rounded-full bg-terracotta opacity-60"></span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-16">
          {/* Timeline */}
          <div>
            <h3 className="font-bold text-ink text-lg uppercase tracking-wide mb-8 pb-3 border-b-2 border-terracotta inline-block">
              Experience & Education
            </h3>
            <ol className="relative border-l-2 border-black/10 ml-2 space-y-0">
              {timeline.map((t, i) => (
                <li key={i} className="ml-6 pb-8 relative">
                  <span className={`absolute -left-[29px] top-1 w-4 h-4 rounded-full border-2 border-white ${t.type === 'work' ? 'bg-terracotta' : 'bg-[#34d399]'}`}></span>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted mb-1">{t.period}</div>
                  <div className="font-bold text-ink text-[16px]">{t.role}</div>
                  <div className="text-muted text-[13px] mb-2">{t.org}</div>
                  {t.details.length > 0 && (
                    <ul className="space-y-1">
                      {t.details.map(d => (
                        <li key={d} className="flex items-start gap-2 text-[13px] text-ink/65">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-terracotta/60 flex-shrink-0"></span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-bold text-ink text-lg uppercase tracking-wide mb-8 pb-3 border-b-2 border-terracotta inline-block">
              Certifications
            </h3>
            <ul className="space-y-3">
              {certs.map(c => (
                <li key={c} className="flex items-center gap-3 p-4 border border-black/10 bg-white hover:border-terracotta/40 transition-colors">
                  <div className="w-8 h-8 bg-[#c5e8e0] grid place-items-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                      <circle cx="12" cy="8" r="6"/><path d="M9 13.5 7 22l5-3 5 3-2-8.5"/>
                    </svg>
                  </div>
                  <span className="text-[14px] text-ink font-medium">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
