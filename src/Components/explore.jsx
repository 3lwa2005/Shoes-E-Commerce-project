import shoeImage from '../assets/shoes explore.png'


function Explore() {
  return (
   <div className="justify-center px-6 sm:px-8">
      <section className="w-full mx-auto relative mb-16 rounded-[16px] bg-[#f98a8f] px-6 py-8 text-white shadow-[0_40px_80px_rgba(249,138,143,0.25)] sm:px-10 lg:px-14">

        <span className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden text-[400px] font-extrabold text-white/10 select-none">
          StepUp
        </span>

        <div className="relative grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          {/* Image column - now just a positioning anchor, image is absolute */}
          <div className="relative h-40 lg:h-full">
            <img
              src={shoeImage}
              alt="StepUp style"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 -top-40 h-auto max-h-[450px] w-auto object-contain drop-shadow-2xl lg:left-0 lg:translate-x-0"
            />
          </div>

          <div className="max-w-xl text-left">
            <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
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

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {['images/shoesimage/shoe1.png', 'images/shoesimage/shoe2.png', 'images/shoesimage/shoe3.png'].map((thumb, index) => (
                <div key={index} className="rounded-2xl border border-white/30 bg-white/90 p-2 shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                  <img
                    src={`${import.meta.env.BASE_URL}${thumb}`}
                    alt={`shoe-thumbnail-${index}`}
                    className="h-10 w-10 object-contain sm:h-14 sm:w-14"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Explore
