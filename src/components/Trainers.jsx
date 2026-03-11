import { motion } from 'framer-motion'

const trainers = [
  {
    name: 'Rahul Verma',
    specialty: 'Strength & Powerlifting Coach',
    experience: '8+ years',
    image:
      'https://images.pexels.com/photos/7676400/pexels-photo-7676400.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'Ananya Rao',
    specialty: 'Weight Loss & Conditioning Coach',
    experience: '6+ years',
    image:
      'https://images.pexels.com/photos/3823063/pexels-photo-3823063.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'Vikram Singh',
    specialty: 'CrossFit & Functional Training',
    experience: '7+ years',
    image:
      'https://images.pexels.com/photos/6456225/pexels-photo-6456225.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
]

function Trainers() {
  return (
    <section
      id="trainers"
      className="border-b border-white/5 bg-black py-12 sm:py-14 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex flex-col gap-3 sm:items-center sm:text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400"
          >
            Trainers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl"
          >
            Coaches who train with you, not just count reps.
          </motion.h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {trainers.map((trainer, index) => (
            <motion.article
              key={trainer.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-white/0 text-sm text-slate-200 shadow-[0_20px_55px_rgba(0,0,0,0.85)]"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110 hover:brightness-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
              <div className="space-y-1 px-4 pb-4 pt-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-400">
                  {trainer.specialty}
                </p>
                <h3 className="text-[15px] font-semibold text-slate-50">{trainer.name}</h3>
                <p className="text-xs text-slate-400">Experience: {trainer.experience}</p>
                <p className="pt-1 text-[11px] text-slate-400">
                  Focused on form, safety, and sustainable progress—whether you&apos;re a beginner
                  or advanced lifter.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trainers

