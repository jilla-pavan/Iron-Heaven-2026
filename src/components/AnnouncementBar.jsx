const OSWALD = { fontFamily: "'Oswald', sans-serif" }

const items = [
  '20% OFF on 6 & 12 Month Memberships',
  'Limited Seats — Book Before They Fill Up',
  'Free Trial Session for New Members',
  '20% OFF on 6 & 12 Month Memberships',
  'Limited Seats — Book Before They Fill Up',
  'Free Trial Session for New Members',
]

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50 h-11 overflow-hidden flex items-center bg-black border-b border-white/8">

      {/* Scrolling track */}
      <div
        className="flex whitespace-nowrap w-max"
        style={{ animation: 'announcementScroll 28s linear infinite' }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center text-sm font-semibold uppercase tracking-widest px-8"
            style={OSWALD}
          >
            <span className="text-red-500 mr-3">—</span>
            <span className="text-slate-400">{item}</span>
          </span>
        ))}
      </div>

      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-black to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-black to-transparent" />

      <style>{`
        @keyframes announcementScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
