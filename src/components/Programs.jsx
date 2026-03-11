import { motion } from 'framer-motion'

const programs = [
  {
    name: 'Strength Training',
    description:
      'Progressive barbell and dumbbell strength programs focused on squats, deadlifts, presses, and pulls.',
    badge: 'Heavy Lifting',
  },
  {
    name: 'Personal Training',
    description:
      '1-on-1 coaching tailored to your goals, training age, and lifestyle for faster, safer results.',
    badge: '1:1 Coaching',
  },
  {
    name: 'CrossFit Training',
    description:
      'High-intensity functional training combining strength, conditioning, and skill work in a coached setting.',
    badge: 'High Intensity',
  },
  {
    name: 'Weight Loss Programs',
    description:
      'Structured fat-loss programs with training, nutrition guidance, and regular progress tracking.',
    badge: 'Fat Loss',
  },
  {
    name: 'Muscle Building Programs',
    description:
      'Hypertrophy-focused splits that target all major muscle groups with optimal volume and recovery.',
    badge: 'Hypertrophy',
  },
]

function Programs() {
  return (
    <section
      id="programs"
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
            Programs
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl"
          >
            Structured training built around your goals.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl text-sm text-slate-300 sm:text-[15px]"
          >
            Choose from focused strength, conditioning, and transformation programs designed by
            experienced coaches who understand real-world results.
          </motion.p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.article
              key={program.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="flex flex-col justify-between rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-white/0 p-4 text-sm text-slate-200 shadow-[0_18px_45px_rgba(0,0,0,0.7)]"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-400">
                  {program.badge}
                </p>
                <h3 className="mt-2 text-[15px] font-semibold text-slate-50">
                  {program.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {program.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs

