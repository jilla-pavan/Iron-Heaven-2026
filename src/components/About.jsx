import { motion } from 'framer-motion'

const BEBAS = { fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.03em' }
const OSWALD = { fontFamily: "'Oswald', sans-serif" }
const POPPINS = { fontFamily: "'Poppins', sans-serif" }

const trainer = {
  name: 'Trainer Name',
  role: 'Head Coach',
  exp: '8 Years Experience',
  speciality: 'Strength & Powerlifting',
  photo: null,        // replace with photo URL or local path
  certificate: null,  // replace with certificate image URL or local path
  certName: 'Certificate Name',
  certBody: 'Issuing Organization',
}

function About() {
  return (
    <section id="trainers" className="relative isolate bg-[#0a0a0f] py-16 sm:py-20 scroll-mt-24 overflow-hidden border-t border-white/5">

      {/* Background image */}
      <img
        src="https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-black/80" />
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-linear-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-black to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-linear-to-b from-red-950/8 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-center text-center gap-3"
        >
          <span
            className="inline-flex items-center gap-3"
            style={{ ...OSWALD, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#f87171' }}
          >
            <span className="h-px w-8 bg-red-500" />
            Our Trainer
            <span className="h-px w-8 bg-red-500" />
          </span>
          <h2 className="text-4xl text-white sm:text-5xl lg:text-6xl" style={BEBAS}>
            Built for <span className="text-red-500">Serious</span> Lifters.
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/8 bg-white/3 overflow-hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2">

            {/* LEFT — Photo + details */}
            <div className="flex flex-col">
              {/* Photo */}
              <div className="relative h-64 sm:h-80">
                {trainer.photo ? (
                  <img
                    src={trainer.photo}
                    alt={trainer.name}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="h-full w-full flex flex-col items-center justify-center gap-2 bg-white/3">
                    <div className="h-16 w-16 rounded-full bg-white/8 border border-white/10 flex items-center justify-center">
                      <svg className="h-8 w-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <p className="text-[11px] text-slate-700" style={POPPINS}>Photo coming soon</p>
                  </div>
                )}
                {trainer.photo && (
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                )}
                <span
                  className="absolute bottom-4 left-4 rounded-md bg-red-600 px-3 py-1 text-[11px] text-white tracking-widest"
                  style={OSWALD}
                >
                  {trainer.role}
                </span>
              </div>

              {/* Details below photo */}
              <div className="flex flex-col gap-3 p-6 border-t border-white/8">
                <p className="text-xl sm:text-2xl font-semibold text-white uppercase tracking-wider" style={OSWALD}>
                  {trainer.name}
                </p>
                <p className="text-sm text-red-400" style={POPPINS}>{trainer.speciality}</p>
                <div className="flex flex-col gap-2 mt-1">
                  <div className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                    <p className="text-sm text-slate-400" style={POPPINS}>{trainer.exp}</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                    <p className="text-sm text-slate-400" style={POPPINS}>{trainer.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Certificate */}
            <div className="flex flex-col border-t sm:border-t-0 sm:border-l border-white/8">
              <div className="relative flex-1 min-h-64 sm:min-h-80">
                {trainer.certificate ? (
                  <img
                    src={trainer.certificate}
                    alt="Certificate"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex flex-col items-center justify-center gap-2 bg-white/3">
                    <div className="h-16 w-16 rounded-full bg-white/8 border border-white/10 flex items-center justify-center">
                      <svg className="h-8 w-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                    </div>
                    <p className="text-[11px] text-slate-700" style={POPPINS}>Certificate coming soon</p>
                  </div>
                )}
              </div>
              <div className="border-t border-white/8 px-6 py-4">
                <p className="text-xs font-semibold text-slate-300 uppercase tracking-widest" style={OSWALD}>
                  {trainer.certName}
                </p>
                <p className="text-[11px] text-slate-600 mt-0.5" style={POPPINS}>{trainer.certBody}</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About
