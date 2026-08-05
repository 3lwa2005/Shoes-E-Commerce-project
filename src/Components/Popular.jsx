import { useEffect, useMemo, useState } from 'react'
import { HiChevronLeft, HiChevronRight, HiArrowUpRight } from 'react-icons/hi2'

function Popular() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [page, setPage] = useState(0)

  useEffect(() => {
    fetch('https://6a722b254d741b02b1f7641e.mockapi.io/product')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch popular products')
        return res.json()
      })
      .then((data) => {
        setProducts(data)
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  const topSix = useMemo(() => {
    return products
      .slice()
      .sort((a, b) => b.timesSold - a.timesSold)
      .slice(0, 6)
  }, [products])

  const itemsPerPage = 3
  const pageCount = Math.max(1, Math.ceil(topSix.length / itemsPerPage))
  const visibleProducts = topSix.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)

  return (
    <section className="container-fluid py-16 ">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:px-8 lg:flex-row lg:items-center">
        <div className="lg:w-1/3">
          <div className="mb-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] font-poppins font-medium text-black">
            <span className="block h-px w-10 bg-black" />
            Our trending shoe
          </div>
          <h2 className="text-4xl font-poppins font-medium text-black sm:text-5xl">
            Most Popular Products
          </h2>
          <p className="mt-4 max-w-xl text-base font-poppins font-medium text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="mt-8 inline-flex items-center justify-center bg-black px-8 py-4 text-lg font-medium font-poppins text-white shadow-lg  transition hover:bg-slate-800">
            Explore
          </button>
        </div>

        <div className="lg:w-2/3">
        <div className="relative overflow-hidden p-6">
          <div className="absolute inset-y-0 -left-2 flex items-center">
            <button
              type="button"
              onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
              disabled={page === 0}
              className="inline-flex h-10 w-10 items-center justify-center text-slate-400 transition hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <HiChevronLeft className="h-6 w-6" />
            </button>
          </div>

          <div className="grid gap-5 md:grid-cols-3 px-6">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#D9D9D926] p-4 transition hover:-translate-y-1"
              >
                <div className="mb-4 h-30 overflow-hidden rounded-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-medium text-slate-800">{product.name}</h3>

                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-slate-950 whitespace-nowrap">
                      ₹ {product.price}
                    </span>
                    <button className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white transition hover:bg-slate-800">
                      <HiArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute inset-y-0 -right-2 flex items-center">
            <button
              type="button"
              onClick={() => setPage((prev) => Math.min(prev + 1, pageCount - 1))}
              disabled={page === pageCount - 1}
              className="inline-flex h-10 w-10 items-center justify-center text-slate-400 transition hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <HiChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setPage(index)}
              className={`h-2 rounded-full transition-all ${
                page === index ? 'w-6 bg-slate-950' : 'w-2 bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
      </div>

      {error && <p className="mt-6 text-center text-sm text-rose-500">{error}</p>}
    </section>
  )
}

export default Popular
