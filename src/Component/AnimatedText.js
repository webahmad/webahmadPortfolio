import React from 'react'
import { motion } from 'framer-motion'

const quote ={
    initial:{
        opacity:1,
    },
    animate:{
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.08,
        }
    }
}
const Singleword ={
    initial:{
        opacity:0,
        y:50
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:0.5,
        }
    }
}

 const AnimatedText = ({text, className=""}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0'>
    <motion.h1 className={`inline-block w-full dark:text-light text-dark font-bold capitalize text-5xl ${className}`}
    variants={quote} initial="initial" animate="animate">
    
    {
        text.split(" ").map((word , index) =>
        <motion.span key={word+'-'+index} className='inline-block' variants={Singleword}>
                {word}&nbsp;
        </motion.span>
        
        )
    }

    </motion.h1>
    
    </div>
  )
}
export default AnimatedText