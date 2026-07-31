import { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa6'

function Review() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/data/reviews.json')
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

  if (loading) return <p className="text-center py-16">Loading reviews...</p>
  if (error) return <p className="text-center py-16 text-red-500">{error}</p>

  return (
    <section className="py-16 px-8 text-center">
      <h2 className="text-2xl font-bold font-Poppins mb-10">— Customer Review —</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {reviews.map((r) => (
          <div
  key={r.id}
  className="bg-gray-100 rounded-xl p-8 max-w-md text-left flex gap-4"
>
  <img
    src={r.image}
    alt={r.name}
    className="w-16 h-16 rounded-full object-cover"
  />
  <div>
    <h3 className="font-semibold text-lg">{r.name}</h3>

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

    <p className="text-gray-600 text-base mt-1">{r.review}</p>
  </div>
</div>
        ))}
      </div>
    </section>
  )
}

export default Review