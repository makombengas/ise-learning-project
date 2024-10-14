"use client"
import {useState, useEffect} from "react"
import { IoLanguageOutline } from "react-icons/io5";
import { nav } from "@/data/data"
// import Link from "next/link"

import Logo from "../logo/Logo"
import { IoIosSearch } from "react-icons/io";
import NavBanner from "./navBanner/NavBanner"
import BackToTop from "../backToTop/BackToTop"
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import {useTranslations} from 'next-intl';
import { useSelectedLayoutSegment } from "next/navigation";
import { Link } from "@/i18n/routing";


const NavBar = () => {
    const [openSearch, setOpenSearch] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const [openSubNav, setOpenSubNav] = useState(false)
    const [subNav, setSubNav] = useState([])
    const [scrollMenu, setScrollMenu] = useState(false)
    const [closeMenu, setCloseMenu] = useState(true)
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
   

    const handleNav = () => {
        setOpenMenu(!openMenu)
    }
    const changeBackground = () => {
        if (window.scrollY >= 80) {

           
            setScrollMenu(true)
        }else if(window.scrollY >= 20){
            setOpenMenu(false)
        }
        else{
            setScrollMenu(false)
        }
    }
    useEffect(() => {

        window.addEventListener('scroll', changeBackground )
        
    }, [] )
   
    const t = useTranslations('Nav');
    const naviguer = t.raw("nav")

    // const handleSubNav =(item)=>{
    //   const subNav = naviguer.find((product) => product.id === item)
    //   setSubNav(subNav)
    //   setOpenSubNav(true)

    // }
    // console.log(subNav)

   const searchFound = useTranslations('Search')
   const search = searchFound.raw('search')

 
  
  return (
<div className="fixed md:sticky    w-full z-50 top-0">
<div className={`shadow-lg  ${scrollMenu ? "shadow-lg  bg-white fixed md:sticky top-0 z-50" : "bg-white fixed md:sticky top-0 z-50"} "bg-white fixed md:sticky top-0 z-50"  `} >
     {closeMenu && <NavBanner scrollMenu={scrollMenu} setCloseMenu={setCloseMenu} />}
    
        <div className="text-[#3C4448] fixed md:sticky    w-full z-50 top-0 bg-white max-w-[90rem] mx-auto flex md:text-[.85rem] xl:text-[1.25rem] justify-between items-center md:gap-6 xl:gap-8 leading-5 px-4 md:px-4 md:py-2 py-1.5 "   >
        <div className=" flex justify-between items-center md:gap-16 xl:gap-24  " >
            <Link href="/" className="z-50">
               <Logo   />
            
            </Link>
            <div className={`  flex items-center justify-center gap-2  ${openMenu ? "   font-medium transition-translate ease-linear duration-300  flex md:static absolute top-0 flex-col md:flex-row -translate-x-[50%] md:translate-x-0 left-[50%] h-screen md:h-auto w-screen md:w-auto bg-gray-50  hidden:flex items-center justify-center gap-0" : "hidden font-medium   md:flex items-center justify-center gap-2"}`} >
               {
                naviguer.map((item)=>(
                    <div className="py-2 font-normal md:font-normal text-xl" key={item.id}  >
                        <Link  
                    className={`${pathname === item.path ? "text-[#f39900] rounded-lg border-none   py-2 px-2 hover:bg-transparent  hover:border-b-2 hover:border-[#f39900]" : "py-2 px-2 hover:bg-transparent  hover:border-b-2 hover:border-[#f39900]"} `} href={`${item.path}`}  onClick={() => handleNav(false) } >
                    {item.title}
                   
                
                    
                    </Link>
                    </div>
                ))
               }
            
            </div>
            {
                openSearch && <div className=" z-20 backdrop-blur-sm bg-white/10 flex items-center justify-center  h-[100vh] w-screen fixed top-[50%] md:top-0 left-0 "  >
                           
                        <div className="relative  z-40 bg-gray-50 w-screen -top-[50%]  md:top-[0rem] h-screen md:h-[100vh] flex items-center justify-center gap-4">
                            <span className=" bg-[#f39900]  w-5 h-5 translate-x-[-50%] left-[50%]   md:w-8 md:h-8 flex justify-center items-center pb-1 md:pb-2 rounded-full cursor-pointer text-xl md:text-3xl absolute top-[5rem] md:top-[10rem] right-[2rem] md:right-[28.5rem] " onClick={() => setOpenSearch(!openSearch)} >x</span>
                            <div className=" w-[80%]  md:w-2/5   justify-between flex items-center gap-2 border-[.12rem] border-gray-300 px-2 py-1 rounded-md">

                                <input type="text" placeholder={search} className="w-full outline-none border-none" />
                                <Link className="float-right md:text-xl xl:text-3xl" href="/">
                                    <IoIosSearch />
                                </Link>

                            </div>
               
                        </div>
                    </div>
            }

        </div>
            <div className="  relative flex items-center justify-center gap-8 z-50 ">
                <IoIosSearch className="cursor-pointer md:text-xl xl:text-2xl " onClick={() => setOpenSearch(!openSearch)} />
                <div className="group cursor-pointer text-2xl shadow-inner  px-2 py-2 rounded-full">
                <IoLanguageOutline />
                <div className=" hidden group-hover:flex justify-start items-center  absolute top-[100%] h-auto -inset-16 translate-x-[-50%] left-[50%] md:left-[25%] xl:left-[30%] w-[10rem] bg-white p-2 rounded-md  ">
                   
                    <LanguageSwitcher   />
                </div>
                </div>
            </div>

            <div className={`${openMenu ? "transition-all ease-linear duration-300" : ""} relative z-50 w-[1.25rem] h-full flex flex-col gap-[.15rem]  md:hidden`}  onClick={() => setOpenMenu(!openMenu)}>
                <hr className={`${openMenu ? "transition-rotate ease-linear duration-300  rotate-45" : "transition-rotate ease-linear duration-300"} border-none h-[.15rem] bg-[#3C4448] `} />
                <hr className={`${openMenu ? " transition-opacity ease-linear duration-300 opacity-0" : "transition-opacity ease-linear duration-300"} border-none h-[.15rem] bg-[#3C4448] `} />
                <hr className={`${openMenu ? "transition-rotate ease-linear duration-300  -rotate-45 relative z-50 -top-2.5" : "transition-rotate ease-linear duration-300"} border-none h-[.15rem] bg-[#3C4448] `} />
            </div>
    </div>
    </div>
    <BackToTop/>
</div>
  )
}

export default NavBar