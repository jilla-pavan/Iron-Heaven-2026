import { motion } from 'framer-motion'

const heroImage =
  'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1600'

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-black via-[#050509] to-black scroll-mt-24 md:scroll-mt-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-700/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-16 pt-12 md:flex-row md:gap-8 md:pt-16 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex-1 space-y-6"
        >
          <p className="inline-flex items-center rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-red-300">
            Built for serious lifters
          </p>

          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Elevate your strength at{' '}
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              Iron Heaven Gym
            </span>
          </h1>

          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            A premium strength and conditioning club in the heart of Malkajgiri. Built for athletes, professionals,
            and anyone serious about transforming their body and mindset.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
            <span className="rounded-full border border-white/10 px-3 py-1">
              5:00 AM – 10:00 PM
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              1st floor, Mirjalguda Main Rd, Secunderabad
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Strength • CrossFit • Conditioning
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-soft-red hover:brightness-110"
            >
              Book a free trial
            </a>
            <a
              href="https://wa.me/919440152470"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-slate-200 hover:text-red-400"
            >
              WhatsApp us for membership details →
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="flex-1"
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-red-500/30 via-transparent to-red-600/20 blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl shadow-red-900/40">
              <img
                src={heroImage}
                alt="Athlete lifting weights at Iron Heaven Gym"
                className="h-80 w-full object-cover sm:h-96"
              />
              <div className="flex items-center justify-between border-t border-white/10 bg-black/60 px-4 py-3 text-[11px] text-slate-200">
                <div>
                  <p className="font-semibold uppercase tracking-[0.18em] text-red-300">
                    Iron Heaven Gym
                  </p>
                  <p className="text-[10px] text-slate-400">
                    Strength • CrossFit • Conditioning • Personal Coaching
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-400">Call for memberships</p>
                  <p className="font-semibold text-slate-100">+91 94401 52470</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

