'use client'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import BentoGridHeroSection from '../component/bentogrid'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react';
import { s } from 'framer-motion/m';



export default function HeroSection() {
    const scrollRef = useRef(null);
    const isInview = useInView(scrollRef, { once: true });
    const mainDivController = useAnimation();

    useEffect(() => {
        if (isInview) {
            mainDivController.start("visible");
        }
    }, [isInview]);



    const heroTitleSectiion = {
        hidden: { opacity: 0, x: -75 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeIn" },
        },
    }
    const GridSectiion = {
        hidden: { opacity: 0, y: 75 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "linear" },
        },
    }


    return (
        <div className="overflow-hidden pt-24 sm:pt-32 select-none"
            style={{
                background: "black",
                backgroundRepeat: "no-repeat",
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/bg/IMG-20250318-WA0000.jpg') ",
                backgroundSize: "cover",
                backgroundPosition: "top",
            }}>

            {/* <img src='/bg/IMG-20250318-WA0000.jpg' className='opacity-40 -z-50 w-full object-cover object-center h-full absolute top-3 left-0'></img> */}

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-2 lg:pr-8" ref={scrollRef} >
                        <motion.div
                            variants={heroTitleSectiion}
                            initial="hidden"
                            animate={mainDivController}
                            className="lg:max-w-lg">
                            <div className="relative w-max  flex flex-col gap-7">
                                <h1 className="font-black capitalize text-6xl leading-[1.2] max-w-2xl text-start">
                                    The <span className='text-[#6165f3]'> best place</span>  to chase your <br /> <span className='text-[#4c52e6]' >dreams</span>
                                </h1>
                                <p className="text-[#c8c6c6] font-medium capitalize text-md leading-[1.2] relative max-w-xl">
                                    The Best Place to Shape Your Future Ace College of Engineering is a center of excellence, fostering innovation and hands-on learning. Our dynamic campus and expert faculty prepare students for a successful caree
                                </p>
                                <motion.a 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                href="#" className="rounded-md bg-[#4c52e6] px-3.5 py-2.5 w-fit text-lg  text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Apply Now</motion.a>
                            </div>


                        </motion.div>
                    </div>

                    <motion.div
                        initial="hidden"
                        animate={mainDivController}
                        variants={GridSectiion}

                    >
                        <BentoGridHeroSection />

                    </motion.div>
                </div>
            </div>
        </div>
    )
}
