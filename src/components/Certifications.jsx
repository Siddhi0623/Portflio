const certs = [
  { name: 'Web Development', issuer: 'Udemy' },
  { name: 'Web Development', issuer: 'Apna College' },
  { name: '100 Days of Code: Python Pro Bootcamp', issuer: 'Udemy' },
  { name: 'Data Science', issuer: 'Internshala' },
  { name: 'Microsoft Excel (Advanced)', issuer: 'Udemy' },
  { name: 'Tableau Certified', issuer: 'Tableau' },
  { name: 'IBM Certification', issuer: 'IBM' }
]

export default function Certifications() {
  return (
    <section className="section-pad">
      <div className="container-max">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Certifications</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-slate-900">Always learning</h2>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map(c => (
            <div key={c.name + c.issuer} className="card p-5 flex items-start gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-accent/15 to-accent2/15 text-accent shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M9 13.5 7 22l5-3 5 3-2-8.5"/></svg>
              </div>
              <div>
                <div className="font-semibold text-slate-900">{c.name}</div>
                <div className="text-sm text-slate-500">{c.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
