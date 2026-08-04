import shoeImage from '../assets/shoes.png';
import Ultimate from '../assets/Ultimate.jpeg'

function Headerpart(){
    return(
      <section className="container-fluid relative flex min-h-[480px] overflow-hidden">
      
      <div className="w-1/2 bg-white flex flex-col justify-center px-16">
        <h1 className="text-6xl font-extrabold font-Poppins leading-tight">
          Find Your Sole Mate With Us
        </h1>
        <p className="mt-4 font-Poppins font-normal text-gray-600">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod.
        </p>
        <button className="mt-6 w-fit bg-black text-white px-6 py-3 rounded-md shadow-2xl font-poppins font-normal text-lg hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>

      
      <div className="w-1/2 relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FAFAFA] to-[#E4E4E4]">
        
        
       <img
        src={Ultimate}
         alt="ULTIMATE"
         className="absolute left-0 top-0 h-full object-contain"
        />

        
        <img
          src={shoeImage}
          alt="Trendy StepUp Pro"
          className="relative z-10 w-4/5"
        />

        
        <div className="absolute bottom-12 text-start ">
          <h3 className="text-2xl font-bold font-Poppins">Trendy StepUp Pro</h3>
          <p className="text-gray-500 text-lg">₹ 3999.00</p>
        </div>
      </div>
    </section>
    )
}

export default Headerpart