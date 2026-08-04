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
    <nav className="container absolute top-0 z-20 flex items-center  px-8 py-4">
      <div className="flex-1 flex justify-start font-extrabold font-Poppins text-2xl">StepUp</div>

        <div className="flex justify-center gap-6 ">
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
          <button type="button" aria-label="Menu" className="hover:text-gray-500 transition-colors">
            <HiMenu className="w-5 h-5" />
          </button>
        </div>
    </nav>
  )
}

export default NavBar