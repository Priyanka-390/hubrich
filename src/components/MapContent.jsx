import { myarray2 } from "./MapData";
import { myarray } from "./MapData";
import girlimg from "../../public/assets/images/girlimg.webp";
import Image from "next/image";

export const arraydata2 = myarray2.map((myarray2, i) => {
  return (
    <>
      <div className="min-h-[270px] relative mt-3 z-[1] p-[58px_50px_32px] h-full bg-white max-w-[400px] shadow-[0px_2px_48px_0px_#00000014]">
        <Image
          src={girlimg}
          width={86}
          height={86}
          alt="imgs"
          className=" translate-x-[-50%] absolute left-[50%] top-0 z-[-1] translate-y-[-55px]"
        />
        <p className="text-base font-poppins font-normal text-center text-[#4D4D4D]">
          {myarray2.description}
        </p>
        <h2 className="pt-4 font-poppins font-medium text-base text-center">
          {myarray2.post}
        </h2>
        <p className="text-base font-poppins pb-[6px] font-normal text-center text-[#4D4D4D]">
          {myarray2.name}
        </p>
      </div>
    </>
  );
});
export const arraydata = myarray.map((myarray, i) => {
  return (
    <div className="px-9 py-6 min-h-[210px] h-full bg-white max-w-[400px] shadow-[0px_2px_48px_0px_#00000014]">
      <p className="text-base font-poppins font-normal text-center text-[#4D4D4D]">
        {myarray.description}
      </p>
      <h2 className="pt-4 font-poppins font-medium text-base text-center">
        {myarray.post}
      </h2>
      <p className="text-base font-poppins pb-[6px] font-normal text-center text-[#4D4D4D]">
        {myarray.name}
      </p>
    </div>
  );
});
