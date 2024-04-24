import Image from "next/image";
import { Callicon } from "./Icon";
export default function Herosec() {
  return (
    <div className="md:pb-6 md:pt-0 py-16 relative">
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto">
        <h2 className="text-[#F77B0B] xl:pt-40 lg:pt-32 md:pt-28  ff-helvetica text-[18.8px] md:leading-[24.22px]">
          Marc Joachim Hubrich
        </h2>
        <h1 className=" font-normal uppercase lg:text-6xl max-sm:pt-1 sm:text-5xl text-4xl ff-helvetica lg:leading-[77.28px] text-black">
          Now I let you <span className="lg:block"></span> go!
        </h1>
        <p className="text-[#4D4D4D] pt-2 sm:text-base text-sm font-poppins lg:leading-[25.6px] font-normal">
          For women who do not want to be completely dragged down by
          <span className="lg:block"></span> a SEPARATION.
        </p>
        <p className="text-[#4D4D4D] sm:pb-8 pb-4 sm:text-base text-sm font-poppins lg:leading-[25.6px] font-normal">
          How to let go of your EX so you can leave him behind without
          <span className="lg:block"></span> having to run to a therapist right
          away.
        </p>
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] p-[1.6px] cursor-pointer rounded-[63px]">
            <div className="w-full flex items-center bg-white ps-1 py-1 hover:bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] group md:pr-12 pr-4 rounded-[63px]">
              <span>
                <Image
                  src="/assets/images/svg/icon1.svg"
                  width={50.84}
                  height={47.33}
                  alt="1"
                />
              </span>
              <span className="pl-1 bg-gradient-to-t from-[#0C5FD1] group-hover:text-white duration-300 to-[#8703C5] font-medium font-inter sm:text-base text-sm text-transparent bg-clip-text inline-block">
                Book a non-binding initial consultation now
              </span>
            </div>
          </div>
          <a href="tel:1234567789">
            <div className="pl-4 hover:scale-110 duration-300 pt-1"><Callicon/></div>
          </a>
        </div>
        <div className="flex md:gap-14 gap-7 md:pt-16 sm:pt-10 pt-4 xl:pr-32 xl:justify-end">
          <div className=" after:bg-[#9800B0] after:w-[2px] relative after:absolute after:top-2 after:bottom-0">
            <p className="ff-helvetica font-normal sm:pl-3 pl-1.5 sm:text-base text-sm leading-[27.2px] xl:text-white text-black">DIE WICHTIGSTEN </p>
            <p className="ff-helvetica font-normal sm:pl-3 pl-1.5 sm:text-base text-sm leading-[27.2px] xl:text-white text-black"> ASPEKTE EINER</p>
             <p className="ff-helvetica font-normal sm:pl-3 pl-1.5 sm:text-base text-sm leading-[27.2px] xl:text-white text-black">TRENNUNG:</p>
          </div>
          <ul className="list-disc">
            <li className="font-poppins font-medium sm:text-base text-sm xl:text-white text-black">physische Trennung</li>
           <li className="font-poppins font-medium sm:text-base text-sm xl:text-white text-black">mentale Trennung
          </li>
          </ul>
        </div>

        
      </div>
          </div>
  );
}
