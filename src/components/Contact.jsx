import { motion } from 'framer-motion'

function Contact() {
  return (
    <section
      id="contact"
      className="bg-black py-12 sm:py-14 scroll-mt-24 md:scroll-mt-28"
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
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl"
          >
            Visit Iron Heaven Gym or book a trial.
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.1fr,1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="space-y-4 text-sm text-slate-200"
          >
            <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-black/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-400">
                Address
              </p>
              <p className="mt-2 text-sm text-slate-100">
                1st floor, Mirjalguda Main Rd, New Mirjalguda, Malkajgiri,
              </p>
              <p className="text-sm text-slate-100">Secunderabad, Telangana 500047</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-black/80 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-400">
                  Phone
                </p>
                <a
                  href="tel:+919440152470"
                  className="mt-2 block text-sm font-semibold text-slate-100"
                >
                  +91 94401 52470
                </a>
                <a
                  href="https://wa.me/919440152470"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center text-[11px] text-green-400 hover:text-green-300"
                >
                  WhatsApp us →
                </a>
              </div>
              <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-black/80 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-400">
                  Working Hours
                </p>
                <p className="mt-2 text-sm text-slate-100">5:00 AM – 10:00 PM</p>
                <p className="mt-1 text-[11px] text-slate-400">Open all 7 days</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/5">
              <iframe
                title="Iron Heaven Gym Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.507916667915!2d78.526!3d17.532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9c3b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sMirjalguda%20Main%20Rd%2C%20New%20Mirjalguda%2C%20Malkajgiri%2C%20Secunderabad%2C%20Telangana%20500047!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full border-0"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="flex flex-col rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-black/80 p-5 text-sm text-slate-200 shadow-[0_20px_55px_rgba(0,0,0,0.85)]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-400">
              Enquiry Form
            </p>
            <p className="mt-2 text-xs text-slate-300">
              Share your details and our team will reach out with membership options and trial
              session slots.
            </p>

            <form
              className="mt-4 space-y-3 text-xs"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="mb-1 block text-[11px] font-medium text-slate-200">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-xs text-slate-100 outline-none ring-red-500/40 placeholder:text-slate-500 focus:border-red-500/80 focus:ring"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-[11px] font-medium text-slate-200">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-xs text-slate-100 outline-none ring-red-500/40 placeholder:text-slate-500 focus:border-red-500/80 focus:ring"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[11px] font-medium text-slate-200">
                    Goal
                  </label>
                  <select
                    className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-xs text-slate-100 outline-none ring-red-500/40 focus:border-red-500/80 focus:ring"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your main goal
                    </option>
                    <option>Weight Loss</option>
                    <option>Muscle Gain</option>
                    <option>Strength & Performance</option>
                    <option>General Fitness</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us a bit about your current training and what you want to achieve."
                  className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-xs text-slate-100 outline-none ring-red-500/40 placeholder:text-slate-500 focus:border-red-500/80 focus:ring"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-red-500 to-red-600 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-white shadow-soft-red hover:brightness-110"
              >
                Submit enquiry
              </button>
              <a
                href="https://wa.me/919440152470"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-green-500/60 bg-black/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-green-400 hover:bg-green-500/10"
              >
                Chat on WhatsApp
              </a>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

