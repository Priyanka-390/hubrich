"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Leftarrow, Rightarrow } from "./Icon";
const sliderdata = [
  {
    phase: "1st phase ",
    heading: '"The not-wanting-to-be-true"',
    para:
      "This phase is characterized by denial and ignoring the final separation.",
  },
  {
    phase: "2nd phase ",
    heading: "sales mindset",
    para:
      "Nervousness and feelings of guilt in the sales talk are the reason for poor performance, learn to put them aside and calmly convince your customers.",
  },
  {
    phase: "3rd phase ",
    heading: "CEO Mindset",
    para:
      "Constant stress and enormous pressure as a founder is not normal, but the result of a wrong perspective on productive work. Learn how to get the maximum performance out of yourself without stress.",
  },
  {
    phase: "4th phase ",
    heading: '"The not-wanting-to-be-true"',
    para:
      "This phase is characterized by denial and ignoring the final separation.",
  },
];

export default function Phasessec() {
  const slider = React.useRef(null);
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const dataslider = sliderdata.map((sliderdata, i) => (
    <div key={i}>
      <h2 className=" font-poppins font-medium sm:text-xl text-lg md:leading-[32px] text-center text-white">
        {sliderdata.phase}
      </h2>
      <h2 className=" font-poppins font-medium sm:text-xl text-lg md:leading-[32px] text-center text-white">
        {sliderdata.heading}
      </h2>
      <p className=" font-poppins font-normal sm:text-base text-sm text-white md:pt-4 sm:pt-3 pt-1 text-center">
        {sliderdata.para}
      </p>
    </div>
  ));
  return (
    <div className=" lg:pt-64 md:pt-40 pt-28 lg:pb-44 md:mb-2 relative overflow-y-clip mb-16 z-[1]">
      <Image src="/assets/images/svg/phaseellipse.svg" width={612} height={615} alt="phase" className="absolute bottom-[70%] w-auto h-auto z-[-1] md:block hidden left-0" />
      <div className="container lg:pt-20 relative max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto">
        <div className="absolute xl:top-[-47%] lg:top-[-38%] max-lg:-rotate-90 top-[-6%] xl:right-[3%] lg:right-[7%]">
          <div className="flex justify-end">
            <p className="ff-helvetica text-end lg:-rotate-90 rotate-90 lg:translate-x-12 translate-x-8 pb-3 transform inline-flex font-normal md:text-2xl text-xl text-black">
              MJH
            </p>
          </div>
        <div className="flex items-end mt-3 translate-x-6">
          <p className=" uppercase ff-helvetica font-normal max-lg:rotate-90 max-lg:translate-y-[68px] max-lg:translate-x-[60px] text-black md:text-2xl text-xl translate-y-2 md:leading-[30.91px]">analysis</p>
                          <p className="ff-helvetica translate-y-2 rotate-90 transform inline-flex font-normal md:text-[40px] text-3xl md:leading-[51.52px]">
                04
              </p>
            <div className="border-r-[2px] w-[26px] border-b-[2px] xl:h-[201px] h-[100px] border-[#F77B0B] border-solid"></div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap">
          <div className="lg:w-6/12 w-full sm:pt-9">
            <p className="sm:text-[29.38px] text-2xl lg:text-start text-center ff-helvetica font-normal sm:leading-[37.84px] text-black">
              THE FOUR PHASES OF
            </p>
            <h2 className="ff-helvetica lg:text-start text-center font-normal md:text-[52px] sm:text-5xl text-3xl md:leading-[62.4px] text-black ">
              SEPARATION <span className="block text-[#F77B0B]">MINDSET</span>
            </h2>
            <p className="md:pt-5 font-poppins py-3 lg:text-start text-center font-normal md:pb-9 sm:text-base text-sm text-black">
              There are 4 typical separation phases. The 4 phases are not{" "}
              <span className="lg:block"></span> always clearly separated from
              each other and can overlap.
            </p>
            <div className="max-lg:flex max-lg:justify-center">
                <div className="bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] lg:max-w-[452px] cursor-pointer p-[1.6px] rounded-[63px]">
                  <div className="w-full flex items-center pr-2 group hover:bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] duration-300 bg-white py-1  rounded-[63px]">
                    <span>
                      <Image
                        src="/assets/images/svg/icon1.svg"
                        width={50.84}
                        height={47.33}
                        alt="1"
                      />
                    </span>
                    <span className="pl-1 bg-gradient-to-t from-[#0C5FD1] to-[#8703C5] group-hover:text-white duration-300 font-medium font-inter sm:text-base text-sm text-transparent bg-clip-text inline-block">
                      Book a non-binding initial consultation now
                    </span>
                  </div>
                </div>
            </div>
          </div>
          <div className="lg:w-6/12 w-full max-lg:pt-3">
            <div className="bg-[#003D92] relative xl:px-[122px] md:px-20  sm:p-10 p-8 z-[1] md:pt-32 lg:h-[448px] md:h-[400px] min-h-[300px]">
              <Slider {...settings} ref={slider} className="istslider">
                {dataslider}
              </Slider>
              <div className="flex sm:absolute  items-center gap-12 bottom-[5%] left-[-8%]">
                <button className="lg:block hidden" onClick={() => slider?.current?.slickPrev()}>
                    <Leftarrow />
                </button>
                <button className="lg:block hidden" onClick={() => slider?.current?.slickNext()}>
                    <Rightarrow />
                </button>
                    </div>
                  <Image src="/assets/images/sliderellipse.webp" width={382} height={249} alt="ellipse1" className="absolute bottom-0 right-0 z-[-1]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
