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
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container-max w-full grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-0 items-center py-12 md:py-0">

        {/* ─── Left ─── */}
        <div className="animate-fade-up">
          <p className="eyebrow mb-5 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-terracotta rounded-full"></span>
            Hi, my name is Siddhi.
          </p>

          <h1 className="font-display italic font-bold text-ink leading-tight"
              style={{ fontSize: 'clamp(44px, 6.5vw, 72px)' }}>
            I'm a{' '}
            <span className="relative">
              {displayed}<span className="animate-blink border-r-[3px] border-terracotta ml-0.5">&nbsp;</span>
              <span
                className="absolute left-0 -bottom-1 h-[3px] bg-[#f5a220]"
                style={{ width: '100%' }}
              ></span>
            </span>
          </h1>

          <p className="mt-7 text-muted text-base md:text-[17px] leading-relaxed max-w-lg">
            Full Stack Developer working with the MERN stack — building scalable,
            real-world web applications. Currently at{' '}
            <span className="text-terracotta font-semibold">CodeServeTech Pvt Ltd</span>,
            Pune.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#about" className="btn-terra">About Me</a>
            <a href="#projects" className="btn-terra-outline">View Projects</a>
          </div>
        </div>

        {/* ─── Right — orange circle + floating icons ─── */}
        <div className="relative flex justify-center md:justify-end animate-fade-up">
          {/* Floating chips */}
          <div className="float-chip" style={{ top: '6%', left: '4%' }}>
            <span style={{ color: '#61DAFB' }}>⚛</span> React.js
          </div>
          <div className="float-chip" style={{ top: '12%', right: '2%' }}>
            <span style={{ color: '#68A063' }}>⬡</span> Node.js
          </div>
          <div className="float-chip" style={{ bottom: '18%', left: '0%' }}>
            <span style={{ color: '#4DB33D' }}>🍃</span> MongoDB
          </div>
          <div className="float-chip" style={{ bottom: '8%', right: '4%' }}>
            <span style={{ color: '#F7DF1E' }}>JS</span> JavaScript
          </div>
          <div className="float-chip" style={{ top: '50%', right: '-2%', transform: 'translateY(-50%)' }}>
            <span style={{ color: '#38BDF8' }}>◈</span> Tailwind
          </div>

          {/* Orange circle */}
          <div className="relative animate-float" style={{ width: 'clamp(260px, 38vw, 400px)', height: 'clamp(260px, 38vw, 400px)' }}>
            <div
              className="w-full h-full rounded-full overflow-hidden"
              style={{ backgroundColor: '#f5a220' }}
            >
              <img
                src="/profile.jpg"
                alt="Siddhi Kale"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 18%', transform: 'scale(1.55)', transformOrigin: '50% 22%' }}
              />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-4 py-2 shadow-md text-xs font-bold uppercase tracking-widest whitespace-nowrap border-b-2 border-terracotta">
              MERN · Full Stack
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
