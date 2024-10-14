import Link from "next/link"


const NewProductsBanner = () => {
  return (
    <div className="w-full   h-[15.25rem]">
    <div className="w-full grid place-items-center place-content-center gap-2 mt-8 md:mt-0 h-full   ">
        <h1 className="text-[#3C4448] text-[1.5rem] text-center md:text-[2.5rem] font-bold">
            ise new Product
        </h1>
        <p className="text-[#3C4448] text-[.875rem] text-center md:text-[1.15rem]">
        The next generation KNX radio
        </p>
        <Link href="#worlds" className="bg-[#121616] hover:bg-[#3C4448] md:mt-4 px-3 py-2 text-xl md:text-2xl text-gray-50 rounded-md">
            read more
        </Link>
    </div>
</div>
  )
}

export default NewProductsBanner