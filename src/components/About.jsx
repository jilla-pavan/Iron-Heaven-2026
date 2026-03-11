import { motion } from 'framer-motion'

function About() {
  return (
    <section
      id="about"
      className="border-b border-white/5 bg-[#050509] py-14 sm:py-16 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-[1.3fr,1fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
              About Iron Heaven Gym
            </p>
            <h2 className="text-balance text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
              A serious training space for those who refuse to be average.
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-[15px]">
              Located at 1st floor, Mirjalguda Main Rd, New Mirjalguda, Malkajgiri, Secunderabad,
              Iron Heaven Gym is designed for progress. From heavy strength training and functional
              CrossFit-style workouts to focused weight loss and muscle building programs, every
              detail of our space is built around performance.
            </p>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-[15px]">
              Our certified coaches, premium equipment, and structured programming help you train
              smarter, stay consistent, and unlock your strongest self—no matter where you&apos;re
              starting from.
            </p>

            <div className="mt-5 grid gap-4 text-xs text-slate-200 sm:grid-cols-3">
              <div className="rounded-xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Working Hours
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-50">
                  5:00 AM – 10:00 PM
                </p>
                <p className="mt-1 text-[11px] text-slate-400">Open all 7 days</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Focus Areas
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-50">
                  Strength • CrossFit • Hypertrophy
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Custom programs for every goal
                </p>
              </div>
              <div className="rounded-xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Location
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-50">
                  New Mirjalguda, Malkajgiri
                </p>
                <p className="mt-1 text-[11px] text-slate-400">Secunderabad, Telangana 500047</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-red-500/30 via-transparent to-red-700/30 blur-2xl" />
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/60 to-black/20 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Premium gym interior with heavy weights and machines"
                  className="h-64 w-full object-cover sm:h-72"
                />
                <div className="border-t border-white/10 bg-black/80 px-4 py-3 text-[11px] text-slate-200">
                  <p className="font-semibold uppercase tracking-[0.22em] text-red-300">
                    Built for intensity
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Dedicated strength zones, free weights, CrossFit rigs, and functional training
                    space—no wasted floor area.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

