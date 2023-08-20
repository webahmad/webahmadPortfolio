import AnimatedText from '@/Component/AnimatedText'
import Layout from '@/Component/Layout'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import article from "../../public/images/articles/pagination component in reactjs.jpg"
import article1 from "../../public/images/articles/create loading screen in react js.jpg"
import { motion, useMotionValue } from 'framer-motion'
import article2 from "../../public/images/articles/form validation in reactjs using custom react hook.png"
import { useRef } from 'react'
const FramerImage = motion(Image);
const MovingImg =({title, img, link}) =>{
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event){
        imgRef.current.style.display ="inline-block";
        x.set(event.pagex);
        y.set(-10);
    }
    function handleMouseLeave(event){
        imgRef.current.style.display ="none";
        x.set(0);
        y.set(0);
    }
    return(
        
        <Link href={link} target='_blank'
         onMouseMove={handleMouse} 
         onMouseLeave={handleMouseLeave}>
        <h2 className='capatalize  font-semibold hover:underline '>{title}</h2>

        <FramerImage style={{x:x,y:y}} ref={imgRef} src={img} alt={title} className=' z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' priority sizes='(max-width: 786px) 100vw,(max-width:1200px) 50vw,50vw'/>
        </Link>
        
    )
}



const Articles = ({img,title,date,link}) =>{
    return(
        <motion.li className='relative w-full p-4 py-6 my-4 rounded-xl flex  items-center justify-between bg-light text-dark dark:bg-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4 sm:flex-col' initial={{y:200}} whileInView={{y:0,transition:{duration:0.4,ease:"easeInOut"}}} viewport={{once:true}}>
            
            <MovingImg img={img} title={title} link={link}/>
            
            <span className='text-primary dark:text-primaryDark font-semibold w-full pl-4 sm:flex-col sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const FeaturedArticles = ({img,title,time ,summary,link}) => {
    return(
        <li className='relative col-span-1 w-full p-4 bg-light dark:bg-dark dark:text-light border  border-solid border-dark dark:border-light rounded-2xl '>
                        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl rounded-bl-3xl bg-dark dark:bg-light'/>

            <Link href={link} target="_blank"
        className="w-full cursor-pointer overflow-hidden inline-block rounded-tl-3xl rounded-bl-3xl rounded-lg">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale:1.05}}
        transition={{duration:0.02}} priority sizes='(max-width: 786px) 100vw,(max-width:1200px) 50vw,50vw'/>

        </Link>
        <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold hover:underline underline-offset-1 my-2 xs:text-lg'>{title}</h2>
        </Link>
        <p className='text-sm mb-2'>{summary}</p>
        <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </li>
    )
}


const articles = () => {
  return (
    <>
         <Head>
        <title>WebAhmad | articles Page</title>
        <meta name='description' content='any description'></meta>
    </Head>
    <main className='w-full mb-16 flex flex-col items-center justify-center overflow overflow-hidden'>
    <Layout className='pt-16'>
        <AnimatedText text="Words Can Change The World!" className='mb-16 text-7xl'/>
        <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 mf:gap-y-16'>
            <FeaturedArticles 

title="Build A Custom Pagination Component In Reactjs From Scratch"
summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
link="/"
time="9 min read"
img={article}


            />
            <FeaturedArticles 

title="Build A Custom Pagination Component In Reactjs From Scratch"
summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
link="/"
time="9 min read"
img={article1}


            />

        </ul>
        <h2 className=' text-4xl text-center my-14 dark:text-light mt-28 font-bold w-full'>All Articles</h2>

        <Articles
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
"
            link="/"
            img={article2}
            date="22 march,2023"
        />
        <Articles
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
"
            link="/"
            img={article2}
            date="22 march,2023"
        />
        <Articles
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
"
            link="/"
            img={article2}
            date="22 march,2023"
        />
        <Articles
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
"
            link="/"
            img={article2}
            date="22 march,2023"
        />
    </Layout>

    </main>
    </>
  )
}

export default articles