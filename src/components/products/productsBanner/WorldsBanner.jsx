import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'


const WorldsBanner = ({products, index}) => {
  const banner = useTranslations("BannerCarousel")
  const bannerArray = banner.raw("carousel")
  const btn = useTranslations('button')
 
  return (
    <div id='worlds'  className="w-full  h-full py-8  ">
      <div  className={` ${products.id === 1 || products.id === 2 ? " border-t-[.5px] border-[#3C4448] border-dotted  py-16 w-full grid place-items-center place-content-center gap-2 mt-8 md:mt-0 h-full":"py-16 w-full grid place-items-center place-content-center gap-2 mt-8 md:mt-0 h-full"}`} >
        <h1 className="text-[#3C4448] text-[1.5rem] text-center md:text-[2.5rem] font-bold">
            {products.title}
        </h1>
        <p className="text-[#3C4448] text-[.875rem] text-center md:text-[1.15rem]">
           {products.subtitle.slice(0, 50)}...
        </p>
        <Link href="#worlds" className="bg-[#121616] hover:bg-[#3C4448] md:mt-4 px-3 py-2 text-xl md:text-2xl text-gray-50 rounded-md">
           {btn('learnMore')}
        </Link>
      </div>
       <div className="w-full">
            {
              bannerArray.map((banner) => (
                <div  style={{backgroundImage: `url(${banner.bgImage})`}} key={banner.id} className={` ${banner.id === index ? ` w-full grid place-items-center place-content-center ` : "bg-gradient-to-r from-[#a9a18e54] via-[#ded8c566] to-[#d1c8b259]  w-full grid place-items-center place-content-center"} `} >
           {
            banner.id === index &&    <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center px-4 gap-2 py-8  md:mt-0 h-full   ">
            <div className="flex justify-center items-center flex-col gap-2">
            <h1 className={`${banner.id === 2 ? "text-white text-[1.5rem] text-center md:text-[2.5rem] xl:text-[2rem]":"text-[#171a1c] text-[1.5rem] text-center md:text-[2.5rem] xl:text-[2rem]" } `	} >
                  {banner.title}
              </h1>
              <p className={`${banner.id === 2 ? "text-white text-[.875rem] text-center md:text-[1rem] xl:text-[1.15rem]":"text-[#141718] text-[.875rem] text-center md:text-[1rem] xl:text-[1.15rem]" } `} >
                 {banner.subtitle.slice(0, 90)}...
              </p>
              <button className={`${banner.id === 2 ? "mt-4   bg-[#f39900] hover:bg-[#f39a00cf] md:w-[8rem] xl:w-[12rem] md:mt-4 px-3 py-2 text-xl md:text-[1.15rem] xl:text-2xl text-gray-50 rounded-md":"mt-4   bg-[#0f1213] hover:bg-[#3C4448] md:w-[8rem] xl:w-[12rem] md:mt-4 px-3 py-2 text-xl md:text-[1.15rem] xl:text-2xl text-gray-50 rounded-md" } `	}>
                  {banner.btn}
              </button>
            </div>
            <div className="flex justify-center items-center  md:justify-end">
              <Image src={banner.image} className="object-cover mt-2  md:mt-0 w-[70%] xs:w-[70%] md:w-[20rem] xl:w-[50rem] h-full" alt="hero" width={1000} height={1000} />
            </div>
          </div>
           }
             </div>
              ))
            }
            
          <div className="w-full  bg-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center place-content-center px-4 gap-2 py-16  md:mt-0 h-full ">
          {
            products.productsArray.map((product) => (
              <div key={product.id} className="w-full  px-4 gap-4 py-16  md:mt-0 h-full ">
                  <div  className="w-full h-full rounded-md p-4 flex justify-center items-center flex-col gap-2 hover:border-[1px] hover:border-[#c6c6c6]  hover:scale-105  hover:bg-inherit transition-all duration-200 ease-in hover:text-[#3C4448]  ">
                    <h1 className="text-[#3C4448] text-[1.5rem] text-center md:text-[1.5rem] xl:text-[1.85rem] font-bold">
                        KNX RF Multi USB Interface
                    </h1>
                    <p className="text-[#3C4448] text-[.875rem] text-center md:text-[1rem] xl:text-[1.15rem]">
                        KNX RF Multi/TP media coupler or RF repeater
                    </p>
                  
                      <Link href="/" className="bg-[#121616] hover:bg-[#3C4448] md:mt-4 px-3 py-2 text-md md:text-xl text-gray-50 rounded-md">
                          {btn('readMore')}
                      </Link>
                      <Image src={product.image} className="object-cover mt-2  md:mt-0 w-[100%] xs:w-[70%] md:w-[20rem] xl:w-[20rem] h-full" alt="hero" width={1000} height={1000} />
                        
                </div>
              </div>
            ))
          }
          </div>
       </div>
    </div>
  )
}

export default WorldsBanner