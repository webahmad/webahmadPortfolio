import React  from 'react'
import Link from 'next/link'
import Logo from '@/Component/Logo.js'
import { useRouter } from 'next/router'
import  {TwitterIcon,GithubIcon,DribbbleIcon,LinkedInIcon,PinterestIcon,MoonIcon, SunIcon}from './icons'
import { motion } from 'framer-motion'
import about from '../pages/about'
import { useEffect } from 'react';
import { useState } from 'react';
import useThemeSwitcher from './useThemeSwitcher'




const CustomLink = ({href,title,className=""}) => {
    const router = useRouter();
    
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1.4px] inline-block dark:bg-light bg-dark absolute left-0 -bottom-0.5 group group-hover:w-full transition-[width] ease duaration-300 ${router.asPath === href ? 'w-full': 'w-0'}`}  > &nbsp; </span>
        </Link>
    )
}
const CustomMobileLink = ({href,title,className="",toggle}) => {
    const router = useRouter();
    const handleClick = () => {
        toggle();
        router.push(href)
    }
    return(
        <button href={href} className={`${className} relative group text-light dark:text-dark my-1` } onClick={handleClick}>
            {title}
            <span className={`h-[1.4px] inline-block dark:bg-dark bg-light absolute left-0 -bottom-0.5 group group-hover:w-full transition-[width] ease duaration-300 ${router.asPath === href ? 'w-full': 'w-0'}`}  > &nbsp; </span>
        </button>
    )
}

const NavBar = () => {
    const [mode,setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () =>{
        setIsOpen(!isOpen)
    }


    return(
        <header className='w-full px-32 xl:px-24 lg:px-16 md:px-16 sm:px-8 py-8 font-medium flex relative items-center justify-between dark:text-light'>
        <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : ' translate-y-0.5'}`}></span>

        </button>

           <div className='w-full flex justify-between items-center lg:hidden'>
           <nav className='lg:hidden'>
            
            <CustomLink href="/" title={"Home"} className='mr-4'/>
            <CustomLink href="./about"className='mx-4' title={"About"} /> 
            <CustomLink href="./Project" title={"Projects"} className='mx-4'/>
            <CustomLink href="/articles" title={"Articles"} className='ml-4'/>
        </nav>
        
        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a href="https://www.twitter.com" target="_blank"
            whileHover={{y:-2}}
            className='w-5 mr-3'
            whileTap={{scale:0.9}}
            >
            <TwitterIcon />
            </motion.a>
            <motion.a href="https://www.Github.com" target="_blank"
            whileHover={{y:-2}}
            className='w-5 mr-3'
            whileTap={{scale:0.9}}
            >
                <GithubIcon/>
            </motion.a>
            <motion.a href="https://www.Dribbble.com" target="_blank"
            whileHover={{y:-2}}
            className='w-5 mr-3'
            whileTap={{scale:0.9}}
            >
                <DribbbleIcon/>
            </motion.a>
            <motion.a href="https://www.LinkedIn.com" target="_blank"
            whileHover={{y:-2}}
            className='w-5 mr-3'
            whileTap={{scale:0.9}}
            >
                <LinkedInIcon />
            </motion.a>
            <motion.a href="https://www.Pinterest.com" target="_blank"
            whileHover={{y:-2}}
            className='w-5 mr-3'
            whileTap={{scale:0.9}}
            >
                <PinterestIcon/>
            </motion.a>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`ml-2 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light": "bg-light text-dark"}`}>
    {
      mode === "dark" ? <SunIcon className={"fill-dark"} />:<MoonIcon className={"fill-dark"}/>
    }
    </button>
        </nav>
           </div>



           {
            isOpen?

            <motion.div initial={{scale:0,opacity:0, x:'-50%' ,y:'-50%'}} animate={{scale:1,opacity:1}} className='min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md  py-28'>
           <nav className='flex items-center justify-center flex-col'>
            
            <CustomMobileLink href="/" title={"Home"}  toggle={handleClick} />
            <CustomMobileLink href="./about" title={"About"}  toggle={handleClick} /> 
            <CustomMobileLink href="./Project" title={"Projects"}  toggle={handleClick} />
            <CustomMobileLink href="/articles" title={"Articles"}  toggle={handleClick} />
        </nav>
        
        <nav className='flex items-center justify-center flex-wrap mt-2 '>
            <motion.a href="https://www.twitter.com" target="_blank"
            whileHover={{y:-2}}
            className='w-5 mr-3 sm:mx-1'
            whileTap={{scale:0.9}}
            >
            <TwitterIcon />
            </motion.a>
            <motion.a href="https://www.Github.com" target="_blank"
            whileHover={{y:-2}}
            className='w-5 mr-3 sm:mx-1'
            whileTap={{scale:0.9}}
            >
                <GithubIcon/>
            </motion.a>
            <motion.a href="https://www.Dribbble.com" target="_blank"
            whileHover={{y:-2}}
            className='w-5 mr-3 sm:mx-1'
            whileTap={{scale:0.9}}
            >
                <DribbbleIcon/>
            </motion.a>
            <motion.a href="https://www.LinkedIn.com" target="_blank"
            whileHover={{y:-2}}
            className='w-5 mr-3 sm:mx-1'
            whileTap={{scale:0.9}}
            >
                <LinkedInIcon />
            </motion.a>
            <motion.a href="https://www.Pinterest.com" target="_blank"
            whileHover={{y:-2}}
            className='w-5 mr-3 sm:mx-1'
            whileTap={{scale:0.9}}
            >
                <PinterestIcon/>
            </motion.a>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`ml-2 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light": "bg-light text-dark"}`}>
    {
      mode === "dark" ? <SunIcon className={"fill-dark"} />:<MoonIcon className={"fill-dark"}/>
    }
    </button>
        </nav>
           </motion.div>

            : null
           }












            <div className={`absolute left-[50%] top-2 translate-x-[-50%] `} >
            <Logo />
            </div>
        </header>
    )
}
export default NavBar

