"use client"

import { products } from "@/data/data"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import Product from "./product/Product"
import { useTranslations } from "next-intl"
const Products = () => {

    const produits = useTranslations('Products');
    const theProducts = produits.raw("allProducts")
    const title = produits.raw("title")
    const subtitle = produits.raw("subtitle")

    const [product, setProduct] = useState({
        id: 0,
        title: theProducts[0].title,
        subtitle: theProducts[0].subtitle,
        image: theProducts[0].image
    })

    const [allProducts, setAllProducts] = useState([])

    const handleProducts = (item) => {
        const product = theProducts.find((product) => product.id === item)
        
        setProduct(product)
    }
    const handleAllProducts = (item) => {
        const allProducts = item.productsArray.map((product) => product)
        setAllProducts(allProducts)
    }

   
  const btn = useTranslations('button')
  
  return (
    <div className="max-w-[90rem] px-4 md:px-0 mx-auto mt-8 md:mt-16  ">
        
          
                <div  className=" flex flex-col justify-center items-center gap-4 w-full h-auto">
                    <h1 className=" text-[#3C4448] text-center text-[1.5rem] md:text-[1.875rem] font-bold">{title}</h1>
                    <p className=" text-[#3C4448] text-center text-sm md:text-xl font-thin">{subtitle}</p>
                </div>
                
                <div className="flex flex-col  justify-center items-center gap-4 md:gap-8 xl:gap-16 px-0  mt-8 md:px-4  ">
                <div className="w-full flex justify-center gap-4 md:gap-16 items-center">
                {
                    theProducts.map((item)=>(
                        <div key={item.id} className=" text-[.55rem] md:text-[.75rem] xl:text-[1.25rem] md:leading-7 relative group font-semibold transition-group ease-in-out duration-300  ">
                           
                                <button className={`${item.id === product.id ? "  text-[#f39900] font-extrabold" : ""}  flex text-[#3C4448] font-semibold md:font-normal`} onClick={() => handleProducts(item.id)} > {item.title} </button>
                                <hr className={`${ item.id === product.id ? " border-none bg-[#f39900] w-full top-[1.25rem] absolute md:top-[1.75rem] xl:top-[2.5rem]    h-[.15rem] " : " hidden"} border-none bg-[#f39900] w-full absolute top-[2.5rem] hidden group-hover:block   h-[.15rem]`} />
                        </div>
                        
                     
                    ))
                }
                </div>
                              {
                                 product.id === theProducts[0] ?
                                <div className=" group h-full   ">
                               <div className="max-w-[90rem] h-full  py-4  flex-col md:flex-row flex justify-between  items-center">
                                    <div className="  md:w-2/3 xl:w-2/3 flex justify-center md:justify-start items-center gap-4">
                                        <Image width={1000} height={1000} src={theProducts[0].image} className="w-full object-cover" alt="" />
                                    </div>
                                        <div className=" xl:w-2/3 h-full flex flex-col justify-center items-center xl:ml-[16rem]  gap-4">
                                            <h1 className=" text-[#3C4448] text-center text-[1.25rem] md:text-[1.875rem] font-bold">{theProducts[0].title}</h1>
                                            <p className=" text-[#3C4448] leading-6 text-center text-sm md:text-[1rem] font-thin">{theProducts[0].subtitle}</p>
                                            <div className="w-full group-hover:flex justify-center items-center hidden transition-flex ease-in-out duration-300  mt-2 md:mt-5 ">
                                            <Link href={`#/${theProducts[0].title} `}  className=" text-[.75rem] md:text-[1rem]  hover:scale-105 hover:ml-1 transition-all duration-200 ease-in bg-[#3C4448] font-semibold border-2 hover:border-[#f39900]  text-[#f0f0ef] hover:bg-transparent   hover:text-[#f39900] float-center md:float-start  px-4 py-2 rounded-md"  onClick={() => handleAllProducts(theProducts[product.id] )}> {btn('learnMore')} </Link>
                                        </div>
                                    </div>
                                </div>
                              </div>:
                              <div className="group h-full  ">
                             <div className="max-w-[90rem] h-full  py-4 flex-col md:flex-row flex justify-between  items-center">
                                    <div className=" md:w-2/3 xl:w-2/3 flex justify-center md:justify-start items-center gap-4">
                                        <Image width={1000} height={1000} src={product.image} className="w-full object-cover" alt="" />
                                    </div>
                                        <div className=" xl:w-2/3 h-full flex flex-col justify-center items-center xl:ml-[16rem]  gap-4">
                                            <h1 className=" text-[#3C4448] text-center text-[1.25rem] md:text-[1.875rem] font-bold">{product.title}</h1>
                                            <p className=" text-[#3C4448] leading-6 text-center text-sm md:text-[1rem] font-thin">{product.subtitle}</p>
                                            <div className="w-full group-hover:flex justify-center items-center hidden transition-flex ease-in-out duration-300  mt-2 md:mt-5 ">
                                            <Link href={`#/${product.title} `} className=" text-[.75rem] md:text-[1rem]  hover:scale-105 hover:ml-1 transition-all duration-200 ease-in bg-[#3C4448] font-semibold border-2 hover:border-[#f39900]  text-[#f0f0ef] hover:bg-transparent   hover:text-[#f39900] float-center md:float-start  px-4 py-2 rounded-md"  onClick={() => handleAllProducts(theProducts[product.id]  )}> {btn('learnMore')} </Link>
                                        </div>
                                    </div>
                                </div>
                              </div>
                              }
                        <div className=" w-full ">
                        <div className="w-full">
  {
    product.id === theProducts[0].id ? (
     <div className="w-full h-full">
         <div id={product.title} className="w-full grid md:grid-cols-3 place-items-center h-full ">
        {
           theProducts[0].productsArray.map((product) => (
            <div key={product.id} className=" md:w-3/3 xl:w-2/3 flex flex-col justify-center items-center pb-8 md:pb-[8rem] group px-2 gap-4 ">
        <Image width={500} height={500} src={product.image} className="w-full object-cover" alt="" />
        <h1 className=" text-[#3C4448] text-center text-[1rem] md:text-[1.25rem] xl:text-[1.5rem] font-bold">{product.title}</h1>
        <p className=" group-hover:hidden text-[#3C4448] leading-6 text-center text-sm md:text-[1rem] font-thin">{product.subtitle}</p>
        <button  className=" hidden group-hover:block  w-[10rem] text-[.75rem] md:text-[1rem]  hover:scale-105 hover:ml-1 transition-all duration-200 ease-in bg-[#3C4448] font-semibold border-2 hover:border-[#f39900]  text-[#f0f0ef] hover:bg-transparent   hover:text-[#f39900] float-center md:float-start  px-4 py-2 rounded-md"  > {btn('readMore')} </button>
        </div>
           ))
       }
      </div>
     </div>
    ) : (
      <div className="w-full h-full">
        <div id={product.title} className="w-full grid md:grid-cols-3 place-items-center h-full ">
        <Product product={allProducts} />
      </div>
      </div>
    )
  }
</div>
                        </div>

                </div>
          
        
    </div>
  )
}

export default Products