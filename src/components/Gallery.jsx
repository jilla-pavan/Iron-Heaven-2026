import { motion } from 'framer-motion'

const galleryImages = [
  'https://images.pexels.com/photos/7991653/pexels-photo-7991653.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/1552102/pexels-photo-1552102.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/4720294/pexels-photo-4720294.jpeg?auto=compress&cs=tinysrgb&w=1600',
]

function Gallery() {
  return (
    <section
      id="gallery"
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
            Gallery
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl"
          >
            Inside Iron Heaven Gym.
          </motion.h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {galleryImages.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5"
            >
              <img
                src={src}
                alt="Iron Heaven Gym interior and training"
                className="h-40 w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-110 sm:h-44"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

