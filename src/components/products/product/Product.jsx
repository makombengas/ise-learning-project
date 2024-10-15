import { useTranslations } from "next-intl"
import Image from "next/image"


const Product = ({product}) => {
  const btn = useTranslations('button')
  console.log(product)
    
  return (
    <>
       {
           product.map((product) => (
            <div id={product.title} key={product.id} className=" md:w-3/3 xl:w-2/3 flex flex-col justify-center items-center pb-8 md:pb-[8rem] group px-2 gap-4 ">
        <Image width={500} height={500} src={product.image} className="w-full object-cover" alt="" />
        <h1 className=" text-[#3C4448] text-center text-[1rem] md:text-[1.25rem] xl:text-[1.5rem] font-bold">{product.title}</h1>
        <p className=" group-hover:hidden text-[#3C4448] leading-6 text-center text-sm md:text-[1rem] font-thin">{product.subtitle}</p>
        <button  className=" hidden group-hover:block  w-[10rem] text-[.75rem] md:text-[1rem]  hover:scale-105 hover:ml-1 transition-all duration-200 ease-in bg-[#3C4448] font-semibold border-2 hover:border-[#f39900]  text-[#f0f0ef] hover:bg-transparent   hover:text-[#f39900] float-center md:float-start  px-4 py-2 rounded-md"  > {btn('readMore')} </button>
    </div>
           ))
       }
    </>
  )
}

export default Product