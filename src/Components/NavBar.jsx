import { HiSearch, HiOutlineShoppingCart, HiMenu } from 'react-icons/hi'
function NavBar() {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Shop', href: '#shop' },
    { label: 'Collection', href: '#collection' },
    { label: 'Customize', href: '#customize' },
    { label: 'Dashboard', href: '#dashboard' },
  ]

  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <div className="font-extrabold font-Poppins text-xl">StepUp</div>

      <div className="flex items-center gap-8">
        <div className="flex gap-6">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-normal hover:text-gray-500 transition-colors"
            >
              {label}
            </a>
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