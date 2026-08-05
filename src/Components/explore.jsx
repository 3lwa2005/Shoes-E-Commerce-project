import { useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import shoeImage from '../assets/shoes explore.png'
import heroShoeImage from '../assets/shoes.png' // the shoe used in Hero.jsx

const slides = [
  {
    bg: '#f98a8f',
    content: (
      <div className="relative grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <div className="relative h-40 lg:h-full">
          <img
            src={shoeImage}
            alt="StepUp style"
            className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 -top-20 h-auto max-h-[450px] w-auto object-contain drop-shadow-2xl lg:left-0 lg:translate-x-0"
          />
        </div>

        <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left mt-0">
          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl">
            Are you ready
            <br />
            to lead the way
          </h2>
          <p className="mt-2 max-w-md text-sm text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
          <button className="mt-5 inline-flex bg-white px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-[#f84d63] shadow-lg shadow-white/20 transition hover:bg-white/90">
            Explore
          </button>

          <div className="mt-6 flex flex-wrap items-center gap-3 justify-center md:justify-start">
            {['images/shoesimage/shoe1.png', 'images/shoesimage/shoe2.png', 'images/shoesimage/shoe3.png'].map((thumb, i) => (
              <div key={i} className="rounded-2xl border border-white/30 bg-white/90 p-2 shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                <img
                  src={`${import.meta.env.BASE_URL}${thumb}`}
                  alt={`shoe-thumbnail-${i}`}
                  className="h-10 w-10 object-contain sm:h-14 sm:w-14"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    bg: '#6a0707',
    content: (
      <div className="relative flex h-full items-center justify-center">
        <img
          src={heroShoeImage}
          alt="Trendy StepUp Pro"
          className="max-h-[380px] w-auto object-contain drop-shadow-2xl"
        />
      </div>
    ),
  },
  {
    bg: '#111111',
    content: (
      <div className="relative flex h-full flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
          Find Your Sole Mate
          <br />
          With Us
        </h2>
        <button className="mt-6 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/90">
          Shop Now
        </button>
      </div>
    ),
  },
]

function Explore() {
  const [slideIndex, setSlideIndex] = useState(0)
  const slideCount = slides.length

  function goPrev() {
    setSlideIndex((prev) => (prev === 0 ? slideCount - 1 : prev - 1))
  }

  function goNext() {
    setSlideIndex((prev) => (prev === slideCount - 1 ? 0 : prev + 1))
  }

  return (
    <div className="justify-center  px-6 sm:px-8">
      <div className="relative w-full mx-auto mb-16 max-w-full md:max-w-screen-xl h-[420px] rounded-[16px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.15)]">

        {/* Arrows */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition hover:text-white"
        >
          <HiChevronLeft className="h-7 w-7" />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition hover:text-white"
        >
          <HiChevronRight className="h-7 w-7" />
        </button>

        {/* Pagination dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSlideIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                slideIndex === index ? 'w-6 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Sliding track */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{
            width: `${slideCount * 100}%`,
            transform: `translateX(-${slideIndex * (100 / slideCount)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <section
              key={index}
              className="relative h-full px-6 py-8 text-white sm:px-10 lg:px-14"
              style={{ width: `${100 / slideCount}%`, backgroundColor: slide.bg }}
            >
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden text-[100px] md:text-[300px] font-extrabold text-white/10 select-none">
                StepUp
              </span>
              {slide.content}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Explore