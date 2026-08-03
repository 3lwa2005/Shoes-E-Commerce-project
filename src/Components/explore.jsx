import shoeImage from '../assets/shoes explore.png'


function Explore() {
  return (
    <section className="relative mx-auto mb-16 overflow-hidden rounded-[36px] bg-[#f98a8f] px-6 py-10 text-white shadow-[0_40px_80px_rgba(249,138,143,0.25)] sm:px-10 lg:px-14">
      
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative flex items-center justify-center lg:justify-start">
          <div className="relative h-[420px] w-full max-w-[520px] overflow-hidden rounded-[32px] bg-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.16)]">
            <img
              src={shoeImage}
              alt="StepUp style"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-2xl text-left">
          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Are you ready
            <br />
            to lead the way
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
          <button className="mt-8 inline-flex bg-white px-10 py-4 text-lg font-semibold uppercase tracking-[0.24em] text-[#f84d63] shadow-lg shadow-white/20 transition hover:bg-white/90">
            Explore
          </button>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {['images/products/shoe7.jpg', 'images/products/shoe8.jpg', 'images/products/shoe9.jpg'].map((thumb, index) => (
              <div key={index} className="rounded-3xl border border-white/30 bg-white/90 p-3 shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                <img
                  src={`${import.meta.env.BASE_URL}${thumb}`}
                  alt={`shoe-thumbnail-${index}`}
                  className="h-12 w-12 sm:h-20 sm:w-20 object-contain"
                />
              </div>
            ))}
          </div>

         
        </div>
      </div>
    </section>
  )
}

export default Explore
