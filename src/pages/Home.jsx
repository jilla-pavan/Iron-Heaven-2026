import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Programs from '../components/Programs'
import Facilities from '../components/Facilities'
import Trainers from '../components/Trainers'
import Pricing from '../components/Pricing'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#050509] to-black text-slate-50">
      <Navbar />
      <main className="pt-24 md:pt-28">
        <Hero />
        <About />
        <Programs />
        <Facilities />
        <Trainers />
        <Pricing />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <footer className="border-t border-white/5 bg-black/60 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Iron Heaven Gym. All rights reserved.</p>
          <p className="text-[11px]">
            1st floor, Mirjalguda Main Rd, New Mirjalguda, Malkajgiri, Secunderabad, Telangana 500047
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home

