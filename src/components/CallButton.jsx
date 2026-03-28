import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const POPPINS = { fontFamily: "'Poppins', sans-serif" }

export default function CallButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!visible) return
    const show = setTimeout(() => setShowTooltip(true), 4000)
    const hide = setTimeout(() => setShowTooltip(false), 8000)
    return () => { clearTimeout(show); clearTimeout(hide) }
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: -16, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -16, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                className="relative flex items-center gap-2 rounded-xl bg-[#1a1a1a] border border-white/10 px-4 py-2.5 shadow-xl"
              >
                <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse shrink-0" />
                <p className="text-xs text-slate-200 whitespace-nowrap" style={POPPINS}>
                  Call us now
                </p>
                {/* tail */}
                <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 h-3 w-3 rotate-45 bg-[#1a1a1a] border-l border-b border-white/10" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href="tel:+919440152470"
            onHoverStart={() => setShowTooltip(true)}
            onHoverEnd={() => setShowTooltip(false)}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.93 }}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-2xl shadow-red-900/50"
            aria-label="Call us"
          >
            {/* Ping ring */}
            <span className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-25" />

            {/* Phone SVG */}
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
            </svg>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
