import { useState } from "react";
import Card from "./Card";
import Services from '../Services.jsx'

export default function ServicesHome() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div className="relative flex justify-center px-12">

      {/* Background Image with Opacity */}
      <div 
            className="z-0 absolute inset-0 bg-no-repeat bg-cover opacity-20"
            style={{ backgroundImage: "url('/servicesbg.svg')" }}
            ></div>


      <div className="z-10 mt-20 flex flex-col justify-center min-h-screen gap-16">
        <div className="flex flex-col gap-8 md:gap-4">
            <h1 className="font-[mono] text-xl">- Services</h1>
            <div className="flex md:justify-between items-center flex-col gap-10 md:gap-0 md:flex-row">
              <h2 className="text-5xl  text-blue-600  font-semibold">Services <span className="text-[#333333]">I Provide : </span></h2>
              <div className="hidden md:flex py-2 justify-evenly gap-4 items-center bg-blue-600 w-40 rounded-4xl text-slate-200 cursor-pointer transition-all duration-200 hover:bg-blue-400 hover:scale-95">
                <button onClick={() => {setShowModal(true)}} className="cursor-pointer">See More</button>
                <button onClick={() => {setShowModal(true)}} className="cursor-pointer w-10 h-10 border rounded-full bg-slate-50"><i className="fa-solid fa-arrow-right text-blue-600"></i></button>
              </div>
            </div>
        </div>
        <div className="flex justify-center">  
          <div className=" flex gap-12 md:gap-6 lg:gap-12 md:flex-wrap items-center justify-center flex-col md:flex-row">
              <Card imgUrl="./responsive.png" text="Responsive website design" desc="Ensure your website looks great on all devices with modern responsive design."/>
              <Card imgUrl="./modernui.png" text="Modern & Clean UI design" desc="Create visually appealing and user-friendly interfaces with a focus on UX."/>
              <Card imgUrl="./customDesign.png" text="Custom website development" desc="Tailor-made solutions to fit your business needs using the latest web technologies."/>
              <Card imgUrl="./lp.png" text="Landing Page Creation" desc="High-converting landing pages designed to increase engagement and sales."/>
          </div>
        </div>


        {/* Mobile see more button */}
        <div className="flex justify-end z-10">
          <div className="flex md:hidden py-2 justify-center gap-4 items-center bg-[#2563EB] w-40 rounded-4xl text-slate-200 cursor-pointer transition-all duration-100 hover:bg-blue-400 hover:scale-95">
            <button onClick={() => {setShowModal(true)}} className="cursor-pointer">See More</button>
            <button onClick={() => {setShowModal(true)}} className="cursor-pointer w-10 h-10 border rounded-full bg-slate-50"><i className="fa-solid fa-arrow-right text-blue-600"></i></button>
          </div>
        </div>
      </div>
    </div>
    {/* <Services /> */}
    {/* {showModal && } */}
    {showModal && <Services onClose={() => setShowModal(false)} />}
  </>
  )
}
