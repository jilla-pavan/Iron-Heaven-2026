import { motion } from 'framer-motion'

const BEBAS = { fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.03em' }
const OSWALD = { fontFamily: "'Oswald', sans-serif" }
const POPPINS = { fontFamily: "'Poppins', sans-serif" }

const transformations = [
  {
    name: 'Rajesh Kumar',
    before: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/1552102/pexels-photo-1552102.jpeg?auto=compress&cs=tinysrgb&w=800',
    result: 'Lost 15 kg',
    detail: 'Weight Loss',
    duration: '6 Months',
  },
  {
    name: 'Priya Sharma',
    before: 'https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/4720294/pexels-photo-4720294.jpeg?auto=compress&cs=tinysrgb&w=800',
    result: 'Gained 8 kg',
    detail: 'Muscle Gain',
    duration: '8 Months',
  },
  {
    name: 'Amit Singh',
    before: 'https://images.pexels.com/photos/7991653/pexels-photo-7991653.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg?auto=compress&cs=tinysrgb&w=800',
    result: 'Full Recomp',
    detail: 'Body Transformation',
    duration: '12 Months',
  },
  {
    name: 'Vikram Reddy',
    before: 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=800',
    result: 'Lost 20 kg',
    detail: 'Weight Loss',
    duration: '8 Months',
  },
  {
    name: 'Sneha Patel',
    before: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800',
    result: 'Toned & Fit',
    detail: 'General Fitness',
    duration: '4 Months',
  },
]

function TransformCard({ t }) {
  return (
    <div className="w-96 shrink-0 rounded-2xl border border-white/8 bg-white/3 overflow-hidden">
      {/* Images */}
      <div className="grid grid-cols-2 gap-px bg-white/5">
        <div className="relative">
          <img
            src={t.before}
            alt={`${t.name} before`}
            className="h-64 sm:h-80 w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
          <span
            className="absolute bottom-3 left-3 rounded-md bg-black/80 px-2.5 py-1 text-[11px] text-slate-400 border border-white/10 tracking-widest"
            style={OSWALD}
          >
            BEFORE
          </span>
        </div>
        <div className="relative">
          <img
            src={t.after}
            alt={`${t.name} after`}
            className="h-64 sm:h-80 w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
          <span
            className="absolute bottom-3 right-3 rounded-md bg-red-600 px-2.5 py-1 text-[11px] text-white tracking-widest"
            style={OSWALD}
          >
            AFTER
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="px-5 py-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-100 uppercase tracking-wider" style={OSWALD}>
            {t.name}
          </p>
          <p className="text-xs text-slate-600 mt-0.5" style={POPPINS}>{t.detail}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-2xl leading-none text-red-400" style={BEBAS}>{t.result}</p>
          <p className="text-[10px] text-slate-600 mt-1 uppercase tracking-widest" style={OSWALD}>
            {t.duration}
          </p>
        </div>
      </div>
    </div>
  )
}

// duplicate for seamless loop
const items = [...transformations, ...transformations]

function Transformations() {
  return (
    <section
      id="transformations"
      className="relative bg-black py-16 sm:py-20 scroll-mt-24 overflow-hidden border-t border-white/5"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-linear-to-b from-red-950/8 to-transparent" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col items-center text-center gap-3 px-4"
      >
        <span
          className="inline-flex items-center gap-3"
          style={{ ...OSWALD, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#f87171' }}
        >
          <span className="h-px w-8 bg-red-500" />
          Transformations
          <span className="h-px w-8 bg-red-500" />
        </span>
        <h2 className="text-4xl text-white sm:text-5xl lg:text-6xl" style={BEBAS}>
          Real Results. <span className="text-red-500">Real</span> Members.
        </h2>
      </motion.div>

      {/* Scrolling marquee */}
      <div className="relative group">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-linear-to-r from-black to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-linear-to-l from-black to-transparent" />

        <div
          className="flex gap-5 w-max"
          style={{ animation: 'marquee 30s linear infinite' }}
          onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
        >
          {items.map((t, i) => (
            <TransformCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-10 text-center text-[11px] text-slate-700 px-4"
        style={POPPINS}
      >
        Results vary by individual · All members trained at Iron Heaven Gym, Malkajgiri
      </motion.p>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

export default Transformations
