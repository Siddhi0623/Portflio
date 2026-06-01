export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a1a1a' }} className="py-8">
      <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-[13px]">
          © {new Date().getFullYear()} Siddhi Kale. All rights reserved.
        </p>
        <a href="#home" className="font-sans text-lg font-normal tracking-wide text-white/70">
          Siddhi <span className="font-bold text-terracotta">Kale</span>
        </a>
        <div className="flex gap-3">
          <a href="https://www.linkedin.com/in/siddhikale2306" target="_blank" rel="noreferrer"
            className="w-9 h-9 border border-white/20 grid place-items-center text-white/50 hover:bg-terracotta hover:border-terracotta hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
            </svg>
          </a>
          <a href="mailto:xesiddhikale51@gmail.com"
            className="w-9 h-9 border border-white/20 grid place-items-center text-white/50 hover:bg-terracotta hover:border-terracotta hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
