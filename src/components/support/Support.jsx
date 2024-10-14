import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { PiFolderSimpleUserThin } from "react-icons/pi";
import { BsMegaphone } from "react-icons/bs";
import { useTranslations } from "next-intl";
const Support = () => {
    const support = useTranslations("Support")
  return (
    <div className="max-w-[90rem] mx-auto  text-[#3C4448] flex flex-col justify-center items-center mt-16 py-6 md:py-16 shadow-inner rounded-md  bg-gradient-to-t from-[#ffeed58b] to-[#ecf2f5ad] via-[#e8e8e84a]">
        <h1 className=" md:mb-8 text-[#3C4448] text-center text-[1.5rem] md:text-[1.875rem] font-bold">
          <span className="text-[2.5rem]"> {support("title")} </span>
        </h1>

        <div className="w-full my-8 h-full  md:my-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-8  xl:gap-4 ">
            <Link href="/" className=" group transition-all duration-500 ease-in text-[#3C4448] flex flex-col justify-center items-center gap-2">
                <BiSupport className="text-[#acacac] text-[4rem] group-hover:text-[#f39900] md:text-[5rem]" />
                <h2 className="font-bold text-[1.25rem] md:text-[1.5rem] group-hover:text-[#f39900] ">
                {support("customerTitle")}
                </h2>
                <p className="group-hover:text-[#f39900] text-center  text-[.875rem]  md:text-[1.25rem]">
                  {support("customerSubtitle")}
                </p>
                
            </Link>

            <Link href="/" className=" group transition-all duration-500 ease-in text-[#3C4448] flex flex-col justify-center items-center gap-2">
                <BsShieldCheck  className="text-[#acacac] text-[4rem] md:text-[5rem] group-hover:text-[#f39900]" />
                <h2 className="font-bold text-[1.25rem] md:text-[1.5rem] group-hover:text-[#f39900] ">
                {support("warrantyTitle")}
                </h2>
                <p className="group-hover:text-[#f39900] text-center  text-[.875rem]  md:text-[1.25rem]">
                    {support("warrantySubtitle")}
                </p>
                
            </Link>

            <Link href="/" className=" group transition-all duration-500 ease-in text-[#3C4448] flex flex-col justify-center items-center gap-2">
                <PiFolderSimpleUserThin className="text-[#acacac] text-[4rem] md:text-[5rem] group-hover:text-[#f39900]" />
                <h2 className="font-bold text-[1.25rem] md:text-[1.5rem] group-hover:text-[#f39900] ">
                {support("userTitle")}
                </h2>
                <p className="group-hover:text-[#f39900] text-center  text-[.875rem]  md:text-[1.25rem]">
                {support("userSubtitle")}
                </p>
                
            </Link>

            <Link href="/" className=" group transition-all duration-500 ease-in text-[#3C4448] flex flex-col justify-center items-center gap-2">
                <BsMegaphone className="text-[#acacac] text-[4rem] md:text-[5rem] group-hover:text-[#f39900]" />
                <h2 className="font-bold text-[1.25rem] md:text-[1.5rem] group-hover:text-[#f39900]">
                {support("fagTitle")}
                </h2>
                <p className="group-hover:text-[#f39900] text-center  text-[.875rem]  md:text-[1.25rem]">
                {support("fagSubtitle")}
                </p>
                
            </Link>

            
        </div>
        
    </div>
  )
}

export default Support