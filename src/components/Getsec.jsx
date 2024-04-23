 import Image from "next/image";

export default function Getsec() {
    return (
        <>
            <div id="benefit" className="container relative max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto">
               <h2 className=" font-poppins font-normal pb-5 pt-12 text-base text-center text-black">You are not alone! Numerous women before you stood exactly at this point, where you are now.</h2>
             <div className="flex items-center pb-2 justify-center">
          <div className="bg-gradient-to-r from-[#0C5FD1]  to-[#8703C5]  p-[1.6px] rounded-[63px]">
            <div className="w-full flex xl:ps-1 items-center hover:bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] duration-300 transition-all group bg-white py-1 md:pr-12 pr-4 rounded-[63px]">
              <span>
                <Image
                  src="/assets/images/svg/icon1.svg"
                  width={50.84}
                  height={47.33}
                  alt="1"
                />
              </span>
              <span className="pl-1 bg-gradient-to-t from-[#0C5FD1] to-[#8703C5] duration-300 transition-all group-hover:text-white font-medium font-inter sm:text-base text-sm text-transparent bg-clip-text inline-block">
                Book a non-binding initial consultation now
              </span>
            </div>
          </div>
                </div>
                 <div className="absolute xl:top-[11%] top-[32%] xl:right-0 md:right-[5%] right-[13%]">
          <span className="ff-helvetica -rotate-90 translate-x-16 transform inline-flex font-normal md:text-2xl text-xl text-black">
            MJH
          </span>
                    <div className="flex items-end mt-3 translate-x-6">
                          <p className="ff-helvetica translate-y-2 rotate-90 transform inline-flex font-normal md:text-[40px] text-3xl leading-[51.52px]">
                02
              </p>
            <div className="border-r-[2px] w-[26px] border-b-[2px] xl:h-[269px] h-[150px] border-[#F77B0B] border-solid"></div>
          </div>
        </div>
          <div className="flex flex-row flex-wrap items-center md:pt-28 pt-16">
            <div className=" w-full xl:hidden px-3 flex justify-center">
                        <Image src="/assets/images/flower.webp" width={224.78} height={216.69} alt="flower" className="max-md:w-[150px]"/>
                    </div>
                    <div className="xl:w-3/12 md:w-6/12 w-full">
                        <div className="flex max-lg:justify-center">
                          <h2 className="ff-helvetica lg:text-[52px] sm:text-5xl text-3xl text-black uppercase font-normal md:leading-[66.98px]">what you</h2>
                        </div>
                         <div className="flex max-lg:justify-center">
                           <h2 className="ff-helvetica md:text-[60.67px] sm:text-5xl text-4xl text-black font-normal md:leading-[78.14px]">WILL <span className="text-[#F77B0B]">GET</span> </h2>
                         </div>
                    </div>
                    <div className="xl:w-3/12 xl:block hidden">
                        <Image src="/assets/images/flower.webp" width={224.78} height={216.69} alt="flower"/>
                    </div>
                    <div className="xl:w-5/12 md:w-6/12 ">
                        <p className="font-poppins relative after:absolute max-md:before:absolute max-md:before:top-[2px] max-md:before:-right-2 max-md:before:bottom-0 max-md:pt-2 max-md:before:w-[2px] max-md:before:bg-[#9800b0] after:top-[2px] md:text-start text-center lg:after:left-[-11px] after:-left-1 after:bottom-0 after:w-[2px] after:bg-[#9800B0] font-normal text-base text-black">I will show you which steps are necessary for you to <span className="lg:block"></span> finally successfully let go of your EX. And I will <span className="lg:block"></span> support you to look confidently into your new future.</p>
                    </div>
                </div>
            </div>
            </>
    )
}