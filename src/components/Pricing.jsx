import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BEBAS = { fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.03em' }
const OSWALD = { fontFamily: "'Oswald', sans-serif" }
const POPPINS = { fontFamily: "'Poppins', sans-serif" }

const INDIA_CATEGORIES = [
  {
    id: 'membership', label: 'Membership',
    plans: [
      { name: '1 Month',   price: '₹1,500' },
      { name: '3 Months',  price: '₹4,500', badge: 'Popular' },
      { name: '6 Months',  price: '₹7,200',  original: '₹9,000',  badge: '20% OFF', savings: 'Save ₹1,800' },
      { name: '12 Months', price: '₹14,400', original: '₹18,000', badge: 'Best Value', savings: 'Save ₹3,600' },
    ],
  },
  {
    id: 'personal', label: 'Personal Training',
    plans: [
      { name: '6 Months',  price: '₹12,500' },
      { name: '8 Months',  price: '₹16,500' },
      { name: '12 Months', price: '₹25,000', badge: 'Best Value' },
    ],
  },
  {
    id: 'weight', label: 'Weight Programs',
    plans: [
      { name: 'Weight Loss', price: '₹4,000', sub: 'per month' },
      { name: 'Weight Gain', price: '₹3,500', sub: 'per month' },
    ],
  },
  {
    id: 'online', label: 'Online Coaching',
    plans: [
      { name: 'Workout Plan',     price: '₹1,500', sub: 'per month' },
      { name: 'Workout + Diet',   price: '₹2,500', sub: 'per month' },
      { name: 'Premium Coaching', price: '₹4,000', sub: 'per month', badge: 'Popular' },
    ],
  },
  {
    id: 'offline', label: 'Offline Training',
    plans: [
      { name: 'Floor Trainer', price: '₹2,000', sub: 'per month' },
      { name: 'Semi-Personal', price: '₹3,500', sub: 'per month' },
    ],
  },
  {
    id: 'strength', label: 'Strength & Conditioning',
    plans: [
      { name: 'Strength Training', price: '₹5,000', sub: 'per month' },
      { name: 'Athlete Training',  price: '₹6,000', sub: 'per month', badge: 'Elite' },
    ],
  },
  {
    id: 'classes', label: 'Fitness Classes',
    plans: [
      { name: 'Zumba',    price: '₹2,000', sub: 'per month' },
      { name: 'HIIT',     price: '₹2,500', sub: 'per month' },
      { name: 'Aerobics', price: '₹2,000', sub: 'per month' },
    ],
  },
  {
    id: 'special', label: 'Special Programs',
    plans: [
      { name: 'Body Transformation', price: '₹12,000', sub: '12 Weeks' },
      { name: 'Summer Shred',        price: '₹5,000' },
      { name: 'Wedding Fitness',     price: '₹8,000', badge: 'Popular' },
    ],
  },
  {
    id: 'diet', label: 'Diet & Nutrition',
    plans: [
      { name: 'Basic Diet',         price: '₹1,000' },
      { name: 'Custom Diet',        price: '₹2,000' },
      { name: 'Nutrition Coaching', price: '₹3,500', badge: 'Best Value' },
    ],
  },
]

const INTL_CATEGORIES = [
  {
    id: 'online', label: 'Online Coaching',
    plans: [
      { name: 'Workout Plan',     price: '$20', sub: 'per month' },
      { name: 'Workout + Diet',   price: '$30', sub: 'per month' },
      { name: 'Premium Coaching', price: '$50', sub: 'per month', badge: 'Popular' },
    ],
  },
  {
    id: 'weight', label: 'Weight Programs',
    plans: [
      { name: 'Weight Loss', price: '$48', sub: 'per month' },
      { name: 'Weight Gain', price: '$42', sub: 'per month' },
    ],
  },
  {
    id: 'diet', label: 'Diet & Nutrition',
    plans: [
      { name: 'Basic Diet',         price: '$15' },
      { name: 'Custom Diet',        price: '$25' },
      { name: 'Nutrition Coaching', price: '$45', badge: 'Best Value' },
    ],
  },
  {
    id: 'special', label: 'Special Programs',
    plans: [
      { name: 'Body Transformation', price: '$149', sub: '12 Weeks' },
      { name: 'Summer Shred',        price: '$60' },
      { name: 'Wedding Fitness',     price: '$99', badge: 'Popular' },
    ],
  },
]

const isHighlighted = (badge) =>
  badge === 'Best Value' || badge === 'Popular' || badge === 'Elite'

function PlanCard({ plan, i }) {
  const highlighted = isHighlighted(plan.badge)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, delay: i * 0.07 }}
      className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-200 ${
        highlighted
          ? 'border border-red-500/35 bg-linear-to-b from-red-950/35 to-black shadow-xl shadow-red-900/20 scale-[1.03]'
          : 'border border-white/8 bg-white/3 hover:border-white/15 hover:bg-white/5'
      }`}
    >
      {/* Top accent */}
      {highlighted && <div className="h-[2px] w-full bg-red-500" />}

      <div className="flex flex-col flex-1 p-6 pt-5">

        {/* Badge */}
        {plan.badge && (
          <span
            className="self-start mb-4 rounded-md bg-red-600/20 border border-red-500/30 px-2.5 py-0.5 text-[10px] text-red-400 uppercase tracking-widest"
            style={OSWALD}
          >
            {plan.badge}
          </span>
        )}

        {/* Plan name */}
        <p
          className="text-[13px] font-semibold uppercase tracking-wider text-slate-400"
          style={OSWALD}
        >
          {plan.name}
        </p>

        {/* Price */}
        <div className="mt-2">
          {plan.original && (
            <p className="text-xs text-slate-700 line-through mb-0.5" style={POPPINS}>
              {plan.original}
            </p>
          )}
          <p
            className={`text-[2.8rem] sm:text-[3.4rem] leading-none ${highlighted ? 'text-red-400' : 'text-white'}`}
            style={BEBAS}
          >
            {plan.price}
          </p>
          {plan.sub && (
            <p className="mt-1 text-xs text-slate-600" style={POPPINS}>{plan.sub}</p>
          )}
          {plan.savings && (
            <p className="mt-1.5 text-[11px] font-medium text-red-400/80" style={POPPINS}>
              {plan.savings}
            </p>
          )}
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-white/8" />

        {/* CTA */}
        <a
          href={`https://wa.me/919440152470?text=${encodeURIComponent(`Hi! I'm interested in the ${plan.name} plan at Iron Heaven Gym. Please share more details.`)}`}
          target="_blank"
          rel="noreferrer"
          className={`mt-auto block rounded-xl py-2.5 text-center text-xs font-bold uppercase tracking-[0.14em] transition-all duration-200 ${
            highlighted
              ? 'bg-red-600 text-white hover:bg-red-500'
              : 'border border-white/10 text-slate-500 hover:border-red-500/30 hover:text-white'
          }`}
          style={OSWALD}
        >
          Enquire Now
        </a>
      </div>
    </motion.div>
  )
}

