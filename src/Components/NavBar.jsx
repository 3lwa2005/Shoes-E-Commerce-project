import { HiSearch, HiOutlineShoppingCart, HiMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useState } from 'react'


function NavBar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
  const links = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Collection', href: '/collection' },
  { label: 'Customize', href: '/customize' },
  { label: 'Dashboard', href: '/admin' },
  ]

  return (
   <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-4">
      <div className="flex-1 flex justify-start font-extrabold font-Poppins text-2xl">StepUp</div>

        <div className="hidden md:flex justify-center gap-6 ">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              className="text-sm font-normal Font-poppins hover:text-gray-500 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex-1 flex justify-end flex-right gap-4 text-gray-700">
          <button type="button" aria-label="Search" className="hover:text-gray-500 transition-colors">
            <HiSearch className="w-5 h-5" />
          </button>
          <button type="button" aria-label="Cart" className="hover:text-gray-500 transition-colors">
            <HiOutlineShoppingCart className="w-5 h-5" />
          </button>

         <button
              type="button" aria-label="Menu"  onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden hover:text-gray-500 transition-colors">
              <HiMenu className="w-6 h-6" />
            </button>
        </div>
        {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-white shadow-lg flex flex-wrap justify-center gap-4 py-6 px-4">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium font-Poppins hover:text-gray-500 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default NavBar