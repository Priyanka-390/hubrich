
import ClientSlider from "@/components/ClientSlider";
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

export default function Home() {
  return (
    <div>
      <div className="bg-[url(/assets/images/heroimg.webp)] bg-cover relative">
        <Mynav />
        <Herosec />
        <Image
          src="/assets/images/heroelipse.webp"
          width={615}
          height={612}
          alt="heroellips"
          className="absolute top-[-12%] left-[-5%]"
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
     <ClientSlider/>
      <Requestsec />
      <Footersec />
      {/* <ClientSlider /> */}
    </div>
  );
}
