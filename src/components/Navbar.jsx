import { useState, useEffect } from 'react'

const links = [
  { href: '#home',     label: 'Home' },
  { href: '#about',    label: 'About Me' },
  { href: '#skills',   label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey',  label: 'Journey' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    fn(); window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#faf6f0]/95 backdrop-blur shadow-sm border-b border-black/5' : ''}`}>
      <div className="container-max flex items-center justify-between py-5">
        {/* Logo */}
        <a href="#home" className="font-sans text-xl font-normal tracking-wide text-ink">
          Siddhi <span className="font-bold text-terracotta">Kale</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact" className="btn-terra hidden md:inline-flex">
          Contact Now
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-ink transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-ink transition-all ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-ink transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-canvas z-40 flex flex-col pt-24 px-8">
          <button onClick={() => setOpen(false)} className="absolute top-5 right-6 text-2xl text-ink">✕</button>
          <nav className="flex flex-col gap-6">
            {links.map(l => (
              <a
                key={l.href} href={l.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-bold uppercase tracking-nav text-ink border-b border-black/10 pb-4 hover:text-terracotta transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-4">
              <div className="contact-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted font-semibold">Mail</div>
                <a href="mailto:xesiddhikale51@gmail.com" className="text-ink font-medium text-sm">xesiddhikale51@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="contact-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted font-semibold">Location</div>
                <p className="text-ink font-medium text-sm">Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex gap-4">
            {[
              { href: 'https://www.linkedin.com/in/siddhikale2306', icon: <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>, solid: true },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer"
                className="w-10 h-10 border-2 border-ink/20 flex items-center justify-center hover:bg-terracotta hover:border-terracotta hover:text-white transition-colors text-ink">
                <svg width="18" height="18" viewBox="0 0 24 24" fill={s.solid ? 'currentColor' : 'none'} stroke={s.solid ? 'none' : 'currentColor'} strokeWidth="2">{s.icon}</svg>
              </a>
            ))}
          </div>
          <p className="mt-auto mb-8 text-xs text-muted text-center">© 2025 Siddhi Kale. All rights reserved.</p>
        </div>
      )}
    </header>
  )
}
