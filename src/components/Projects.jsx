const projects = [
  {
    tag: 'Full Stack',
    title: 'ShopLux — Premium Fashion Store',
    desc: 'A complete e-commerce experience for a premium fashion brand. Product catalog, search, cart, checkout flow, and an admin dashboard. Built end-to-end — feels like a real store, not a side project.',
    highlights: ['JWT auth with role-based access', 'Cart & order flow with history', 'Admin dashboard for stock & orders', 'Fully responsive mobile checkout'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    live: 'https://shoplux-delta.vercel.app/',
    flip: false,
  },
  {
    tag: 'SaaS Tool',
    title: 'AI Spend Audit — Cost Optimizer',
    desc: 'A free audit tool for startups and engineering teams. Plug in your AI tool stack and get a no-BS breakdown of where you\'re overpaying — in under 3 minutes. Analyzes 8+ tools including Cursor, Claude, Copilot, and ChatGPT.',
    highlights: ['Plan-tier & redundancy detection', 'API credits vs retail comparison', 'Annual billing discount analysis', 'Clean minimal landing flow'],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    live: 'https://ai-audit-spend-eight.vercel.app/',
    flip: true,
  },
  {
    tag: 'Marketing Site',
    title: 'PulseFit — Fitness Coaching Platform',
    desc: 'A modern coaching website for a fitness brand offering 1:1 training, mobility, and lean-strength programs. Designed to convert — tiered pricing, clear program tracks, and a WhatsApp-integrated contact flow.',
    highlights: ['3 program tracks with tier pricing', 'WhatsApp lead capture form', 'Photography-led responsive layout', 'Clean conversion-focused copy'],
    stack: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    live: 'https://fitness-next-js-website.vercel.app/',
    flip: false,
  },
]

function MockupFrame({ live, title }) {
  return (
    <div className="relative">
      {/* Browser frame */}
      <div className="bg-[#e8e4dc] border border-black/10 rounded-sm overflow-hidden shadow-lg">
        {/* Address bar */}
        <div className="bg-[#d8d4cc] flex items-center gap-2 px-3 py-2">
          <div className="flex gap-1.5">
            {['#f87171','#fbbf24','#34d399'].map(c => (
              <span key={c} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }}></span>
            ))}
          </div>
          <div className="flex-1 mx-2 bg-white/60 rounded px-2 py-0.5 text-[10px] text-muted truncate">{live}</div>
        </div>
        {/* Preview pane */}
        <div className="relative overflow-hidden" style={{ paddingBottom: '62%' }}>
          <iframe
            src={live}
            title={title}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            style={{ transform: 'scale(0.5)', transformOrigin: 'top left', width: '200%', height: '200%' }}
          />
          {/* Overlay to prevent interaction */}
          <a href={live} target="_blank" rel="noreferrer"
            className="absolute inset-0 z-10 flex items-end justify-end p-3">
            <span className="bg-white/90 text-[11px] font-bold uppercase tracking-wider text-terracotta px-2 py-1">
              ↗ Open
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad" style={{ backgroundColor: '#faf6f0' }}>
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="eyebrow mb-3">Work I'm proud of</p>
          <h2 className="section-title">My Projects</h2>
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="w-2 h-2 rounded-full bg-terracotta opacity-60"></span>
            ))}
          </div>
        </div>

        {/* Project rows */}
        <div className="space-y-14">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${p.flip ? 'md:[direction:rtl]' : ''}`}
            >
              {/* Mockup */}
              <div className={p.flip ? 'md:[direction:ltr]' : ''}>
                <MockupFrame live={p.live} title={p.title} />
              </div>

              {/* Text */}
              <div className={p.flip ? 'md:[direction:ltr]' : ''}>
                <span className="project-tag">{p.tag}</span>
                <h3 className="font-sans font-bold text-ink leading-snug mb-4"
                    style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}>
                  {p.title}
                </h3>
                <p className="text-muted text-[15px] leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-2 mb-6">
                  {p.highlights.map(h => (
                    <li key={h} className="flex items-start gap-2 text-[14px] text-ink/70">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0"></span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-7">
                  {p.stack.map(s => (
                    <span key={s} className="text-[11px] font-semibold uppercase tracking-wider text-ink/60 border border-black/15 px-3 py-1">
                      {s}
                    </span>
                  ))}
                </div>
                <a href={p.live} target="_blank" rel="noreferrer" className="btn-terra inline-flex items-center gap-2">
                  Live Demo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17 17 7M8 7h9v9"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
