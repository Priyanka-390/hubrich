"use client";
"use strict";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Virtual,
  A11y,
  Autoplay,
  Controller,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BlueQuttes } from "./Icon";
const clientData1 = [
  {
    discription:
      "Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum.",
    name: "Marrie James-CEO",
    position: "Limana Enterprises, CA",
    img: "/assets/images/girlimg.webp",
  },
  {
    discription:
      "Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.",
    name: "Ralph Edwards-CEO",
    position: "Limana Enterprises, CA",
    img: "/assets/images/girlimg.webp",
  },
  {
    discription:
      "Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.",
    name: "Darrell Steward-Head",
    position: "Limana Enterprises, CA",
    img: "/assets/images/girlimg.webp",
  },
];
const clientData2 = [
  {
    discription:'Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.',
    name: "Marrie James-CEO",
    position: "Limana Enterprises, CA",
  },
  {
    discription:
      "Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.",
    name: "Ralph Edwards-CEO",
    position: "Limana Enterprises, CA",
  },
  {
    discription:
      "Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. ",
    name: "Darrell Steward-Head",
    position: "Limana Enterprises, CA",
  },
];
export default function Clientslider() {
  const [firstSwiper, setFirstSwiper] = React.useState(null);
  const [secondSwiper, setSecondSwiper] = React.useState(null);
  return (
    <div id="testi" className=" lg:py-52 md:py-32 py-20">
      <div className="container md:pb-5 relative max-w-[1140px]  2xl:max-w-[1320px] px-3 mx-auto">
         <div className="absolute md:top-[-28%] top-[-22%] xl:right-0 md:right-[5%] right-[9%]">
          <span className="ff-helvetica -rotate-90 translate-x-16 transform inline-flex font-normal md:text-2xl text-xl text-black">
            MJH
          </span>
                    <div className="flex items-end mt-3 translate-x-6">
                          <p className="ff-helvetica translate-y-2 rotate-90 transform inline-flex font-normal md:text-[40px] text-3xl leading-[51.52px]">
                06
              </p>
            <div className="border-r-[2px] w-[26px] border-b-[2px] xl:h-[201px] md:h-[150px] h-[100px] border-[#F77B0B] border-solid"></div>
          </div>
        </div>
        <h2 className="text-black uppercase lg:text-[52px] sm:text-5xl text-3xl ff-helvetica text-center md:leading-[66.98px">
          What our <span className="text-[#F77B0B]">clients</span> say
        </h2>
        <Swiper
          direction={"vertical"}
          modules={[Virtual, A11y, Autoplay, Controller, Pagination]}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction:false,
          } }
          autoHeight={true}
          spaceBetween={200}
          slidesPerView={1}
          pagination={true}
          navigation={false}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          className=" sm:!px-40 relative z-[1] !pt-[84px] !pb-[20px]"
        >
          {clientData1.map((data, index) => (
            <SwiperSlide key={index} className=" !h-auto">
              <div className=" p-[58px_50px_32px] relative z-[1] min-h-[207px] shadow-[0px_2px_48px_0px_#00000014] h-full">
                <p className=" text-[#4D4D4D] font-poppins max-w-[721px] mx-auto sm:text-base text-sm leading-[25px] text-center">
                  {data.discription}
                </p>
                <h3 className=" font-poppins pt-4 font-medium sm:text-base text-sm leading-[25px] text-center">
                  {data.name}
                </h3>
                <p className="text-[#4D4D4D] font-normal font-poppins sm:text-base text-sm leading-[25px] text-center">
                  {data.position}
                </p>
                <img
                  src={data.img}
                  alt="girlProfile"
                  width={86}
                  height={86}
                  className=" absolute left-[50%] translate-x-[-50%] top-0 z-[-1] translate-y-[-55px]"
                />
              </div>
            </SwiperSlide>
          ))}
          <span className=" md:absolute top-[9%] md:block hidden sm:top-[14%] right-[4%] z-[-1]">
            <BlueQuttes />
          </span>
        </Swiper>
        {/*  */}
        <Swiper
          breakpoints={{
            850: {
              slidesPerView: 2,
            },
          }}
          modules={[Virtual, A11y, Autoplay, Controller, Pagination]}
          loop={true}
           autoplay={{
            delay: 2000,
            disableOnInteraction:false,
          } }
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          className=" max-w-[820px] px-5 pb-10"
        >
          {clientData2.map((data, index) => (
            <SwiperSlide key={index} className=" h-auto">
              <div className=" p-[25px_36px_31px] mt-5 relative z-[1] min-h-[290px]  shadow-[0px_2px_48px_0px_#00000014] h-full">
                <p className=" text-[#4D4D4D] font-poppins max-w-[721px] mx-auto sm:text-base text-sm leading-[25px] text-center">
                  {data.discription}
                </p>
                <h3 className=" font-poppins pt-4 font-medium sm:text-base text-sm leading-[25px] text-center">
                  {data.name}
                </h3>
                <p className="text-[#4D4D4D] font-normal font-poppins sm:text-base text-sm leading-[25px] text-center">
                  {data.position}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
         <div className="absolute lg:bottom-[-26%] sm:bottom-[-10%] bottom-[-20%] left-12 sm:left-0 max-sm:rotate-90">
          <span className="ff-helvetica -rotate-90 transform inline-flex font-normal md:text-2xl text-xl text-black">
            MJH
          </span>
          <div className="flex items-end mt-3 translate-x-6">
            <div className="border-s-[2px] w-[26px] border-b-[2px] xl:h-[269px] h-[150px] border-[#F77B0B] border-solid"></div>
            <div className=" flex items-center translate-y-2">
              <p className="ff-helvetica -rotate-90 transform inline-flex font-normal md:text-[40px] text-3xl md:leading-[51.52px]">
                07
              </p>
              <p className="ff-helvetica max-sm:-rotate-90 lg:translate-y-2  max-sm:-translate-y-3 font-normal text-2xl max-sm:-translate-x-8 sm:mt-1 text-black">
                TAKE STEP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
