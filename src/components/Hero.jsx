import { useState, useEffect } from 'react'

const roles = ['Full Stack Developer', 'MERN Stack Engineer', 'Web Developer']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = roles[roleIdx]
    let timer
    if (!deleting && displayed.length < full.length) {
      timer = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === full.length) {
      timer = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % roles.length)
    }
    return () => clearTimeout(timer)
  }, [displayed, deleting, roleIdx])

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="container-max grid w-full items-center gap-12 py-12 md:grid-cols-[1.05fr_.95fr] md:gap-8 md:py-16 lg:gap-12">

        <div className="animate-fade-up">
          <p className="eyebrow mb-6 flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-terracotta" />
            Portfolio <span className="text-terracotta">/</span> Pune, India
          </p>

          <h1
            className="max-w-2xl font-display italic font-bold leading-[1.04] text-ink"
            style={{ fontSize: 'clamp(40px, 6.2vw, 72px)' }}
            aria-label={`I'm a ${roles[roleIdx]}, building for the web.`}
          >
            I'm a{' '}
            <span className="relative text-terracotta underline decoration-[#f5a220] decoration-[3px] underline-offset-4">
              {displayed || '\u00a0'}
              <span className="animate-blink ml-0.5 border-r-[3px] border-terracotta">&nbsp;</span>
            </span>
            <span className="mt-3 block font-sans text-[0.54em] font-semibold not-italic leading-tight text-ink">
              building for the web.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-[17px]">
            I build clean, useful web applications with React, Node, and Express.
            I recently completed a Full Stack Developer internship at{' '}
            <span className="font-semibold text-terracotta">CodeServeTech Pvt Ltd, Pune</span>{' '}
            (May 2026 – June 2026).
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-terra">View Projects</a>
            <a href="#about" className="btn-terra-outline">About Me</a>
            <a href="/Siddhi_Kale_FullStack_Resume.pdf" download className="btn-terra-outline">Download Resume</a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
            <span className="h-px w-9 bg-terracotta" />
            <span>React</span><span className="text-terracotta">·</span>
            <span>Node.js</span><span className="text-terracotta">·</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className="relative flex min-h-[320px] items-center justify-center animate-fade-up md:min-h-[430px]">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-terracotta/20"
            style={{ width: 'min(76vw, 430px)', height: 'min(76vw, 430px)' }}
          />

          <span aria-hidden="true" className="absolute bottom-[-26px] right-0 z-0 select-none font-display text-[clamp(130px,20vw,220px)] font-bold leading-none text-terracotta/5">
            SK
          </span>

          <div className="float-chip absolute z-20 hidden lg:flex" style={{ top: '12%', left: '-20%' }}>
            <span style={{ color: '#61DAFB' }}>⚛</span> React.js
          </div>
          <div className="float-chip absolute z-20 hidden lg:flex" style={{ top: '17%', right: '-20%' }}>
            <span style={{ color: '#68A063' }}>⬡</span> Node.js
          </div>
          <div className="float-chip absolute z-20 hidden lg:flex" style={{ bottom: '21%', left: '-20%' }}>
            <span style={{ color: '#4DB33D' }}>🍃</span> MongoDB
          </div>
          <div className="float-chip absolute z-20 hidden lg:flex" style={{ bottom: '10%', right: '-20%' }}>
            <span style={{ color: '#F7DF1E' }}>JS</span> JavaScript
          </div>
          <div className="float-chip absolute z-20 hidden -translate-y-1/2 lg:flex" style={{ top: '50%', right: '-20%' }}>
            <span style={{ color: '#38BDF8' }}>◈</span> Tailwind
          </div>

          <div className="relative z-10 animate-float" style={{ width: 'clamp(250px, 35vw, 390px)', height: 'clamp(250px, 35vw, 390px)' }}>
            <div aria-hidden="true" className="absolute -inset-3 rotate-6 rounded-full border border-black/15" />
            <div className="relative h-full w-full overflow-hidden rounded-full bg-orange-hero">
              <img
                src="/profile.jpg"
                alt="Siddhi Kale"
                className="h-full w-full object-cover"
                style={{ objectPosition: '50% 18%', transform: 'scale(1.55)', transformOrigin: '50% 22%' }}
              />
            </div>

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap border-b-2 border-terracotta bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-md">
              MERN · Full Stack
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
