import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid  border-dark dark:border-light dark:text-light'>
        <Layout className='py-8  flex items-center justify-between !px-48 lg:flex-col lg:py-6 lg:!px-0'>

        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center py-2 sm:text-xs'>Build with <span className='text-primary dark:text-primaryDark t-2xl px-1 width-6'>&hearts; </span> by&nbsp;<Link href={"/"}> WebAhmad</Link></div>
        <Link href={"/"}>Say hello </Link>
        </Layout>
    </footer>
  )
}

export default Footer