import { useState } from "react"
import { Link } from "react-scroll"
import ContactMe from "../Contact/ContactMe";

export default function Header() {
  const [hamburger,setHamburger] = useState(false)
  const [showContact, setShowContact] = useState(false);

  return (
    <>
    <header className="bg-gray-100 shadow-md rounded-4xl md:mx-10 ">
      <nav className="flex justify-between items-center px-4 h-16">
      <div className="flex items-end justify-center">
        <h1 className="text-xl font-bold text-blue-600">Portfolio</h1>
      </div>


      {/* Mobile hambuger btn */}
      <button className="md:hidden text-2xl text-blue-600 cursor-pointer transition-all duration-200 hover:scale-110" onClick={() => setHamburger(!hamburger)}>
      ☰
      </button>


      {/* Desktop navigation */}
        <ul className="hidden md:flex space-x-6 text-gray-400">
          <li className="text-blue-600 font-medium inline-block relative cursor-pointer transition-all duration-300 hover:scale-105 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-blue-500 after:transition-transform after:duration-300 hover:after:scale-x-100"><Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link></li>
          <li className="inline-block relative cursor-pointer transition-all duration-300 hover:scale-105 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-blue-500 after:transition-transform after:duration-300 hover:after:scale-x-100"><Link to="services" smooth={true} duration={600} className="cursor-pointer">Services</Link></li>
          <li className="inline-block relative cursor-pointer transition-all duration-300 hover:scale-105 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-blue-500 after:transition-transform after:duration-300 hover:after:scale-x-100"><Link to="aboutMe" smooth={true} duration={700} className="cursor-pointer">About me</Link></li>
          <li className="inline-block relative cursor-pointer transition-all duration-300 hover:scale-105 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-blue-500 after:transition-transform after:duration-300 hover:after:scale-x-100"><Link to="skills" smooth={true} duration={700} className="cursor-pointer">Skills</Link></li>
        </ul>


        {/* contact btn visible on desktop */}
        <div className="hidden md:block bg-blue-600 p-2 rounded-4xl text-slate-200 cursor-pointer transition-all duration-200 hover:bg-blue-400 hover:scale-95 ">
          <button onClick={() => setShowContact(true)}>Contact me</button>
        </div>

        

        {/* Mobile navigation menu */}
        {hamburger && (
        <div className="absolute top-18 left-1/2 transform -translate-x-1/2 w-[85%] bg-gray-100 rounded-3xl p-4 shadow-lg z-50">
          <ul className="flex flex-col gap-y-2 text-gray-500 items-center">
            <li className="cursor-pointer hover:font-semibold hover:text-blue-600 transition-all duration-200">
              <Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link>
            </li>
            <li className="cursor-pointer hover:font-semibold hover:text-blue-600 transition-all duration-200">
              <Link to="services" smooth={true} duration={500} className="cursor-pointer">Services</Link>
            </li>
            <li className="cursor-pointer hover:font-semibold hover:text-blue-600 transition-all duration-200">
              <Link to="aboutMe" smooth={true} duration={500} className="cursor-pointer">About me</Link>
            </li>
            <li className="cursor-pointer hover:font-semibold hover:text-blue-600 transition-all duration-200">
              <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
            </li>
          </ul>

          {/* Contact Button (Visible in Mobile Menu) */}
          <div className="bg-blue-600 mt-4 px-4 py-2 rounded-full text-white text-center cursor-pointer transition-all duration-200 hover:bg-blue-400 hover:scale-95">
            <button onClick={() => setShowContact(true)}>Contact me</button>
          </div>
        </div>
      )}
      </nav>
    </header>
    {showContact && <ContactMe onClose={() => setShowContact(false)} />}
    </>
  )
}
