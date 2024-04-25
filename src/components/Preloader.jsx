import Image from "next/image";


const Preloader = () => {
    return (
        <div className="flex flex-col justify-center h-screen items-center">
            <Image src="/assets/images/svg/hubrichlogo.svg" width={160} height={63} alt="logo2" />
       <div className='flex space-x-2 justify-center mt-4 items-center bg-white '>
            <span className='sr-only'>Loading...</span>
            <div className='h-8 w-8 bg-[#1D54D0] rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='h-8 w-8 bg-[#1D54D0] rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div className='h-8 w-8 bg-[#1D54D0] rounded-full animate-bounce'></div>
       </div>
   </div>
  )
}

export default Preloader