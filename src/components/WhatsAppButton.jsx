import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WA_LINK = `https://wa.me/919440152470?text=${encodeURIComponent("Hi! I'd like to know more about Iron Heaven Gym, Malkajgiri.")}`

const POPPINS = { fontFamily: "'Poppins', sans-serif" }

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [visible, setVisible] = useState(false)

  // show button after slight delay on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(t)
  }, [])

  // auto-show tooltip after 3s, then hide
  useEffect(() => {
    if (!visible) return
    const show = setTimeout(() => setShowTooltip(true), 3000)
    const hide = setTimeout(() => setShowTooltip(false), 7000)
    return () => { clearTimeout(show); clearTimeout(hide) }
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 16, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 16, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-2 rounded-xl bg-[#1a1a1a] border border-white/10 px-4 py-2.5 shadow-xl"
              >
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                <p className="text-xs text-slate-200 whitespace-nowrap" style={POPPINS}>
                  Chat with us on WhatsApp
                </p>
                {/* tail */}
                <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 h-3 w-3 rotate-45 bg-[#1a1a1a] border-r border-t border-white/10" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            onHoverStart={() => setShowTooltip(true)}
            onHoverEnd={() => setShowTooltip(false)}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.93 }}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-2xl shadow-green-900/50"
            aria-label="Chat on WhatsApp"
          >
            {/* Ping ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />

            {/* WhatsApp SVG */}
            <svg
              viewBox="0 0 32 32"
              className="h-7 w-7 fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.002 2C8.268 2 2 8.268 2 16.002c0 2.49.65 4.83 1.787 6.86L2 30l7.338-1.762A13.94 13.94 0 0016.002 30C23.732 30 30 23.732 30 16.002 30 8.268 23.732 2 16.002 2zm0 25.453a11.41 11.41 0 01-5.812-1.588l-.416-.248-4.355 1.046 1.078-4.24-.272-.433A11.41 11.41 0 014.547 16c0-6.316 5.14-11.453 11.455-11.453S27.453 9.684 27.453 16c0 6.317-5.138 11.453-11.451 11.453zm6.28-8.574c-.344-.172-2.035-1.004-2.35-1.117-.315-.115-.545-.172-.773.172-.23.344-.887 1.117-1.088 1.347-.2.23-.4.258-.744.086-.344-.172-1.453-.536-2.768-1.707-1.023-.912-1.713-2.037-1.913-2.38-.2-.344-.022-.53.15-.7.154-.153.344-.4.516-.6.172-.2.23-.344.344-.573.115-.23.057-.43-.029-.602-.086-.172-.773-1.863-1.059-2.55-.28-.672-.563-.578-.773-.59l-.659-.01c-.23 0-.602.086-.916.43s-1.202 1.175-1.202 2.865c0 1.69 1.23 3.322 1.402 3.552.172.23 2.42 3.695 5.863 5.18.82.354 1.46.566 1.96.724.822.263 1.572.226 2.163.137.659-.098 2.035-.832 2.322-1.635.286-.803.286-1.49.2-1.635-.086-.143-.314-.23-.658-.4z" />
            </svg>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
