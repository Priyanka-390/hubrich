

const data = [
        { para: 'Your self-esteem is in the basement.' },
        { para: 'You keep asking yourself what you did wrong.' },
        {para:'The feeling of helplessness is your constant companion.'}
];
    const data2 = [
        { para: 'You spend the nights alone and lonely.'},
        { para: 'You have stopped going out and spend the time crying in your room.' },
        {para:'An emotional chaos is raging inside you.'}
    ];
export default function Notalonesec() {
    const carddata = data.map((data, i) => (
        <div key={i} className="lg:w-1/3 max-lg:pt-3 sm:w-1/2 flex justify-center">
            <div className="px-10 pt-10 backdrop-blur-[8px] max-w-[250px] hover:bg-[#003D92] duration-300 bg-[#003E9233] min-h-[169px] h-full">
                <p className="text-white font-poppins font-normal text-base">{data.para}</p>
            </div>
        </div>
    ));
     const carddata2 = data2.map((data2, i) => (
             <div key={i} className="lg:w-1/3 max-lg:pt-3  sm:w-1/2 flex justify-center">
                        <div className="px-10 max-w-[250px] pt-10 backdrop-blur-[8px] hover:bg-[#003D92] duration-300 bg-[#003E9233] min-h-[169px] h-full">
                  <p className="text-white font-poppins font-normal text-base">{data2.para }</p>
                        </div>
                    </div>
        ))
    return ( 
        <>
            <div className="bg-[url(/assets/images/alonebg.webp)] bg-cover mt-8">
                <div className="container max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto">
                    <div className="flex lg:pb-7 max-w-[750px] max-xl:mx-auto xl:translate-x-80  flex-row lg:justify-end justify-center flex-wrap ">
                       {carddata}
                    </div>
                       <div className="flex max-w-[750px] max-lg:pb-3 xl:translate-x-14 max-xl:mx-auto flex-row lg:justify-start justify-center flex-wrap ">
                       {carddata2}
                    </div>
                </div>
            </div>
        </>

    )
}