import React from 'react'
import { CircularText } from './icons'
import Link from 'next/link'

const Hireme = () => {
  return (
    <div className='fixed left-1 bottom-1 -translate-y-[4px] flex items-center justify-center overflow-hidden scale-90 md:right-0 md:top-0 md:left-auto md:bottom-auto md:-translate-y-[8px] -tr md:absolute' >
        <div className='w-48 md:w-24  h-auto flex items-center justify-center relative scale-90'>
            <CircularText className={"fill-dark animate-spin-slow dark:fill-light "}/>
        
        <Link href="mailto:www.at4675@gmail.com" className="flex md:w-12 md:h-12 md:text-[10px] dark:bg-light dark:text-dark hover:dark:text-light hover:dark:bg-dark items-center justify-center absolute left-18 top-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid  border-dark w-24 h-24 rounded-full font-semibold hover:bg-light hover:text-dark">
            Hire Me
        </Link>
        </div>
    </div>
  )
}

export default Hireme