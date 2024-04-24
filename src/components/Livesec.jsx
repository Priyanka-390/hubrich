import Image from "next/image";

const datacard = [
    { para: 'Why does your EX have to disappear from your life forever?' },
    { para: 'What should your everyday life as a single person look like now and how can you cope with the new challenges?' },
    { para: 'How can you handle the divorce quickly and without complications, without worrying about finances or the well-being of the children?' },
    { para: 'Who are you without your EX?' },
    {para:'What new dreams and hopes do you want to live?'},
]

export default function Livesec() {
    const data = datacard.map((datacard, i) => (
        <div key={i} className="lg:w-1/3 sm:w-1/2 ">
        <div className="lg:px-12 px-8 lg:min-h-[230px] sm:min-h-[150px] lg:pt-16 max-sm:py-7 max-lg:py-8 group hover:bg-[#F5FAFF]">
            <p className="font-poppins capitalize max-sm:text-center group-hover:text-[#003D92] max-w-[283px] font-normal sm:text-base text-sm text-[#4D4D4D]">{ datacard.para}</p>
            </div>
            </div>
    ))
    return (
        <div className="relative z-[1] ">
            <div className="container relative max-w-[1140px] lg:pb-32 md:pb-24 pb-20 2xl:max-w-[1320px] px-3 mx-auto">
                <div className="absolute md:bottom-[6%] bottom-[2%] left-0"> 
          <div className="flex items-end mt-3 translate-x-6">
            <div className="border-s-[2px] w-[26px] border-b-[2px] xl:h-[269px] lg:min-h-[588.73px] md:min-h-[400px] min-h-[250px] border-[#F77B0B] border-solid"></div>
            <div className=" flex items-center translate-y-2">
              <p className="ff-helvetica -rotate-90 transform inline-flex font-normal md:text-[40px] text-3xl md:leading-[51.52px]">
                03
              </p>
              <p className="ff-helvetica font-normal md:text-2xl text-xl mt-1 text-black">
                GOAL
              </p>
            </div>
          </div>
        </div>
                <h2 className="ff-helvetica font-bold md:pb-7 pb-3 sm:text-xl text-lg lg:pt-12 md:pt-8 pt-5 text-black text-center">In a 1:1 live coaching session, we will clarify the following questions in particular:</h2>
                <div className="flex items-center max-sm:justify-center flex-row flex-wrap">
                    {data}
                    <div className="lg:w-1/3 sm:w-1/2 max-sm:pb-10 w-full">
                        <div className=" sm:min-h-[230px] max-sm:pt-3  group w-full flex justify-center cursor-pointer mx-auto items-center">
                            <div className="bg-gradient-to-r rounded-[8px] from-[#0C5FD1] to-[#8703C5] p-[1.6px] max-w-[292px] flex justify-center items-center">
                                <div className=" py-[18.33px] rounded-[8px] hover:bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] transition-all duration-300 flex bg-white items-center pl-2">
                                    <Image src="/assets/images/svg/icon1.svg"  width={50.84}
                                        height={47.33} alt="icon" />
                                    <p className=" font-inter pl-2 bg-gradient-to-r pe-4 group-hover:text-white transition-all duration-300 from-[#0C5FD1] to-[#8703C5] text-transparent inline-block bg-clip-text  font-medium text-base">Book a non-binding initial <span className="flex"></span> consultation now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                  <Image src="/assets/images/liveflower.webp" width={180} height={240} alt="floellips" className="absolute max-sm:w-[100px] max-sm:h-[200px] z-[-1] top-[-15%] right-0" />
                 <Image src="/assets/images/ellipseflower.webp" width={180} height={240} alt="floellip" className="absolute max-sm:w-[100px] max-sm:h-[200px] z-[-1] bottom-0 left-0" />
                </div>
                
                )
               
}