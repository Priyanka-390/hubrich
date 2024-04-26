"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const Mynav = () => {
      const [show, setshow] = useState(true);
  function nav() {
    setshow(!show);
    if (show === true) {
      document.body.classList.add("max-lg:overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:overflow-hidden");
    }
  }
  return (
    <div className='pt-6'>
          <div className='container max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto'>
              <div className='flex justify-between items-center'>
                  <a href="">
                      <Image src="/assets/images/svg/hubrichlogo.svg" width={145.37} height={53} alt='logo' className='w-auto h-auto'/>
                  </a>
                  <ul className={`flex gap-10 items-center mobileView  ${ show ? "right-[-100%]" : "right-0"
              }`}>
                      <li><a href="#benefit" onClick={nav} className=' font-normal ff-helvetica linkhover hover:text-[#003D92] duration-300 text-white text-base font-ff'>Benifits</a></li>
                      <li><a href="#testi" onClick={nav} className=' font-normal ff-helvetica linkhover text-white hover:text-[#003D92] duration-300 text-base font-ff'>Testimonials</a></li>
                      <li><a href=""> <button className=' py-4 px-7 font-inter text-base font-medium border-transparent border-2 transition-all duration-300 hover:border-white bg-herobtn text-white'>Book consultation now</button></a></li>
                  </ul>
                   <label className=" lg:hidden" onClick={nav}>
            {show ? (
              <div className="z-20 relative">
                <span className="flex bg-[#003D92] h-[4px] rounded-3xl duration-300 w-6"></span>
                <span className="flex bg-[#003D92] h-[4px] rounded-3xl duration-300 w-6 mt-1"></span>
                <span className="flex bg-[#003D92] h-[4px] rounded-3xl duration-300 w-6 mt-1"></span>
              </div>
            ) : (
              <div className="z-20 relative">
                <span className="flex bg-[#003D92] absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                <span className="flex bg-[#003D92] absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
              </div>
            )}
          </label>
              </div>
          </div>
    </div>
  )
}

export default Mynav
