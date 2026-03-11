import { motion } from 'framer-motion'

const facilities = [
  {
    name: 'Cardio Zone',
    description: 'High‑end treadmills, bikes, rowers, and assault runners for endurance and conditioning.',
    image:
      'https://images.pexels.com/photos/7991664/pexels-photo-7991664.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'Strength Zone',
    description: 'Heavy-duty racks, platforms, barbells, and plate-loaded machines built for serious lifting.',
    image:
      'https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'Free Weights',
    description: 'Dumbbells, kettlebells, specialty bars, and cable stations for complete strength training.',
    image:
      'https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'Locker Room',
    description: 'Clean changing areas, secure lockers, and showers so you can train and head straight to work.',
    image:
      'https://images.pexels.com/photos/3837436/pexels-photo-3837436.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
]

function Facilities() {
  return (
    <section
      id="facilities"
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
            Facilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl"
          >
            A training floor built to move serious weight.
          </motion.h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {facilities.map((facility, index) => (
            <motion.article
              key={facility.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group flex overflow-hidden rounded-2xl border border-white/5 bg-black/50 shadow-[0_20px_55px_rgba(0,0,0,0.85)]"
            >
              <div className="relative hidden w-2/5 overflow-hidden sm:block">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-red-500/40" />
              </div>
              <div className="flex flex-1 flex-col justify-between p-4 text-sm text-slate-200">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-400">
                    {facility.name}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {facility.description}
                  </p>
                </div>
                <p className="mt-3 text-[11px] text-slate-500">
                  Curated layout for efficient training sessions—no wasted time moving between stations.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Facilities

