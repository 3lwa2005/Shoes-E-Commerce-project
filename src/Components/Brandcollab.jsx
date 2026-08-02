import ebayLogo from '../assets/brand/ebay.png'
import amazonLogo from '../assets/brand/amazon.png'

function Brandcollab() {
  const brandCollabData = [
    { id: 1, logo: ebayLogo, alt: 'eBay' },
    { id: 2, logo: amazonLogo, alt: 'Amazon' },
    { id: 3, label: 'AJIO', alt: 'AJIO' },
  ]

  return (
    <section className="bg-black border-y py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-5 px-6 sm:px-8">
        {brandCollabData.map((brand) => (
          <div
            key={brand.id}
            className="flex h-16 min-w-[160px] items-center justify-center rounded-full "
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