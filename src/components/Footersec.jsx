import Image from "next/image";
import { Facebook, Instagram, Mail, Twitter } from "./Icon";

export default function Footersec() {
    return (
        <div className="bg-[url(/assets/images/footerbg.webp)] bg-no-repeat bg-cover md:py-24 sm:py-20 py-16">
            <div className="container relative max-w-[1140px] 2xl:max-w-[1320px] px-6 mx-auto">
                <div className="flex flex-row flex-wrap -mx-3">
                    <div className="lg:w-7/12 w-full">
                        <div className="flex lg:justify-end justify-center">
                            <Image src="/assets/images/svg/footerlogo.svg" className="mr-3 sm:w-[241px] w-[190px] sm:h-[90px] h-[60px]" width={241} height={90} alt="logo" />
                            </div>
                            <div className="flex lg:justify-end justify-center">
                                <p className="text-center text-white lg:ml-6 font-poppins font-normal sm:text-base text-sm pt-2 md:pt-4">(c)2022 MARC JOACHIM HUBRICH <span className="block"></span> All Rights Reserved</p>
                        </div>
                    </div>
                    <div className="lg:w-5/12 w-full">
                        <div className="flex gap-3 max-lg:pt-5 max-sm:pt-3 lg:flex-col items-end lg:justify-end justify-center">
                            <a href="https://www.facebook.com/login/">
                                <Facebook />
                            </a>
                            <a href="https://twitter.com/i/flow/login">
                                <Twitter />
                            </a>
                            <a href="https://webmail.au.syrahost.com/">
                                <Mail />
                            </a>
                            <a href="https://www.instagram.com/accounts/login/"><Instagram/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}