function Pricing() {
  const [country, setCountry] = useState('india')
  const [active, setActive] = useState('membership')
  const tabsRef = useRef(null)

  const categories = country === 'india' ? INDIA_CATEGORIES : INTL_CATEGORIES
  const current = categories.find((c) => c.id === active) ?? categories[0]

  const cols =
    current.plans.length <= 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto'
    : current.plans.length === 3 ? 'grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto'
    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'

  function handleCountrySwitch(next) {
    setCountry(next)
    const nextCats = next === 'india' ? INDIA_CATEGORIES : INTL_CATEGORIES
    if (!nextCats.find((c) => c.id === active)) setActive(nextCats[0].id)
  }

  return (
    <section id="pricing" className="relative bg-black py-16 sm:py-24 scroll-mt-24 overflow-hidden border-t border-white/5">

      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-linear-to-b from-red-950/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col items-center text-center gap-4"
        >
          <span
            className="inline-flex items-center gap-3"
            style={{ ...OSWALD, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#f87171' }}
          >
            <span className="h-px w-8 bg-red-500" />
            Membership Plans
            <span className="h-px w-8 bg-red-500" />
          </span>

          <h2 className="text-4xl text-white sm:text-5xl lg:text-6xl" style={BEBAS}>
            Simple Pricing. <span className="text-red-500">Serious</span> Results.
          </h2>

          {/* Country toggle */}
          <div className="mt-1 flex items-center gap-3">
            <span
              className="text-[10px] text-slate-700 uppercase tracking-widest"
              style={OSWALD}
            >
              Location
            </span>
            <div className="inline-flex items-center rounded-xl border border-white/8 bg-white/3 p-1 gap-0.5">
              {[
                { id: 'india',         label: '🇮🇳  India',        currency: '₹' },
                { id: 'international', label: '🌐  International', currency: '$' },
              ].map((opt) => {
                const isActive = country === opt.id
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleCountrySwitch(opt.id)}
                    className={`flex items-center gap-1.5 rounded-lg px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'bg-red-600 text-white shadow-md shadow-red-900/30'
                        : 'text-slate-600 hover:text-slate-300'
                    }`}
                    style={OSWALD}
                  >
                    {opt.label}
                    <span className={`text-[10px] font-bold ${isActive ? 'text-red-200' : 'text-slate-700'}`}>
                      {opt.currency}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Category tabs */}
        <div
          ref={tabsRef}
          className="mb-10 flex gap-2 overflow-x-auto pb-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-2 mx-auto flex-wrap justify-center">
            <AnimatePresence mode="popLayout">
              {categories.map((cat) => {
                const isActive = current.id === cat.id
                return (
                  <motion.button
                    key={cat.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.18 }}
                    onClick={() => setActive(cat.id)}
                    className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-200 ${
                      isActive
                        ? 'bg-red-600 text-white shadow-md shadow-red-900/30'
                        : 'border border-white/8 bg-white/3 text-slate-500 hover:text-white hover:border-white/20'
                    }`}
                    style={OSWALD}
                  >
                    {cat.label}
                  </motion.button>
                )
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${country}-${current.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className={`grid gap-5 ${cols}`}
          >
            {current.plans.map((plan, i) => (
              <PlanCard key={plan.name} plan={plan} i={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <div className="h-px w-24 bg-linear-to-r from-transparent via-white/8 to-transparent" />
          <p className="mt-2 text-[11px] text-slate-700 text-center" style={POPPINS}>
            {country === 'india'
              ? 'No hidden fees · No contracts · Call us for custom packages'
              : 'All plans online · Pay via card or PayPal · Cancel anytime'}
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Pricing
