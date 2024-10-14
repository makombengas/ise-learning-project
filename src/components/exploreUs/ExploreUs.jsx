import { useTranslations } from "next-intl";
import Link from "next/link"


const ExploreUs = () => {
  const info = useTranslations('Building');
  const btn = useTranslations('button');
  return (
   <div className="py-16 max-w-[90rem]  mx-auto  w-full h-auto rounded-md  flex-col gap-4 bg-gradient-to-r from-[#f3ba0029] via-[#f39a0021] to-[#f39a003e]  flex justify-center items-center">
       <h1 className=" text-center md:text-left text-[1.5rem] md:text-2xl xl:text-5xl font-bold leading-24">
            {info('title')}
       </h1>
       <p className=" text-center md:text-left text-sm md:text-md  xl:text-[1.5rem] text-gray-700 font-thin">
       {info('subtitle')}
       </p>
       <Link href="/" className="bg-[#f39900] hover:border-[#3C4448] hover:border-2 text-[#3C4448] hover:scale-105  transition-all duration-200 ease-in hover:text-[#3C4448] font-semibold hover:bg-[#f0f0ef]  float-center md:float-start mt-5  px-4 py-2 rounded-md"> {btn('learnMore')} </Link>
   </div>
  )
}

export default ExploreUs