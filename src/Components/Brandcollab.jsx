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
    <section className="bg-black border-y py-4">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-5 sm:px-8">
        {brandCollabData.map((brand) => (
          <div
            key={brand.id}
            className="flex h-12 min-w-[160px] items-center justify-center "
          >
            {brand.logo ? (
              <img src={brand.logo} alt={brand.alt} className="h-20 object-contain" />
            ) : (
              <span className="text-2xl font-semibold uppercase text-white">
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