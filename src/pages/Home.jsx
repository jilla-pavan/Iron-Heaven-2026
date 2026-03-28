import Hero from '../components/Hero'
import About from '../components/About'
import Pricing from '../components/Pricing'
import Transformations from '../components/Transformations'
import Contact from '../components/Contact'
import WhatsAppButton from '../components/WhatsAppButton'
import CallButton from '../components/CallButton'
import AnnouncementBar from '../components/AnnouncementBar'

function Home() {
  return (
    <div className="min-h-screen bg-black text-slate-50 antialiased">
      <AnnouncementBar />
      <div className="h-11" />
      <main>
        <Hero />
        <Pricing />
        <About />
        <Transformations />
        <Contact />
      </main>
      <WhatsAppButton />
      <CallButton />
      <footer className="border-t border-white/8 bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 flex flex-col items-center gap-6">

          {/* Connect label */}
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#f87171' }}>
            Connect
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer"
              className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-white/8 bg-white/3 text-slate-500 hover:text-white hover:border-white/20 transition-all duration-200"
              aria-label="Instagram">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* X / Twitter */}
            <a href="https://twitter.com" target="_blank" rel="noreferrer"
              className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-white/8 bg-white/3 text-slate-500 hover:text-white hover:border-white/20 transition-all duration-200"
              aria-label="X / Twitter">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noreferrer"
              className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-white/8 bg-white/3 text-slate-500 hover:text-white hover:border-white/20 transition-all duration-200"
              aria-label="YouTube">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* Google */}
            <a href="https://maps.google.com" target="_blank" rel="noreferrer"
              className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-white/8 bg-white/3 text-slate-500 hover:text-white hover:border-white/20 transition-all duration-200"
              aria-label="Google Reviews">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
              </svg>
            </a>
          </div>


          {/* Divider */}
          <div className="h-px w-full bg-white/5" />

          {/* Copyright */}
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#475569' }}>
            © {new Date().getFullYear()} Iron Heaven Gym. All Rights Reserved.
          </p>

        </div>
      </footer>
    </div>
  )
}

export default Home

