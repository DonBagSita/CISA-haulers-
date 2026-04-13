import type { Metadata } from 'next';
import Image from 'next/image';
import ScrollHero from '@/components/ScrollHero';

export const metadata: Metadata = {
  title: 'CISA Hauliers Limited — Heavy Haulage & Crane Hire, Kenya',
  description:
    'East Africa\'s trusted heavy haulage, crane hire, and project logistics specialists — operating the Mombasa–Nairobi–Uganda Corridor since 2009.',
};

// ─── FLEET IMAGES ───────────────────────────────────────────────────────────
const fleetImages = [
  { src: '/images/lpg-tankers.jpg', label: 'LPG Tanker Transport', alt: 'LPG tanker transport at Mombasa port' },
  { src: '/images/jcb-excavator.jpg', label: 'JCB Excavator Delivery', alt: 'JCB excavator on low-bed trailer' },
  { src: '/images/industrial-plant.jpg', label: 'Industrial Plant Transport', alt: 'Heavy industrial plant on flatbed' },
  { src: '/images/port-sunset.jpg', label: 'Mombasa Port Operations', alt: 'Container yard at dusk, Mombasa' },
  { src: '/images/hitachi.jpg', label: 'Hitachi Excavator Haulage', alt: 'Hitachi excavator on low-bed trailer' },
  { src: '/images/fleet-yard.jpg', label: 'Low-bed Fleet Ready', alt: 'CISA fleet of low-bed trailers in yard' },
  { src: '/images/jcb-hyster.jpg', label: 'JCB Crane Lift', alt: 'JCB excavator being lifted by Hyster crane' },
  { src: '/images/grader.jpg', label: 'Motor Grader Delivery', alt: 'SEM motor grader on low-bed trailer' },
  { src: '/images/night-port.jpg', label: 'Night Port Clearance', alt: 'Cargo truck at illuminated port at night' },
];

const services = [
  {
    num: '01',
    name: 'Heavy Haulage',
    desc: 'Low-bed and flatbed transportation of oversized and overweight cargo across East Africa.',
    tags: ['Low-beds', 'Flatbeds', 'OOG Cargo', 'Wide Load'],
  },
  {
    num: '02',
    name: 'Crane Hire',
    desc: 'Mobile crane hire from 10T to 50T with certified operators — port lifts, factory installations, and infrastructure projects.',
    tags: ['10T – 50T', 'Port Lifts', 'Certified Ops', '24hr Hire'],
  },
  {
    num: '03',
    name: 'Project Logistics',
    desc: 'End-to-end cargo management — clearance coordination, route surveys, abnormal load permits, and escort across borders.',
    tags: ['Port Clearance', 'Route Survey', 'Permits', 'Cross-border'],
  },
  {
    num: '04',
    name: 'Port Operations',
    desc: 'Specialised cargo reception direct from Mombasa Port. Container off-loading, RoRo handling, and bonded transport.',
    tags: ['RoRo', 'Container', 'Bonded', 'Mombasa'],
  },
  {
    num: '05',
    name: 'Commission Agency',
    desc: 'Trusted commission agent for haulage procurement, sub-contracting, and logistics brokerage across the region.',
    tags: ['Brokerage', 'Sub-contract', 'Advisory'],
  },
  {
    num: '06',
    name: '24/7 Emergency',
    desc: 'Round-the-clock emergency transport for critical infrastructure, oil & gas, and time-sensitive industrial deliveries.',
    tags: ['Emergency', 'Oil & Gas', 'Night Ops'],
  },
];

