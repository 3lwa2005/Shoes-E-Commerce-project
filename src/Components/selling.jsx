import { useEffect, useMemo, useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import { HiArrowUpRight } from 'react-icons/hi2'
const categories = ['men', 'women', 'boy','girl']

function Selling() {
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState('men')
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://6a722b254d741b02b1f7641e.mockapi.io/product')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load products')
        return res.json()
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
  }, [])

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => product.category === activeCategory)
      .slice(0, 6)
  }, [products, activeCategory])

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
      <div className="text-center">
        <div className=" mb-6 flex items-center justify-center gap-5 text-xl uppercase tracking-[0.25em] text-black">
          <span className="block h-px w-16 bg-black" />
          Best Selling
          <span className="block h-px w-16 bg-black" />
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-2xl border px-6 py-3 text-sm font-semibold transition ${
                activeCategory === category
                  ? 'border-black bg-black text-white'
                  : 'border-slate-300 bg-white text-slate-900 hover:border-slate-900'
              }`}
            >
              {category === 'men' ? 'Men' : category === 'women' ? 'Women' : category === 'boy' ? 'Boy' :  category === 'girl' ? 'Girl' : ''}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="mb-6 text-center text-sm text-rose-500">{error}</p>}

      <div className="grid gap-6 md:grid-cols-3">
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_15px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1"
          >
            <div className="absolute left-6 top-6 rounded-full bg-black px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white shadow-xl">
              New
            </div>
            <button className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition group-hover:bg-slate-950 group-hover:text-white">
              <FiHeart className="h-5 w-5" />
            </button>

            <div className="mb-6 overflow-hidden rounded-[28px] bg-white p-6">
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto h-56 w-full object-contain"
              />
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-slate-950">{product.name}</h3>
              <div className="mt-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-base font-bold text-slate-950">
                  <span>₹ {product.price}</span>
                  <span className="text-sm font-normal text-slate-400 line-through">₹ {product.oldPrice}</span>
                </div>
                <button className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:bg-slate-800">
                  <HiArrowUpRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Selling
