import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'

const BEBAS = { fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.03em' }
const OSWALD = { fontFamily: "'Oswald', sans-serif" }
const POPPINS = { fontFamily: "'Poppins', sans-serif" }

const WA_NUMBER = '919440152470'
const WA_ENQUIRY = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I'd like to enquire about membership at Iron Heaven Gym, Malkajgiri. Please share more details.")}`
const WA_TRIAL   = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I'd like to book a free trial session at Iron Heaven Gym, Malkajgiri.")}`
const WA_PHONE   = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I found your number and would like to know more about Iron Heaven Gym.")}`

function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate bg-[#0a0a0f] py-16 sm:py-20 scroll-mt-24 overflow-hidden border-t border-white/5"
    >
      {/* Background image */}
      <img
        src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
            Contact Us
            <span className="h-px w-8 bg-red-500" />
          </span>
          <h2 className="text-4xl text-white sm:text-5xl lg:text-6xl" style={BEBAS}>
            Visit Us or <span className="text-red-500">Book</span> a Trial.
          </h2>
        </motion.div>

        {/* Info row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4"
        >
          {/* Address */}
          <div className="rounded-2xl border border-white/8 bg-white/3 p-5 flex gap-3 items-start">
            <MapPin size={15} className="text-red-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-red-400 mb-1.5" style={OSWALD}>
                Address
              </p>
              <p className="text-base text-slate-300 leading-relaxed" style={POPPINS}>
                1st floor, Mirjalguda Main Rd,<br />
                New Mirjalguda, Malkajgiri,<br />
                Secunderabad, Telangana 500047
              </p>
            </div>
          </div>

          {/* Phone → WhatsApp */}
          <a
            href={WA_PHONE}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/8 bg-white/3 p-5 flex gap-3 items-start hover:border-white/20 hover:bg-white/5 transition-all duration-200"
          >
            <Phone size={15} className="text-red-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-red-400 mb-1.5" style={OSWALD}>
                Phone
              </p>
              <p className="text-base font-semibold text-slate-200" style={POPPINS}>
                +91 94401 52470
              </p>
              <p className="text-[11px] text-green-400 mt-1" style={POPPINS}>Tap to WhatsApp →</p>
            </div>
          </a>

          {/* Hours */}
          <div className="rounded-2xl border border-white/8 bg-white/3 p-5 flex gap-3 items-start">
            <Clock size={15} className="text-red-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-red-400 mb-1.5" style={OSWALD}>
                Working Hours
              </p>
              <p className="text-base font-semibold text-slate-200" style={POPPINS}>5:00 AM – 10:00 PM</p>
              <p className="text-xs text-slate-600 mt-1" style={POPPINS}>Open all 7 days · No holidays</p>
            </div>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4"
        >
          <a
            href={WA_TRIAL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-4 py-3.5 sm:px-6 sm:py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-red-500 transition-all duration-200"
            style={OSWALD}
          >
            Book a Free Trial
          </a>
          <a
            href={WA_ENQUIRY}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/3 px-4 py-3.5 sm:px-6 sm:py-4 text-sm font-bold uppercase tracking-widest text-slate-300 hover:border-white/20 hover:text-white transition-all duration-200"
            style={OSWALD}
          >
            Enquire on WhatsApp
          </a>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="overflow-hidden rounded-2xl border border-white/8"
        >
          <iframe
            title="Iron Heaven Gym Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.507916667915!2d78.526!3d17.532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9c3b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sMirjalguda%20Main%20Rd%2C%20New%20Mirjalguda%2C%20Malkajgiri%2C%20Secunderabad%2C%20Telangana%20500047!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-56 sm:h-72 w-full border-0"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default Contact