const trustItems = [
  { title: '24/7 GPS Tracking', desc: 'Real-time visibility of every load across the entire corridor.' },
  { title: 'Fully Insured GIT', desc: 'Comprehensive Goods in Transit insurance — port to destination.' },
  { title: 'Certified Operators', desc: 'All operators certified to Kenya Roads Board and industry standards.' },
  { title: 'On-Time Delivery', desc: 'Strict schedule adherence with proactive communication on every job.' },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* HERO */}
      <ScrollHero />

      {/* MARQUEE */}
      <div className="overflow-hidden bg-[#F97316] py-3 whitespace-nowrap">
        <div className="inline-block animate-marquee">
          {['Mombasa Port','Nairobi','Kampala Corridor','Heavy Haulage','Crane Hire 10T–50T','Project Logistics','Industrial Supply Chain'].map((item, i) => (
            <span key={i} className="inline-block px-12 font-['Bebas_Neue'] text-white tracking-widest text-sm after:content-['◆'] after:ml-12 after:opacity-50">{item}</span>
          ))}
          {/* duplicate for seamless loop */}
          {['Mombasa Port','Nairobi','Kampala Corridor','Heavy Haulage','Crane Hire 10T–50T','Project Logistics','Industrial Supply Chain'].map((item, i) => (
            <span key={`d${i}`} className="inline-block px-12 font-['Bebas_Neue'] text-white tracking-widest text-sm after:content-['◆'] after:ml-12 after:opacity-50">{item}</span>
          ))}
        </div>
      </div>

      <main className="bg-[#0B1220]">

        {/* ── ABOUT ──────────────────────────────────────────────── */}
        <section id="about" className="bg-[#111827] py-28 px-16 relative overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5 before:block before:w-8 before:h-px before:bg-orange-500">
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-orange-500">Who We Are</span>
              </div>
              <h2 className="font-['Bebas_Neue'] text-7xl tracking-wide text-white mb-6">
                The Corridor <span className="text-orange-500">Specialists</span>
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4 text-lg">
                CISA Hauliers Limited is Kenya's trusted name in{' '}
                <strong className="text-white">heavy haulage, crane hire, and project logistics</strong> — operating across
                the critical <strong className="text-white">Mombasa–Nairobi–Uganda Corridor</strong> and beyond.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                Our operators are <strong className="text-white">certified, experienced, and safety-first</strong> — every
                load, every time.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-10">
                {[
                  { num: '15+', label: 'Years in operation' },
                  { num: '50T', label: 'Max crane capacity' },
                  { num: '3', label: 'Countries covered' },
                  { num: '24/7', label: 'Operational support' },
                ].map(s => (
                  <div key={s.label} className="border-l-2 border-orange-500 pl-5 py-3 bg-orange-500/5">
                    <div className="font-['Bebas_Neue'] text-5xl text-orange-500 leading-none">{s.num}</div>
                    <div className="text-xs tracking-widest uppercase text-slate-400 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[480px]">
              <Image
                src="/images/fleet-yard.jpg"
                alt="CISA Hauliers fleet in yard"
                fill
                className="object-cover rounded"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 font-['Bebas_Neue'] text-lg tracking-widest leading-snug text-center max-w-[150px]">
                EAST AFRICA'S<br />CORRIDOR<br />SPECIALISTS
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ───────────────────────────────────────────── */}
        <section id="services" className="py-28 px-16">
          <div className="max-w-6xl mx-auto mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-orange-500">What We Do</span>
            </div>
            <h2 className="font-['Bebas_Neue'] text-7xl tracking-wide text-white">
              Our <span className="text-orange-500">Services</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-3 gap-px bg-white/5">
            {services.map(s => (
              <div
                key={s.num}
                className="bg-[#0B1220] p-10 relative overflow-hidden group hover:bg-[#1E2D45] transition-colors duration-300"
              >
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="font-mono text-xs tracking-widest text-slate-500 mb-3">{s.num}</div>
                <h3 className="font-['Bebas_Neue'] text-3xl tracking-wider text-white mb-4">{s.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {s.tags.map(t => (
                    <span key={t} className="text-xs tracking-widest uppercase px-3 py-1 border border-orange-500/35 text-orange-500">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FLEET GALLERY ──────────────────────────────────────── */}
        <section id="fleet" className="py-28 px-16 bg-[#111827]">
          <div className="max-w-6xl mx-auto mb-12">
            <div className="flex items-center gap-3 mb-5 before:block before:w-8 before:h-px before:bg-orange-500">
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-orange-500">Our Iron</span>
            </div>
            <h2 className="font-['Bebas_Neue'] text-7xl tracking-wide text-white">
              The <span className="text-orange-500">Fleet</span>
            </h2>
          </div>

          {/* Masonry-style via CSS columns */}
          <div className="max-w-6xl mx-auto columns-3 gap-4">
            {fleetImages.map((img) => (
              <div key={img.src} className="break-inside-avoid mb-4 relative overflow-hidden rounded group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,18,32,0.85)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-mono text-xs tracking-widest text-orange-500 uppercase">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TRUST BAR ──────────────────────────────────────────── */}
        <section id="trust" className="py-24 px-16 bg-[#1E2D45] relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(249,115,22,0.025) 40px, rgba(249,115,22,0.025) 41px)',
            }}
          />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-orange-500">Why Choose Us</span>
              <h2 className="font-['Bebas_Neue'] text-7xl tracking-wide text-white mt-4">
                Built on <span className="text-orange-500">Trust</span>
              </h2>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {trustItems.map(t => (
                <div
                  key={t.title}
                  className="flex flex-col items-center text-center gap-4 p-8 border border-white/7 bg-[rgba(11,18,32,0.4)] rounded hover:border-orange-500/35 hover:bg-orange-500/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-500/15 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                  </div>
                  <div className="font-semibold text-white text-sm">{t.title}</div>
                  <p className="text-slate-400 text-xs leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ────────────────────────────────────────────── */}
        <section id="contact" className="py-28 px-16 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          <div className="max-w-6xl mx-auto grid grid-cols-2 gap-24 items-start">

            {/* Left: info */}
            <div>
              <div className="flex items-center gap-3 mb-5 before:block before:w-8 before:h-px before:bg-orange-500">
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-orange-500">Let's Move It</span>
              </div>
              <h2 className="font-['Bebas_Neue'] text-7xl tracking-wide text-white mb-6">
                Request a <span className="text-orange-500">Quote</span>
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Tell us about your load — size, weight, route, and timeline — and our team will respond within 2 hours with a competitive quote.
              </p>
              {[
                { label: 'Head Office', value: 'Mombasa, Kenya — Port Reitz Area' },
                { label: 'Phone / WhatsApp', value: '+254 700 000 000' },
                { label: 'Email', value: 'info@cisahauliers.co.ke' },
                { label: 'Hours', value: 'Mon–Fri 7:00 AM – 6:00 PM · Weekend on-call' },
              ].map(d => (
                <div key={d.label} className="flex gap-4 mb-5">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                  <div>
                    <div className="text-xs tracking-widest uppercase text-slate-400 mb-1">{d.label}</div>
                    <div className="text-slate-200 text-sm">{d.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: form */}
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs tracking-widest uppercase text-slate-400 mb-2">Full Name</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-slate-600 focus:border-orange-500 focus:outline-none focus:bg-orange-500/5 transition-colors" placeholder="John Mwangi" />
                </div>
                <div>
                  <label className="block font-mono text-xs tracking-widest uppercase text-slate-400 mb-2">Company</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-slate-600 focus:border-orange-500 focus:outline-none focus:bg-orange-500/5 transition-colors" placeholder="Your company" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs tracking-widest uppercase text-slate-400 mb-2">Phone</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-slate-600 focus:border-orange-500 focus:outline-none focus:bg-orange-500/5 transition-colors" placeholder="+254 7XX XXX XXX" />
                </div>
                <div>
                  <label className="block font-mono text-xs tracking-widest uppercase text-slate-400 mb-2">Email</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-slate-600 focus:border-orange-500 focus:outline-none focus:bg-orange-500/5 transition-colors" placeholder="you@company.com" />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs tracking-widest uppercase text-slate-400 mb-2">Service Required</label>
                <select className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-slate-300 text-sm focus:border-orange-500 focus:outline-none transition-colors appearance-none">
                  <option>Select a service…</option>
                  <option>Heavy Haulage</option>
                  <option>Crane Hire (10T – 50T)</option>
                  <option>Project Logistics</option>
                  <option>Port Operations</option>
                  <option>Emergency Haulage</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs tracking-widest uppercase text-slate-400 mb-2">Origin</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-slate-600 focus:border-orange-500 focus:outline-none focus:bg-orange-500/5 transition-colors" placeholder="e.g. Mombasa Port" />
                </div>
                <div>
                  <label className="block font-mono text-xs tracking-widest uppercase text-slate-400 mb-2">Destination</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-slate-600 focus:border-orange-500 focus:outline-none focus:bg-orange-500/5 transition-colors" placeholder="e.g. Nairobi, Kampala" />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs tracking-widest uppercase text-slate-400 mb-2">Cargo Description</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-slate-600 focus:border-orange-500 focus:outline-none focus:bg-orange-500/5 transition-colors resize-y" placeholder="Describe dimensions, weight, timeline, and special requirements..." />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-semibold text-sm tracking-widest uppercase py-4 rounded transition-all duration-200 flex items-center justify-center gap-3"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Send Quote Request
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#1C2A3A] border-t border-white/7 py-12 px-16 flex items-center justify-between flex-wrap gap-6">
        <div className="font-['Bebas_Neue'] text-2xl tracking-widest text-white">
          CISA<span className="text-orange-500">.</span> HAULIERS LIMITED
        </div>
        <p className="text-slate-400 text-xs tracking-wide">
          © 2026 Cisa Hauliers Limited. Contractors, Transporters & Commission Agents. Mombasa, Kenya.
        </p>
        <ul className="flex gap-8">
          {['About','Services','Fleet','Contact'].map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-xs text-slate-400 hover:text-orange-500 uppercase tracking-widest transition-colors">{l}</a>
            </li>
          ))}
        </ul>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/254700000000?text=Hello%20Cisa%20Hauliers%2C%20I%27d%20like%20to%20request%20a%20quote."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        style={{ boxShadow: '0 4px 20px rgba(37,211,102,0.4)' }}
        title="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}
