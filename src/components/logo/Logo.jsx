import Image from "next/image"


const Logo = () => {
  return (
    <div className="flex items-center gap-[.15rem] justify-center text-[1.85rem] cursor-pointer  rounded-lg text-slate-50 w-[4rem] bg-[#3C4448] h-[3.25rem]">
        <Image src="/images/iseLogo.png" priority className=" rounded-lg object-cover w-[2.5rem] md:w-[3.5rem] h-auto " alt="hero" width={1000} height={1000} />
    </div>
  )
}

export default Logo