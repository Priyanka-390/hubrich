import Image from "next/image";

const datas = [
  { para: "How do I let go of my EX so I can finally leave him behind?" },
  { para: "How does the divorce process work?" },
  { para: "Do I need a lawyer?" },
];
const datas2 = [
  { para: "How much will the divorce cost?" },
  { para: "What will happen to my children?" },
  { para: "What does my future as a single person look like now?" },
  { para: "How do I rebuild my self-esteem?" },
];

export default function Requestsec() {
  const cardatas = datas.map((datas, i) => (
    <div className="md:w-1/3 sm:w-1/2 w-full max-md:pt-2 flex justify-center items-center">
      <div className="md:py-[61px] p-10 w-full hover:bg-[#003D92] transition-all duration-300 max-w-[250px] sm:h-[200px] md:px-[38.5px] bg-[#FFFFFF26] backdrop-blur-[8px]">
        <p className="text-white text-base font-poppins font-normal">
          {datas.para}
        </p>
      </div>
    </div>
  ));
  const cardatas2 = datas2.map((datas2, i) => (
    <div className="md:w-1/4 sm:w-1/2 w-full pt-2 flex justify-center items-center">
      <div className="md:py-[61px] p-10  w-full hover:bg-[#003D92] transition-all duration-300 max-w-[250px] sm:h-[200px]  md:px-[38.5px] bg-[#FFFFFF26] backdrop-blur-[8px]">
        <p className="text-white text-base font-poppins font-normal">
          {datas2.para}
        </p>
      </div>
    </div>
  ));
  return (
    <>
      <div className="bg-[#F2F8FF] lg:pt-[71px] pt-14 pb-14">
        <div className="container relative max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto">
          <div className="flex flex-row items-center flex-wrap">
              <div className="md:w-7/12 w-full">
                  <h2 className="uppercase lg:text-[52px] sm:text-5xl text-3xl font-normal md:text-start text-center ff-helvetica md:leading-[66.98px] text-black">Request your <span className="block"><span className=" text-[#F77B0B]">non-binding </span> strategy</span> meeting now!</h2>
                      </div>
                      <div className="md:w-5/12 w-full max-md:ml-2 flex md:justify-end">
                          <p className=" font-poppins md:max-w-[398px] max-md:before:-right-2 max-md:before:absolute max-md:before:w-[2px] max-md:before:top-0 max-md:before:bottom-0 max-md:before:bg-[#9800B0] md:after:left-[-14px] after:-left-2 font-normal md:text-start text-center relative after:absolute after:w-[2px] after:top-0 after:bottom-0 after:bg-[#9800B0] sm:text-base max-md:pt-2 text-sm text-black">Click on the button below, choose an appointment and answer the questions truthfully. One of our strategy consultants will then contact you and conduct your free consultation. We can advise you on the following topics: </p>
                      </div>
          </div>
        </div>
      </div>

      <div className="bg-[url(/assets/images/requestbg.webp)] md:pt-28 sm:pt-20 pt-14 bg-cover bg-no-repeat">
        <div className="container relative max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto">
          <div className="flex flex-row md:max-w-[750px] md:pb-[36px] pb-2 flex-wrap justify-center items-center mx-auto">
            {cardatas}
          </div>
          <div className="flex flex-row max-w-[1000px] lg:pb-14 md:pb-10 pb-4 flex-wrap justify-center items-center mx-auto">
            {cardatas2}
          </div>
          <div className="flex justify-center lg:pb-44 sm:pb-20 pb-14">
            <div className="bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] cursor-pointer max-w-[452px] p-[1.6px] rounded-[63px]">
              <div className="w-full flex items-center hover:bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] duration-300 group bg-white py-1 md:pr-12 pr-4 rounded-[63px]">
                <span>
                  <Image
                    src="/assets/images/svg/icon1.svg"
                    width={50.84}
                    height={47.33}
                    alt="1"
                  />
                </span>
                <span className="pl-1 bg-gradient-to-t from-[#0C5FD1] to-[#8703C5] font-medium font-inter group-hover:text-white duration-300 sm:text-base text-sm text-transparent bg-clip-text inline-block">
                  Book a non-binding initial consultation now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
