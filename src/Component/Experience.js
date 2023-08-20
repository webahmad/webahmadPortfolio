import { motion } from 'framer-motion'
import { useScroll } from 'framer-motion'
import React from 'react'
import { useRef } from 'react'
import Lilcon from './Lilcon'

const Details =({type,time,place,info}) =>{
    return(
        <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <Lilcon />
            <div>
                <h3 className='capitalize font-bold text-2xl sm:textxl xs:text-lg'>{type}</h3>
                <span className='capitalize font -medium text-dark/75 xs:text-sm'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>
            </div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )
  return (
    <div className="my-64 md:my-32 xs:my-16">
        <h2 className="font-bold text-8xl my-32 w-full text-center md:text-6xl sm:text-4xl    ">
            Education
        </h2>
        <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full" ref={ref}>
        <motion.div style={{scaleY:scrollYProgress}}  className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>
                <ul className='flex flex-col justify-between items-start ml-4 w-full xs:ml-4'>
                    <Details
type="Bachelor Of Science In Computer Science" 
 place= "Massachusetts Institute Of Technology (MIT)"
info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
Intelligence."
                    />
                    <Details
type="Master Of Computer Science" 
 place= "Stanford University"
info="Completed a masters project on deep learning, developing a new neural network architecture for natural 
language understanding."



                    />
                    

                </ul>

        </div>
    </div>
  )
}

export default Experience