import { motion } from "framer-motion";
import gym1 from "../assets/Gym-Pic-1.jpeg";
import gym2 from "../assets/Gym-Pic-2.jpeg";
import gym3 from "../assets/Gym-Pic-3.jpeg";
import gym4 from "../assets/Gym-Pic-4.jpeg";
import gym5 from "../assets/Gym-Pic-5.jpeg";
import gym6 from "../assets/Gym-Pic-6.jpeg";
import gym7 from "../assets/Gym-Pic-7.jpeg";
import gym8 from "../assets/Gym-Pic-8.jpeg";
import gym9 from "../assets/Gym-Pic-9.jpeg";

const BEBAS = {
  fontFamily: "'Bebas Neue', sans-serif",
  letterSpacing: "0.03em",
};

const OSWALD = {
  fontFamily: "'Oswald', sans-serif",
};

const galleryImages = [gym1, gym2, gym3, gym4, gym5, gym6, gym7, gym8, gym9];

function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-black py-8 sm:py-12 border-t border-white/5"
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-32 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]"
      />

      {/* Top Gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-red-950/10 to-transparent" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex flex-col items-center gap-3 px-4 text-center"
      >
        <span
          className="inline-flex items-center gap-3"
          style={{
            ...OSWALD,
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#f87171",
          }}
        >
          <span className="h-px w-8 bg-red-500" />
          Gallery
          <span className="h-px w-8 bg-red-500" />
        </span>

        <h2
          className="text-4xl sm:text-5xl lg:text-6xl text-white"
          style={BEBAS}
        >
          Experience The <span className="text-red-500">Atmosphere</span>
        </h2>

        <p className="max-w-xl text-sm text-slate-500">
          Explore our training floor, premium equipment, strength zone, cardio
          section, and the community that pushes limits every day.
        </p>
      </motion.div>

      {/* Gallery */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              whileHover={{
                y: -8,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] break-inside-avoid backdrop-blur-sm"
            >
              {/* Image */}
              <img
                src={image}
                alt={`Gym Gallery ${index + 1}`}
                loading="lazy"
                className="w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Shine Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="
                    absolute
                    -left-[150%]
                    top-0
                    h-full
                    w-[40%]
                    rotate-12
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                    transition-all
                    duration-1000
                    group-hover:left-[150%]
                  "
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent transition-all duration-300 group-hover:border-red-500/40 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]" />

              {/* Content */}
              <div className="absolute bottom-5 left-5 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-lg text-white" style={OSWALD}>
                  Iron Heaven Gym
                </p>

                <p className="text-xs uppercase tracking-[0.25em] text-red-400">
                  Premium Training Space
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;