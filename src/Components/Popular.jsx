import { useEffect, useMemo, useState } from 'react'
import { HiChevronLeft, HiChevronRight, HiArrowUpRight } from 'react-icons/hi2'

function Popular() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [page, setPage] = useState(0)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/Product.json`)
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
    <section className="py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:px-8 lg:flex-row lg:items-center">
        <div className="lg:w-1/3">
          <div className="mb-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-slate-600">
            <span className="block h-px w-10 bg-slate-300" />
            Our trending shoe
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Most Popular Products
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <button className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800">
            Explore
          </button>
        </div>

        <div className="lg:w-2/3">
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                type="button"
                onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                disabled={page === 0}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <HiChevronLeft className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {visibleProducts.map((product) => (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1"
                >
                  <div className="mb-6 h-48 overflow-hidden rounded-[24px] bg-white p-4 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-slate-950">{product.name}</h3>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xl font-bold text-slate-950">₹ {product.price}</span>
                      <button className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-white transition hover:bg-slate-800">
                        <HiArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
              <button
                type="button"
                onClick={() => setPage((prev) => Math.min(prev + 1, pageCount - 1))}
                disabled={page === pageCount - 1}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <HiChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setPage(index)}
                className={`h-3 w-3 rounded-full transition ${
                  page === index ? 'bg-slate-950' : 'bg-slate-300'
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
