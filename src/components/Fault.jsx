import Image from "next/image";
export default function Fault() {
  return (
    <div className=" md:pt-40 pt-28 relative overflow-x-clip">
      <Image src="/assets/images/svg/faultellipse.svg" width={250} height={400} alt="fault" className="absolute lg:w-[259px] sm:w-[160px] w-[90px] top-[5%] right-0"/>
      <div className="container relative max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto">
        <div className="absolute xl:top-[-116%] md:top-[-60%] top-[-46%] left-12 sm:left-0 max-sm:rotate-90">
          <span className="ff-helvetica -rotate-90 transform inline-flex font-normal md:text-2xl text-xl text-black">
            MJH
          </span>
          <div className="flex items-end mt-3 translate-x-6">
            <div className="border-s-[2px] w-[26px] border-b-[2px] xl:h-[269px] h-[150px] border-[#F77B0B] border-solid"></div>
            <div className=" flex items-center translate-y-2">
              <p className="ff-helvetica -rotate-90 transform inline-flex font-normal md:text-[40px] text-3xl md:leading-[51.52px]">
                01
              </p>
              <p className="ff-helvetica max-sm:-rotate-90 lg:translate-y-2 max-sm:-translate-y-3 font-normal text-2xl max-sm:-translate-x-4 sm:mt-1 text-black">
                FAULT
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row -mx-3 flex-wrap">
          <div className="md:w-7/12 w-full flex flex-col justify-center">
            <h2 data-aos="fade-right" className=" font-normal lg:text-6xl max-sm:pt-1 sm:text-5xl text-3xl text-center ff-helvetica lg:leading-[77.28px] text-black">
              IT'S NOT
                      </h2>
                      <h2 data-aos="fade-right" className=" font-normal lg:text-6xl max-sm:pt-1 lg:pr-12 sm:text-5xl md:text-end text-center text-3xl ff-helvetica lg:leading-[77.28px] text-[#F77B0B]">YOUR <span className="text-black">FAULT!</span> </h2>
                  </div>
                  <div data-aos="fade-left" className="md:w-5/12 w-full max-md:flex md:justify-start justify-center">
                      <p className="text-black md:text-start text-center max-md:before:absolute max-md:pt-2 max-md:before:top-[2px] max-md:before:right-[-11px] max-md:before:bottom-0 max-md:before:w-[2px] max-md:before:bg-[#9800B0] relative after:absolute after:top-[2px] lg:ml-16 ml-4 after:left-[-11px] after:bottom-0 after:w-[2px] after:bg-[#9800B0] max-w-[288px] text-base font-poppins font-normal">It's not your fault for not knowing how to let go of the partner who no longer made you feel special.</p>
                  </div>
        </div>
        <h2 className="ff-helvetica sm:text-xl text-lg font-bold text-black md:pt-14 sm:pt-10 pt-5 text-center">How would you know when you are busy with completely different things at the moment:</h2>
      </div>
    </div>
  );
}
