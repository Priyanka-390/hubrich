import Image from "next/image";
import { Facebook, Instagram, Mail, Twitter } from "./Icon";

export default function Footersec() {
     const p = new Date();
  const year = p.getFullYear();
    return (
        <div className="bg-[url(/assets/images/footerbg.webp)] bg-no-repeat bg-cover md:py-24 sm:py-20 py-16">
            <div className="container relative max-w-[1140px] 2xl:max-w-[1320px] px-6 mx-auto">
                <div className="flex flex-row flex-wrap -mx-3">
                    <div className="2xl:w-7/12 lg:w-8/12 w-full xl:-ml-9 2xl:ml-0">
                        <div className="flex lg:justify-end justify-center">
                            <a href="">
                                <Image src="/assets/images/svg/footerlogo.svg" className="mr-3 sm:w-[241px] w-[190px] sm:h-[90px] h-[60px]" width={241} height={90} alt="logo" />
                            </a>
                            </div>
                            <div className="flex lg:justify-end justify-center">
                                <p className="text-center text-white lg:ml-6 font-poppins font-normal sm:text-base text-sm pt-2 md:pt-4">(c){year} MARC JOACHIM HUBRICH <span className="block"></span> All Rights Reserved</p>
                        </div>
                    </div>
                    <div className="2xl:w-5/12 lg:w-4/12 w-full">
                        <div className="flex gap-3 max-lg:pt-5 max-sm:pt-3 lg:flex-col items-end lg:justify-end justify-center">
                            <a className=" group" target="blank" href="https://www.facebook.com/login/">
                                <Facebook />
                            </a>
                            <a className="group" target="blank" href="https://twitter.com/i/flow/login">
                                <Twitter />
                            </a>
                            <a className="group" target="blank" href="mailto:Hubrich2344@gmail.com">
                                <Mail />
                            </a>
                            <a className="group" target="blank" href="https://www.instagram.com/accounts/login/"><Instagram/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}