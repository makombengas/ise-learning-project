import { IoArrowForwardOutline, IoCloseOutline  } from "react-icons/io5";
import {useTranslations} from 'next-intl';
const NavBanner =({scrollMenu, setCloseMenu}) =>{
  const info = useTranslations('TopBar');
  return (
    <div className={`${scrollMenu ? "hidden !important" : "hidden md:flex items-center md:gap-x-6 overflow-hidden text-gray-300 bg-[#3C4448] px-6 py-1.5 sm:px-3.5 sm:before:flex-1 "}  relative isolate flex items-center gap-x-6 overflow-hidden text-gray-300 bg-[#3C4448]px-6 py-1.5 sm:px-3.5 sm:before:flex-1 "}  `	} >
      <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#000000] to-[#000000] opacity-30"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#000000] to-[#000000] opacity-30"
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm  leading-6 text-gray-50">
          <strong className="text-xl uppercase font-semibold text-[#f39900]">{info('won')} </strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline h-0.5 w-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          {info('smart')}
        </p>
        <a
          href="#"
          className="group flex items-center justify-center gap-x-1.5 rounded-full bg-[#f39900] px-3.5 py-1 text-sm font-semibold text-black shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          {info('button')} <IoArrowForwardOutline aria-hidden="true" className="h-5 w-5 text-gray-50 group-hover:text-gray-900 " />
        </a>
      </div>
      <div className="flex flex-1 justify-end"  >
        <button type="button" className="-m-3 p-3 focus-visible:outline focus-visible:outline-offset-[-4px]">
          <span className="sr-only text-gray-50 ">Dismiss</span>
          <IoCloseOutline className="h-5 w-5 text-gray-50" onClick={() => setCloseMenu(false)} />
        </button>
      </div>
    </div>
  )
}

export default NavBanner
