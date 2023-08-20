import AnimatedText from "@/Component/AnimatedText";
import Layout from "@/Component/Layout";
import { GithubIcon } from "@/Component/icons";
import Head from "next/head";
import React from "react";
import projec1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion'

const FramerImage = motion(Image);

const FeaturedProject = ({type,title,summary,img,link,github}) => {
  return (
    <article className="w-full  flex lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 items-center justify-between relative rounded-3xl rounded-br-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl">
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 xs:h-[102%] xs:rounded-[1.5rem]' />
        
        <Link href={link} target="_blank"
        className=" flex w-1/2 cursor-pointer overflow-hidden rounded-tl-3xl  rounded-bl-3xl xl:rounded-tl-0xl  xl:rounded-bl-0xl  xl:p-4 lg:flex-col lg:w-full">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale:1.05}}
        transition={{duration:0.02}} priority sizes='(max-width: 786px) 100vw,(max-width:1200px) 50vw,50vw'/>

        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between px-4 lg:w-full lg:pl-0 lg:pt-6 ">
            <span className="text-primary font-medium text-xl dark:text-primaryDark mt-1 sm:text-sm">{type}</span>
            <Link href={link} target="_blank" className="hover:underline dark:text-light underline-offset-2"><h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">{title}</h2></Link>
            <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
            <div className="mb-2 flex items-center">
                <Link href={github} target="_blank" className="w-10 ">
                    <GithubIcon className={"dark:bg-light dark:rounded-full"}/>
                </Link>
                <Link href={link} target="_blank" className="ml-4 mb-1 rounded-lg bg-dark text-light dark:bg-light dark:text-dark dark:border dark:border-solid hover:dark:border-light hover:dark:bg-dark hover:dark:text-light p-1 px-4 text-lg font-semibold sm:px-4 sm:text-base ">
                    Visit Project
                </Link>
            </div>
        </div>
    </article>
  )
}

const Projects =({type,title,img,link,github}) => {
    return(
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 xs:p-3 relative">
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl rounded-bl-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>

            <Link href={link} target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg xl:p-2">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale:1.05}}
        transition={{duration:0.02}} priority sizes='(max-width: 786px) 100vw,(max-width:1200px) 50vw,50vw'/>

        </Link>
        <div className="w-full flex flex-col items-start justify-between mt-4">
            <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">{type}</span>
            <Link href={link} target="_blank" className="hover:underline dark:text-light underline-offset-2"><h2 className="my-2 w-full  text-left text-2xl font-bold lg:text-xl">{title}</h2></Link>
            
            <div className="mb-2 flex items-center w-full justify-between ">
                <Link href={link} target="_blank" className="hover:underline underline-offset-1  dark:text-light text-lg font-semibold md:text-base">
                    Visit 
                </Link>
                <Link href={github} target="_blank" className="w-10">
                    <GithubIcon className={"dark:bg-light dark:rounded-full"}/>
                </Link>
            </div>
        </div>
        </article>
    )
}




const Project = () => {
  return (
    <>
        <Head>
        <title>WebAhmad | Project Page</title>
        <meta name='description' content='any description'></meta>
    </Head>
    <main className="w-full mb-16 flex flex-col items-center justify-center">
            <Layout className="pt-14">
                <AnimatedText  text="Imagination Is Better Than Knowladge!" className='mb-12 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8'/>
                <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                    <div className="col-span-12">
                            <FeaturedProject

                        title="Crypto Screener Application"
                        img={projec1}
                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                        link="/"
                        github="/"
                        type="Sample Project"


                            />
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                    <Projects

title="Crypto Screener Application"
img={projec1}
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
link="/"
github="/"
type="Sample Project"


    />
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                    <Projects

title="Crypto Screener Application"
img={projec1}
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
link="/"
github="/"
type="Sample Project"


    />
                    </div>
                    <div className="col-span-12">
                    <FeaturedProject

title="Crypto Screener Application"
img={projec1}
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
link="/"
github="/"
type="Sample Project"


    />
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                    <Projects

title="Crypto Screener Application"
img={projec1}
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
link="/"
github="/"
type="Sample Project"


    />
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                    <Projects

title="Crypto Screener Application"
img={projec1}
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
link="/"
github="/"
type="Sample Project"


    />
                    </div>
                </div>
            </Layout>
    </main>
    </>
  )
}

export default Project