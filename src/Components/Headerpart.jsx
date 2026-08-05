import shoeImage from '../assets/shoes.png';
import Ultimate from '../assets/Ultimate.jpeg'

function Headerpart(){
    return(
      <section className="container-fluid relative flex flex-col md:flex-row min-h-[480px] overflow-hidden">
      
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-6 py-10 md:px-16 md:py-0">
        <h1 className="text-4xl md:text-6xl font-extrabold font-Poppins leading-tight text-center md:text-left">
          Find Your Sole Mate With Us
        </h1>
        <p className="mt-4 font-Poppins font-normal text-gray-600 text-center md:text-left">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod.
        </p>
        <div className="mt-6 flex justify-center md:justify-start">
          <button className="w-fit bg-black text-white px-6 py-3 rounded-md shadow-2xl font-poppins font-normal text-lg hover:bg-gray-800 transition">
            Shop Now
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FAFAFA] to-[#E4E4E4]">
        <img
          src={Ultimate}
          alt="ULTIMATE"
          className="absolute left-1/2 top-0 -translate-x-1/2 h-auto max-h-[320px] object-contain rotate-90 md:left-0 md:translate-x-0 md:top-28 md:h-full md:max-h-[500px] md:rotate-0"
        />

        <img
          src={shoeImage}
          alt="Trendy StepUp Pro"
          className="relative -top-16 md:top-0 z-10 w-4/5"
        />

        <div className="absolute bottom-12 text-start">
          <h3 className="text-2xl font-bold font-Poppins">Trendy StepUp Pro</h3>
          <p className="text-gray-500 text-lg">₹ 3999.00</p>
        </div>
      </div>
    </section>
    )
}

export default Headerpart