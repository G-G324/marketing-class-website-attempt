import { Outlet, NavLink } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="font-extrabold tracking-tight text-xl">GO FIGURE MORE</a>
          <nav className="flex gap-4 text-sm">
            <NavLink to="/shop" className={({isActive}) => isActive ? 'font-semibold' : ''}>Shop</NavLink>
            <NavLink to="/lookbook">Lookbook</NavLink>
            <NavLink to="/movement">The Movement</NavLink>
            <NavLink to="/journal">Journal</NavLink>
            <NavLink to="/b2b">B2B Wholesale</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t py-10 text-sm text-neutral-600">
        <div className="max-w-7xl mx-auto px-4 grid gap-6 md:grid-cols-4">
          <div>
            <div className="font-bold mb-2">Go Figure More</div>
            <p>Streetwise. Minimal. Expressive.</p>
          </div>
          <div>
            <div className="font-bold mb-2">Follow</div>
            <ul className="space-y-1">
              <li><a className="hover:underline" href="https://www.instagram.com/gofiguremore" target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Help</div>
            <ul className="space-y-1">
              <li>Shipping & Returns</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Newsletter</div>
            <form onSubmit={(e)=>e.preventDefault()} className="flex gap-2">
              <input className="border px-3 py-2 flex-1" placeholder="Email address" />
              <button className="border px-3 py-2">Join</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  )
}
