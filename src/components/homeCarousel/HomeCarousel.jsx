"use client"
import { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled} from "react-icons/rx"
import SliderHome from "../sliderHome/SliderHome"
import {useTranslations} from 'next-intl';
const HomeCarousel = () => {
    
    const [activeIndex, setActiveIndex] = useState(1)

    const t = useTranslations('BannerCarousel');
    const carousel = t.raw("carousel")

    const images =carousel[activeIndex].image
    const title = carousel[activeIndex].title
    const color = carousel[activeIndex].color
    const promo = carousel[activeIndex].promo

    const handleNext = () => {
        if(activeIndex >= carousel.length -1 ){
            setActiveIndex(0)
        }else{
            setActiveIndex(activeIndex + 1)
        }
    }
    const handlePrev = () => {
        if(activeIndex <= 0 ){
            setActiveIndex(carousel.length -1)
        }else{
            setActiveIndex(activeIndex - 1)
        }
    }

    const goToSlide = (slideIndex) => {
        setActiveIndex(slideIndex)
    }

   
  return (
    <div style={{backgroundColor: `${activeIndex === activeIndex  ? color : ""}` }} className=    " max-w-8xl mx-auto bg-[#eaeaea] h-full py-8 md:h-[35.5rem] w-full -z-0 px-4 relative   group"  >
        <div  className={`  ${activeIndex === activeIndex ? "animate-fade-carousel  fade-in  transition-animate ease-in-out duration-300 " : "opacity-0"}`}>
            <SliderHome key={carousel[activeIndex].id} promo={carousel[activeIndex].promo}  carousel={carousel} subtitle={carousel[activeIndex].subtitle} btn={carousel[activeIndex].btn} activeIndex={activeIndex} images={images} title={title} />
        </div>

        {/* left Arrow */}
        <div  className=" z-50 hidden left-4 md:group-hover:block hover:bg-[#3C4448] transition-bg ease-linear duration-300  absolute top-[50%]  p-1  md:left-8 xl:left-16 text-3xl backdrop-blur-md bg-black/30 rounded-md text-[#ffffff] cursor-pointer" onClick={handlePrev} >

            <BsChevronCompactLeft />
        </div>

        {/* right Arrow */}
        <div className="z-50 hidden right-4 md:group-hover:block  hover:bg-[#3C4448] transition-bg ease-linear duration-300 absolute top-[50%]  p-1 md:right-8 xl:right-16 text-3xl backdrop-blur-md bg-black/30  rounded-md text-[#ffffff] cursor-pointer" onClick={handleNext}>

        <BsChevronCompactRight  />
        </div>
        <div className="flex   absolute translate-x-[-50%] left-[50%] top-[93%] md:top-[90%] justify-center items-center py-2 cursor-pointer"  >
            {
                carousel.map((item)=>(
                    <RxDotFilled key={item.id}  className={` ${activeIndex === item.id  ? " transition-bg ease-in-out duration-300  bg-[#f39900] text-[#3C4448] text-sm md:text-xl rounded-full " : "text-[#3C4448] text-sm md:text-xl rounded-full"}`} onClick={() => goToSlide(item.id)} />
                ))
            }
        </div>
        
    </div>
  )
}

export default HomeCarousel