'use client'
import { motion } from 'framer-motion'
import React from 'react'
import NavBar from '../component/NavBar'

export default function Herosection() {
    return (
        <div className='w-full flex flex-col h-screen relative bg-black'>
            <video
                src='/video/ace college video.mp4'
                autoPlay
                muted
                loop
                className='w-full h-screen object-cover absolute top-8 left-0 inset-0 z-0 opacity-50 pointer-events-none'
            />

            <div className='relative z-10'>
                <NavBar />
            </div>


            <div className='relative z-10 h-full md:px-10 lg:mx-20 flex flex-col gap-9 py-16'>
                <h1 className='w-full max-w-7xl text-8xl font-medium font-serif text-white'>
                    Best place to <br /> Chase your <br /> <span className=''>Dream</span>
                </h1>
                <p className="text-white text-start font-medium  max-w-xl w-full capitalize text-lg relative">
                    The Best Place to Shape Your Future Ace College of Engineering is a center of excellence, fostering innovation and hands-on learning. Our dynamic campus and expert faculty prepare students for a successful caree
                </p>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    href="#" className="rounded-md bg-[#4c52e6] px-3.5 py-2.5 w-fit text-lg  text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Join Our Venture</motion.a>
            </div>
        </div>
    )
}
