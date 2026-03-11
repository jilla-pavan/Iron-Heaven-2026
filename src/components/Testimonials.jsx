import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sandeep R.',
    role: 'Software Engineer',
    quote:
      'Iron Heaven changed the way I train. The coaches actually watch your form, push you when needed, and the atmosphere keeps you focused.',
  },
  {
    name: 'Priya K.',
    role: 'Entrepreneur',
    quote:
      'I joined for weight loss and stayed for strength. The programs are structured, and I finally feel confident lifting heavy weights.',
  },
  {
    name: 'Amit Sharma',
    role: 'Amateur Powerlifter',
    quote:
      'The equipment, coaching and vibe are exactly what you want if you love strength training. Serious lifters will feel at home here.',
  },
]

function Testimonials() {
  return (
    <section className="border-b border-white/5 bg-[#050509] py-12 sm:py-14 scroll-mt-24 md:scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex flex-col gap-3 sm:items-center sm:text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl"
          >
            Members who call Iron Heaven their training home.
          </motion.h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="flex h-full flex-col justify-between rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-black/80 p-5 text-sm text-slate-200 shadow-[0_18px_45px_rgba(0,0,0,0.8)]"
            >
              <p className="text-xs leading-relaxed text-slate-200">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4">
                <p className="text-[13px] font-semibold text-slate-50">{t.name}</p>
                <p className="text-[11px] text-slate-400">{t.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

