import React from 'react'
import AnimatedText from '@/Component/AnimatedText'
import Head from 'next/head'
import Layout from '@/Component/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import { useRef } from 'react'
import { useMotionValue,useSpring,useInView } from 'framer-motion'
import Skills from '@/Component/Skills'

import { useEffect } from 'react'
import Experience from '@/Component/Experience'


const AnimatedNumbers = ({value}) => {
  const ref = useRef(value);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue,{duration:2000})
  const isInView = useInView(ref);

useEffect( () => {
  if(isInView){
    motionValue.set(value);
  }
},[isInView, value, motionValue])

useEffect(() =>{
  springValue.on("change",(latest)=>{
    if(ref.current && latest.toFixed(0) <= value){
      ref.current.textContent = latest.toFixed(0);
    }
  })
},[springValue,value])
  return <span ref={ref}></span>
}


const about = () => {
  return (
    <>
        <Head>
        <title>WebAhmad | About Page</title>
        <meta name='description' content='any description'></meta>
    </Head>
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className=' px-20 py-8 '>
        <AnimatedText text="Passion fuels Purpose" className='mb-12 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8'/>
        <div className='grid w-full grid-cols-8 gap-12 xl:gap-8 '>
          <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light'>Biography</h2>
            <p className='font-medium lg:text-md md:text-sm sm:text-xs'>- Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
            and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
            new and innovative ways to bring my clients' visions to life.</p>

            <p className='font-medium my-4 lg:text-md md:text-sm sm:text-xs'>- I believe that design is about more than just making things look pretty – it's about solving problems and 
            creating intuitive, enjoyable experiences for users. </p>

            <p className='font-medium lg:text-md md:text-sm sm:text-xs'>- Whether I'm working on a website, mobile app, or 
            other digital product, I bring my commitment to design excellence and user-centered thinking to 
            every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
            </p>

            
          </div>


          <div className='col-span-3 xl:col-span-4 relative h-max rounded-2xl border-2 md:order-1 border-solid border-dark bg-light p-8 xl:p-4 dark:bg-dark dark:border-light md:col-span-8'>
    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
  <Image src={profilePic} alt="WebAhmad" className='w-full h-auto rounded-2xl ' priority sizes='(max-width: 786px) 100vw,(max-width:1200px) 50vw,33vw'/>


</div>

<div className='col-span-2 xl:col-span-8 md:col-span-8 md:text-5xl xl:!flex-row  flex flex-col items-end justify-between xl:justify-between lg:justify-between py-20 md:order-3 '>

<div className='flex flex-col items-end  justify-center '>

    <span className='font-bold inline-block text-7xl md:text-6xl '>
      <AnimatedNumbers value={12}/>+
    </span>
    <h2 className='text-dark/75 capitalize text-xl font-medium dark:text-light md:text-sm'>Projects Completed</h2>

</div>
<div className='flex flex-col items-end justify-center'>

    <span className='font-bold inline-block text-7xl md:text-6xl'>
      2+
    </span>
    <h2 className='text-dark/75 capitalize text-xl font-medium dark:text-light md:text-sm '>Years of Experience</h2>

</div>




</div>
        </div>
          <Skills></Skills>
          <Experience />
        </Layout>
    </main>
    </>
  )
}

export default about