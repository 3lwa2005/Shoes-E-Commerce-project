import { HiSearch, HiOutlineShoppingCart, HiMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'


function NavBar() {
  const links = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Collection', href: '/collection' },
  { label: 'Customize', href: '/customize' },
  { label: 'Dashboard', href: '/admin' },
  ]

  return (
    <nav className="flex items-center justify-between bg- px-8 py-4">
      <div className="font-extrabold font-Poppins text-xl">StepUp</div>

      <div className="flex items-center gap-8">
        <div className="flex gap-6">
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

        <div className="flex items-center gap-4 text-gray-700">
          <button type="button" aria-label="Search" className="hover:text-gray-500 transition-colors">
            <HiSearch className="w-5 h-5" />
          </button>
          <button type="button" aria-label="Cart" className="hover:text-gray-500 transition-colors">
            <HiOutlineShoppingCart className="w-5 h-5" />
          </button>
          <button type="button" aria-label="Menu" className="hover:text-gray-500 transition-colors">
            <HiMenu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar