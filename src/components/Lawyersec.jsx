import Image from "next/image";
import { Btnarrow } from "./Icon";

export default function Lawyersec() {
  return (
    <div className=" lg:pt-60 pt-40 relative">
      <div className="container relative max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto">
        <div className="absolute lg:top-[-42%] top-[-22%] left-12 sm:left-0 max-sm:rotate-90">
          <div className="flex items-end mt-3 translate-x-6">
            <div className="border-s-[2px] w-[26px] border-b-[2px] xl:h-[174px] h-[150px] border-[#F77B0B] border-solid"></div>
            <div className=" flex items-center translate-y-2">
              <p className="ff-helvetica -rotate-90 transform inline-flex font-normal md:text-[40px] text-3xl md:leading-[51.52px]">
                05
              </p>
              <p className="ff-helvetica max-sm:-rotate-90 lg:translate-y-2 max-sm:-translate-y-3 font-normal md:text-2xl text-xl max-sm:-translate-x-4 sm:mt-1 text-black">
                ABOUT
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between flex-row">
          <div className="lg:w-6/12 flex lg:justify-start justify-center w-full">
            <Image
              src="/assets/images/lawyer.webp"
              width={559}
              height={574}
              alt="lawyer"
              className=""
            />
          </div>
          <div className="lg:w-6/12 max-lg:pt-2 w-full lg:flex px-3 lg:justify-end">
            <div>
              <h2 className="lg:text-[52px] sm:text-5xl text-3xl lg:text-start text-center ff-helvetica md:leading-[66.98px] max-lg:mx-auto lg:max-w-[523px] text-black">
                LAWYER <span className="text-[#F77B0B]">&</span> DIVORCE COACH
              </h2>
              <p className="text-black ff-helvetica md:text-[36.96px] text-2xl lg:text-start text-center md:leading-[47.61px] font-normal">
                <span className="text-[#F77B0B]">M</span>arc
                <span className="text-[#F77B0B]"> J</span>oachim
                <span className="text-[#F77B0B]"> H</span>ubrich
              </p>
              <p className="font-bold ff-helvetica text-black lg:pt-8 md:pt-4 pt-2 lg:text-start text-center text-lg sm:text-xl ">
                About The Mindset Agency Coach
              </p>
              <p className="font-normal font-poppins md:pt-3 lg:text-start text-center pt-1 lg:pb-9 md:pb-5 pb-3 sm:text-base text-sm lg:max-w-[484px] text-[#4D4D4D]">
                Marc J. Hubrich is the founder of the mindset agency
                specializing in consulting services.
              </p>
              <div className="flex lg:justify-start justify-center">
                <button className="bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] p-[1.6px] rounded-[63px]">
                  <div className="w-full hover:bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] group duration-300 transition-all flex items-center py-4 md:px-8 px-2 bg-white rounded-[63px]">
                    <span className="md:pl-1 bg-gradient-to-t from-[#0C5FD1] to-[#8703C5] duration-300 transition-all group-hover:text-white font-medium font-inter sm:text-base text-sm text-transparent bg-clip-text inline-block">
                      Learn More About The Agency
                    </span>
                    <span className="md:pl-3 pl-1">
                      <Btnarrow />
                    </span>
                  </div>
                </button>
              </div>
              </div>
            </div>
          </div>
      </div>
      <Image
        src="/assets/images/lawyerellipse.webp"
        width={738}
        height={211}
        alt="ellipsel"
        className="absolute bottom-[-1%] right-0"
      />
    </div>
  );
}
