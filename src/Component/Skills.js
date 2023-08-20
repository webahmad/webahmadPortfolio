import React from 'react'
import { motion } from 'framer-motion'


const Skill = ({Name,x,y}) =>{
  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
    py-2 px-4 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark
    md:text-sm md:py-1.5 md:px-2 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
    
    
    '
    whileHover={{scale:1.05}}
    initial={{x:0,y:0}}
    whileInView={{x:x,y:y, transition:{duration:1.5 }}}
    
    viewport={{once:true}}
    >{Name}</motion.div>  
  )
}


const Skills = () => {
  return (
    <>

    <h2 className='font-bold text-8xl mt-52 w-full text-center md:text-6xl sm:text-4xl   md:mt-24'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center mt-8 rounded-full bg-circularLight dark:bg-circularDark 
    lg:bg-circularLightLg lg:dark:bg-bg-circularDarkLg
    md:bg-circularLightMd lg:dark:bg-bg-circularDarkMd
    sm:bg-circularLightSm lg:dark:bg-bg-circularDarkSm'
    
     >



    
           <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark cursor-pointer  dark:bg-light dark:text-dark md:p-4 xs:text-sm' whileHover={{scale:1.05}}>Web</motion.div>
           <Skill Name="CSS" x=" -15vw " y="-1vw" />
           <Skill Name="Html" x=" -6vw " y="-12vw" />
           <Skill Name="JavaScript" x=" 20vw " y="6vw" />
           <Skill Name="ReactJS" x=" -16vw " y="14vw" />
           <Skill Name="NextJS" x=" -25vw " y="-15vw" />
           <Skill Name="Web Design" x="30vw " y="-5vw" />
           <Skill Name="Figma" x=" 0vw " y="-20vw" />
           <Skill Name="Tailwind CSS" x=" 18vw " y="18vw" />

    </div>
    </>
  )
}

export default Skills