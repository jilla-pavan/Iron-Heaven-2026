import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, Dumbbell, Trophy } from 'lucide-react'

const BEBAS = { fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.03em' }
const OSWALD = { fontFamily: "'Oswald', sans-serif" }

function FitLine({ children, className = '', delay = 0 }) {
  const wrapRef = useRef(null)
  const spanRef = useRef(null)

  useEffect(() => {
    const fit = () => {
      const wrap = wrapRef.current
      const span = spanRef.current
      if (!wrap || !span) return
      span.style.fontSize = '200px'
      const ratio = wrap.clientWidth / span.scrollWidth
      span.style.fontSize = `${200 * ratio}px`
    }
    fit()
    const ro = new ResizeObserver(fit)
    if (wrapRef.current) ro.observe(wrapRef.current)
    return () => ro.disconnect()
  }, [children])

  return (
    <div ref={wrapRef} className="w-full overflow-hidden">
      <motion.span
        ref={spanRef}
        className={`block whitespace-nowrap leading-[0.95] ${className}`}
        style={BEBAS}
        initial={{ y: '105%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </div>
  )
}

const stats = ['Premium Equipment', 'Expert Coaching', 'Real Transformations']

const badges = [
  { icon: Star, label: '4.8+ Google Rating' },
  { icon: Dumbbell, label: 'Expert Trainers' },
  { icon: Trophy, label: 'Proven Results' },
]

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden min-h-screen flex flex-col justify-center">

      {/* Background */}
      <img
        src="https://images.pexels.com/photos/685531/pexels-photo-685531.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-black/65" />
      {/* bottom fade */}
      <div className="absolute bottom-0 inset-x-0 -z-10 h-32 bg-linear-to-t from-black to-transparent" />

      <div className="relative flex flex-col items-center text-center px-4 sm:px-6 pt-20 pb-16 sm:py-16">

        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6 w-full flex flex-wrap justify-center items-center gap-2.5 px-5 py-2 text-center"
          style={{ ...OSWALD, fontSize: 'clamp(0.7rem, 2.5vw, 0.95rem)', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fca5a5' }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
          Secunderabad's Most Trusted Fitness Destination
        </motion.div>

        {/* Heading */}
        <div className="w-full">
          <FitLine className="text-white" delay={0.15}>
            Elevate your <span style={{ background: 'rgba(90,90,100,0.5)', color: '#94a3b8', padding: '0 0.12em', borderRadius: '0.08em' }}>strength</span> at
          </FitLine>
          <FitLine
            className="bg-linear-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent"
            delay={0.3}
          >
            Iron Heaven Gym
          </FitLine>
        </div>

        {/* Red divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
          className="mt-5 h-0.5 w-24 rounded-full bg-linear-to-r from-red-500 to-red-700 origin-left"
        />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.52 }}
          className="mt-4 w-full flex flex-wrap justify-center items-center gap-x-4 gap-y-1.5 sm:gap-x-6"
        >
          {stats.map((s, i) => (
            <span key={s} className="inline-flex items-center gap-2 sm:gap-4">
              <span style={{ ...OSWALD, fontSize: 'clamp(0.7rem, 2.8vw, 1.2rem)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>
                {s}
              </span>
              {i < stats.length - 1 && (
                <span className="h-1 w-1 rounded-full bg-red-500 hidden sm:inline-block" />
              )}
            </span>
          ))}
        </motion.div>

        {/* Feature badges */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.62 }}
          className="mt-4 w-full grid grid-cols-1 sm:grid-cols-3 gap-3"
        >
          {badges.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/8 px-4 py-2.5 sm:px-5 sm:py-3 backdrop-blur-sm"
              style={{ ...OSWALD, fontSize: 'clamp(0.75rem, 2.8vw, 1.05rem)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'white' }}
            >
              <Icon size={18} className="text-red-400 shrink-0" />
              {label}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.72 }}
          className="mt-5 w-full flex flex-wrap justify-center items-center gap-4"
        >
          <a
            href={`https://wa.me/919440152470?text=${encodeURIComponent("Hi! I'd like to book a free trial session at Iron Heaven Gym, Malkajgiri.")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-7 py-3 sm:px-10 sm:py-3.5 text-white shadow-xl shadow-red-900/50 hover:bg-red-500 hover:scale-[1.03] transition-all duration-200"
            style={{ ...OSWALD, fontSize: 'clamp(0.9rem, 3.5vw, 1.25rem)', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}
          >
            Book a Free Trial →
          </a>
          <a
            href={`https://wa.me/919440152470?text=${encodeURIComponent("Hi! I'd like to know more about Iron Heaven Gym, Malkajgiri.")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/8 px-5 py-3 sm:px-8 sm:py-3.5 text-white hover:bg-white/15 transition-all duration-200 backdrop-blur-sm"
            style={{ ...OSWALD, fontSize: 'clamp(0.85rem, 3vw, 1.1rem)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
          >
            WhatsApp Us →
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
