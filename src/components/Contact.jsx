function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="1"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7 10.09a16 16 0 0 0 6.91 6.91l1.34-1.79a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .75 1z"/>
    </svg>
  )
}
function LocationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
    </svg>
  )
}

function ContactCard({ bg, IconComponent, label, value, href, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="flex items-center gap-4 p-4 border border-black/10 hover:border-terracotta/50 transition-colors group"
      style={{ backgroundColor: bg }}
    >
      <div className="contact-icon-box group-hover:bg-[#a33820] transition-colors">
        <IconComponent />
      </div>
      <div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-muted mb-0.5">{label}</div>
        <div className="font-semibold text-ink text-[14px]">{value}</div>
      </div>
    </a>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="section-pad" style={{ backgroundColor: '#f0ebe2' }}>
      <div className="container-max">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="section-title">Get In Touch</h2>
          <div className="flex justify-center gap-1 mt-4">
            {[0,1,2].map(i => (
              <span key={i} className="w-2 h-2 rounded-full bg-terracotta opacity-60"></span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left — contact cards */}
          <div className="space-y-4">
            <ContactCard
              bg="#c5e8e0"
              IconComponent={MailIcon}
              label="Mail"
              value="xesiddhikale51@gmail.com"
              href="mailto:xesiddhikale51@gmail.com?subject=Hi%20Siddhi%20%E2%80%94%20from%20your%20portfolio"
            />
            <ContactCard
              bg="#f5d88c"
              IconComponent={PhoneIcon}
              label="Phone"
              value="+91 94225 54886"
              href="tel:+919422554886"
            />
            <ContactCard
              bg="#f5c0b0"
              IconComponent={LocationIcon}
              label="Location"
              value="Pune / Pimpri-Chinchwad, India"
              href="https://maps.google.com/?q=Pune,Maharashtra,India"
              external
            />
            <ContactCard
              bg="#c0cff5"
              IconComponent={LinkedInIcon}
              label="LinkedIn"
              value="linkedin.com/in/siddhikale2306"
              href="https://www.linkedin.com/in/siddhikale2306"
              external
            />
          </div>

          {/* Right — CTA */}
          <div className="flex flex-col justify-center gap-6">
            <div>
              <h3 className="font-bold text-ink text-2xl md:text-3xl leading-snug mb-4">
                Let's build something together.
              </h3>
              <p className="text-muted text-[15px] leading-relaxed">
                I'm open to full-time roles, freelance projects, and interesting
                collaborations. Drop me a line — I usually reply within a day.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:xesiddhikale51@gmail.com?subject=Hi%20Siddhi%20%E2%80%94%20from%20your%20portfolio"
                className="btn-terra"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="1"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Send Email
              </a>
              <a
                href="https://wa.me/919422554886?text=Hi%20Siddhi%2C%20I%20found%20your%20portfolio."
                target="_blank"
                rel="noreferrer"
                className="btn-terra-outline"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.687-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.742-.981.236.142zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
