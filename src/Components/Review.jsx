import { useState, useEffect, useMemo } from 'react'
import { FaStar } from 'react-icons/fa6'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

function Review() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(0)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/reviews.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch reviews')
        return res.json()
      })
      .then((data) => {
        setReviews(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const itemsPerPage = 2
  const pageCount = Math.max(1, Math.ceil(reviews.length / itemsPerPage))

  const visibleReviews = useMemo(() => {
    return reviews.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
  }, [reviews, page])

  if (loading) return <p className="text-center py-16">Loading reviews...</p>
  if (error) return <p className="text-center py-16 text-red-500">{error}</p>

  return (
    <section className="py-16 px-8 text-center">
      <h2 className="text-2xl font-medium font-Poppins mb-10">— Customer Review —</h2>

      <div className="relative mx-auto flex max-w-full items-center justify-center gap-4">
        {/* Left arrow */}
        <button
          type="button"
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center text-slate-400 transition hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <HiChevronLeft className="h-6 w-6" />
        </button>

        <div className=" flex flex-wrap justify-center gap-6">
          {visibleReviews.map((r) => (
            <div
              key={r.id}
              className="bg-gray-100 rounded-xl p-8  md:max-w-md text-left flex gap-4"
            >
              <img
                src={r.image}
                alt={r.name}
                className="w-1/3 h-30 hidden md:block object-cover"
              />
              <div className="md:w-2/3">
                <h3 className="font-medium font-Poppins text-lg">{r.name}</h3>

                {/* Star rating */}
                <div className="flex gap-1 my-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < r.rating ? 'text-yellow-400' : 'text-gray-300'}
                      size={16}
                    />
                  ))}
                </div>

                <p className="text-gray-600 text-base text-sm mt-1 font-Poppins font-normal">{r.review}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          type="button"
          onClick={() => setPage((prev) => Math.min(prev + 1, pageCount - 1))}
          disabled={page === pageCount - 1}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center text-slate-400 transition hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <HiChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: pageCount }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setPage(index)}
            aria-label={`Go to page ${index + 1}`}
            className={`h-2 rounded-full transition-all ${
              page === index ? 'w-6 bg-slate-950' : 'w-2 bg-slate-300'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Review