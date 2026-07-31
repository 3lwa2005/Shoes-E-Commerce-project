import { FaFacebook, FaInstagram } from 'react-icons/fa'

function Footer() {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Shop', href: '#shop' },
    { label: 'Category', href: '#category' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy', href: '#privacy' },
  ]

  return (
    <footer className="bg-black text-white py-16">
      <div className="mx-auto max-w-6xl px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold font-poppins">StepUp</h3>
            <p className="text-sm font-poppins font-normal text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-black hover:bg-white/90 transition"
                aria-label="Facebook"
              >
                <FaFacebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-black hover:bg-white/90 transition"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-sm font-medium">Subscribe for news letter</div>
            <form className="mx-auto flex w-full max-w-md items-center rounded-full bg-white px-1 py-1 text-black shadow-sm sm:max-w-none">
              <input
                type="email"
                placeholder="Enter Email..."
                className="flex-1 rounded-full bg-transparent px-5 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none"
              />
              <div className="mx-2 h-8 w-px bg-slate-300/70" />
              <button
                type="submit"
                className="rounded-full  px-6 py-3 text-sm font-semibold text-black hover:bg-gray-900 transition"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-medium">Quick Links</div>
            <ul className="space-y-3 text-sm text-white/70">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          www.stepup.com © all rights reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer