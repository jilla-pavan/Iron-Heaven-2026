import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'transformations', label: 'Transformations' },
  { id: 'contact', label: 'Contact' },
]

function scrollToSection(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id) => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-40 border-b border-white/5 transition-all ${
        scrolled ? 'bg-black/85 backdrop-blur-xl' : 'bg-black/70'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
        <button
          type="button"
          className="flex cursor-pointer items-center gap-2"
          onClick={() => handleNavClick('home')}
        >
          <img
            src="/images/iron-heaven-logo.png"
            alt="Iron Heaven Gym logo"
            className="h-7 w-auto object-contain drop-shadow-[0_0_12px_rgba(239,68,68,0.85)] sm:h-8"
          />
          <div className="leading-tight text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-100 sm:text-sm">
              Iron Heaven
            </p>
            <p className="text-[9px] font-medium uppercase tracking-[0.26em] text-red-400 sm:text-[10px]">
              Premium Strength Club
            </p>
          </div>
        </button>

        <div className="hidden items-center gap-8 text-xs font-medium text-slate-200 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className="group relative py-1 tracking-wide text-slate-300 transition hover:text-white"
            >
              <span>{item.label}</span>
              <span className="absolute inset-x-0 -bottom-1 mx-auto h-[2px] w-0 rounded-full bg-gradient-to-r from-red-500 to-red-600 transition-all group-hover:w-full" />
            </button>
          ))}
          <a
            href="tel:+919440152470"
            className="rounded-full bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-white shadow-soft-red hover:brightness-110"
          >
            Call Now
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="relative z-50 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/80 text-slate-100 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1">
            <span
              className={`block h-[2px] w-4 rounded-full bg-white transition ${
                open ? 'translate-y-[5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-4 rounded-full bg-white transition ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-4 rounded-full bg-white transition ${
                open ? '-translate-y-[5px] -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="border-t border-white/5 bg-black/95 px-4 pb-4 pt-2 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="rounded-md px-2 py-2 text-left text-slate-200 hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+919440152470"
              className="mt-1 rounded-full bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-white shadow-soft-red"
            >
              Call Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Navbar

