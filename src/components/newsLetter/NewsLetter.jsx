import { useTranslations } from "next-intl"


const NewsLetter = () => {
    const newsLetter = useTranslations("NewsLetter")
  return (
    <div className=" px-4 md:py-16 w-full xl:border-[.5px] xl:border-dotted   mb-16 h-auto max-w-[90rem] gap-8 mx-auto bg-gradient-to-r from-[#fff2cc5d] to-[#ffe8c245] via-[#f39a0021] ">
        <div className=" grid grid-cols-1 xl:grid-cols-2 place-items-center   gap-4 ">
            <div className="w-full flex  justify-center xl:justify-start items-center xl:items-start flex-col gap-8  xl:gap-4 ">
                <h1 className="text-[#3C4448] text-center xl:text-start md:mx-16 uppercase text-[1.5rem]  md:text-[2.5rem] font-bold">
                    {newsLetter("title")}
                </h1>
                <p className="text-[#3C4448] text-center xl:text-start md:mx-16 text-sm md:text-xl font-thin">
                 {newsLetter("subtitle")}
                </p>
            </div>
            <div className="  mt-8 xl:mt-0  rounded-md border-[1px]  border-[#3C4448]  flex md:w-[30rem] justify-between items-center  h-[3rem]">
                <input className="   w-full   px-4 py-2  outline-none" type="text" placeholder={newsLetter("placeholder")} name="" id="" />
                <button className="h-[2.9rem] w-[12rem] text-[.75rem] md:text-[1rem]  bg-[#3C4448] text-white hover:border-[#3C4448]  hover:scale-105 hover:border-l-2 hover:bg-inherit transition-all duration-200 ease-in hover:text-[#3C4448] font-semibold   float-center md:float-start   px-4 py-2 rounded-r-md"> {newsLetter("btn")} </button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter