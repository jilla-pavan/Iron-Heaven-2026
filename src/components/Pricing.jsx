import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Basic',
    price: '₹1,499',
    period: 'per month',
    highlight: 'Perfect for beginners building consistency.',
    features: ['Full gym access', 'Cardio + Strength zones', 'Locker room access', 'Standard support'],
  },
  {
    name: 'Pro',
    price: '₹2,499',
    period: 'per month',
    highlight: 'For lifters who want coaching and structure.',
    featured: true,
    features: [
      'Everything in Basic',
      'Weekly coach check-ins',
      'Customized workout split',
      'Form checks and progression',
    ],
  },
  {
    name: 'Elite',
    price: '₹3,999',
    period: 'per month',
    highlight: 'Best for serious transformations and athletes.',
    features: [
      'Everything in Pro',
      '3x personal training sessions / week',
      'Nutrition guidance',
      'Priority support & progress tracking',
    ],
  },
]

function Pricing() {
  return (
    <section
      id="pricing"
      className="border-b border-white/5 bg-[#050509] py-12 sm:py-14 scroll-mt-24 md:scroll-mt-28"
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
            Membership
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl"
          >
            Simple membership plans built around commitment.
          </motion.h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className={`flex flex-col justify-between rounded-2xl border bg-gradient-to-b p-5 text-sm text-slate-200 shadow-[0_22px_55px_rgba(0,0,0,0.85)] ${
                plan.featured
                  ? 'border-red-500/70 from-red-500/10 to-black/90'
                  : 'border-white/6 from-white/4 to-black/90'
              }`}
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-400">
                  {plan.name}
                </p>
                <div className="mt-3 flex items-baseline gap-1">
                  <p className="text-2xl font-bold text-slate-50">{plan.price}</p>
                  <p className="text-[11px] text-slate-400">{plan.period}</p>
                </div>
                <p className="mt-2 text-xs text-slate-300">{plan.highlight}</p>
                <ul className="mt-4 space-y-1.5 text-xs text-slate-200">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-[2px] h-1.5 w-1.5 rounded-full bg-red-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5">
                <a
                  href="#contact"
                  className={`block rounded-full px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide ${
                    plan.featured
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-soft-red'
                      : 'border border-white/15 text-slate-100 hover:border-red-500/80'
                  }`}
                >
                  Enquire now
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

