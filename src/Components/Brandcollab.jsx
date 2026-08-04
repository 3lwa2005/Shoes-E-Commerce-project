import ebayLogo from '../assets/brand/ebay.png'
import amazonLogo from '../assets/brand/amazon.png'

function Brandcollab() {
  const brandCollabData = [
    { id: 1, logo: ebayLogo, alt: 'eBay' },
    { id: 2, logo: amazonLogo, alt: 'Amazon' },
    { id: 3, label: 'AJIO', alt: 'AJIO' },
    { id: 4, logo: ebayLogo, alt: 'eBay' },
    { id: 5, logo: amazonLogo, alt: 'Amazon' },
    { id: 6, label: 'AJIO', alt: 'AJIO' },
  ]

  return (
    <section className="bg-black h-32 overflow-hidden border-y ">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 sm:px-8">
        {brandCollabData.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center justify-center"
          >
            {brand.logo ? (
              <img src={brand.logo} alt={brand.alt} className="h-28 w-auto object-contain" />
            ) : (
              <span className="text-3xl font-semibold uppercase text-white">
                {brand.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Brandcollab;