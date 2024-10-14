import Image from "next/image"
import Link from "next/link"


const SliderHome = ({images,  title, btn, subtitle, promo, activeIndex}) => {
  return (
    
      <div className=" flex justify-center items-center w-full h-auto py-4 ">
        <div className="flex w-full h-full  xl:max-w-[90rem] mx-auto flex-col-reverse md:flex-row justify-between items-center gap-2  md:justify-between xl:gap-8 py-4 px-4 md:py-2 ">
            <div className="w-full flex-col gap-2 flex justify-start items-center">
                <h1 className={`${activeIndex === activeIndex ? "  animate-fadeIn transition-all ease-linear duration-300 " : ""}  text-lg text-center md:text-left md:text-2xl xl:text-5xl font-bold leading-10`} >  {title} </h1>
                <p className=" text-center md:text-left text-sm md:text-md  xl:text-xl text-gray-700 font-thin"> {subtitle}</p>
               
               <div className="w-full flex justify-center items-center md:justify-start mt-2 md:mt-5 ">
                    <Link className=" text-[.75rem] md:text-normal  hover:scale-105 hover:ml-1 transition-all duration-200 ease-in hover:text-[#3C4448] font-semibold border-2 border-[#f39900]  hover:bg-[#f39900]   text-[#f39900] float-center md:float-start  px-4 py-2 rounded-md" href="/"> {btn} </Link>
               </div>
            </div>
            <div className="relative  w-full flex justify-center md:justify-end items-center mt-8 md:mt-0 ">
                <Image  src={images} priority className=" w-[60%] md:w-full h-full" alt="hero" width={1000} height={1000} />

              <div className={` ${activeIndex === 2 ? "  hidden " : " animate-fadeIn ease-in duration-300 w-[5rem] h-[5rem] md:w-[7rem] md:h-[7rem]  xl:w-[9rem] xl:h-[9rem] text-md md:text-xl xl:text-3xl text-white font-bold rounded-full bg-[#f39900] absolute -top-4 md:top-5 left-[55%] flex justify-center items-center "} `} >
                <h1 className="p-4 text-center">{promo} </h1>
              </div>
              

            </div>

        </div>
    </div>
   
  )
}

export default SliderHome