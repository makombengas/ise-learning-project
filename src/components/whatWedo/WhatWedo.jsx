import { whatWeDo } from '@/data/data'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhatWeDo = () => {
    const explore = useTranslations('Explore')
    const exploreArray = explore.raw('servicesArray')
    const btn = useTranslations('button')
  return (
    <div className="py-16 max-w-[92rem] mt-4 md:mt-16  mx-auto mb-4 md:mb-16 w-full h-auto flex-col gap-4  flex justify-center items-center">
       <h1 className="text-[#3C4448] text-[1.5rem] text-center md:text-[1.875rem] font-bold">
            {explore("title")}
       </h1>
     
     <div className="w-full mb-5 mt-8 px-4 ">
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 gap-4">
            {
                exploreArray.map((item) => (
                    <div key={item.id} className="w-full h-[10rem] md:h-[20rem] rounded-lg group ">
                        <div className="w-2/2 h-full relative  flex justify-center items-center flex-col">
                            <Image src={item.image} priority className=" rounded-lg object-cover w-full h-full" alt="hero" width={1000} height={1000} />
                            <div className="text-[#ffffff] bg-black/70 group-hover:bg-black/90 backdrop-blur/20  absolute top-[0%] left-[50%] translate-x-[-50%] rounded-lg  w-full h-full flex justify-center items-center flex-col">
                                <h1 className="   z-10  text-center text-[1.5rem] md:text-[1.85rem] font-bold">{item.title}</h1>
                                <p className="block group-hover:hidden text-gray-300 mx-10 md:mx-20 xl:mx-40 z-10 text-center text-sm leading-6 md:text-[1.25rem] font-thin">{item.subtitle}</p>
                                <Link href="/" className=" hidden group-hover:block bg-[#f39900] hover:border-[#3C4448] hover:border-2 text-[#3C4448] hover:scale-105  transition-all duration-200 ease-in hover:text-[#3C4448] font-semibold hover:bg-[#f0f0ef]  float-center md:float-start mt-5  px-4 py-2 rounded-md"> {btn('learnMore')} </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
           
        </div>
     </div>
      
   </div>
  )
}

export default WhatWeDo