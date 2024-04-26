"use client";
import Backtop from "@/components/Backtop";
import Fault from "@/components/Fault";
import Footersec from "@/components/Footersec";
import Getsec from "@/components/Getsec";
import Herosec from "@/components/Herosec";
import Lawyersec from "@/components/Lawyersec";
import Livesec from "@/components/Livesec";
import Mynav from "@/components/Mynav";
import Notalonesec from "@/components/Notalonesec";
import Oversec from "@/components/Oversec";
import Phasessec from "@/components/Phasessec";
import Requestsec from "@/components/Requestsec";
import Targetsec from "@/components/Targetsec";
import Image from "next/image";
import { React, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "@/components/Preloader";
import Clientslider from "@/components/Clientslider";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  const [loder, setloder] = useState(false);
  useEffect(() => {
    setloder(true);
    setTimeout(() => {
      setloder(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loder ? (
        <div>
          <Preloader />
        </div>
      ) : (
        <div className=" overflow-x-clip">
          <div className="lg:bg-[url(/assets/images/heroimg.webp)] bg-[url(/assets/images/herobg2.webp)] 2xl:min-h-screen after:absolute after:top-0 after:right-0 after:bg-white max-lg:after:h-full after:left-0 after:z-[-1] z-[1] after:opacity-80 bg-cover bg-center bg-no-repeat relative">
            <Mynav />
            <Herosec />
            <Image
              src="/assets/images/heroelipse.webp"
              width={615}
              height={612}
              alt="heroellips"
              className="absolute top-[-12%] w-auto h-auto left-[-5%]"
            />
          </div>
          <Fault />
          <Notalonesec />
          <Getsec />
          <Livesec />
          <Targetsec />
          <Phasessec />
          <Oversec />
          <Lawyersec />
          <Clientslider />
          <Requestsec />
          <Footersec />
          <Backtop />
        </div>
      )}
    </div>
  );
}
