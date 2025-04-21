'use client'
import useMouse from "@react-hook/mouse-position";
import BentoGrid2 from "../component/Bentogrid2";
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react';
import Marquee from "react-fast-marquee";

export default function WhyAceSection() {
    const scrollRef = useRef(null);
    const isInview = useInView(scrollRef, { once: true });
    const mainDivController = useAnimation();

    useEffect(() => {
        if (isInview) {
            mainDivController.start("visible");
        }
    }, [isInview])
    const heroTitleSectiion = {
        hidden: { opacity: 0, y: 75 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, ease: "easeIn" },
        },
    }
    const GridSectiion = {
        hidden: { opacity: 0, x: 75 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.5, ease: "linear" },
        },
    }














    return (
        <div className="overflow-hidden py-10 md:py-14 select-none relative bg-indigo-200"
            style={{
                // background: "black",
                // backgroundRepeat: "no-repeat",
                // backgroundSize: "50%",
                // backgroundImage: "url('backgroundSvg/svg-whyAce.png')",
                // backgroundPosition: "bottom right",
            }}>







            {/* <img src="/backgroundSvg/svg_why_ace.svg" className="absolute left-96 "></img> */}

            <div className="mx-auto max-w-7xl px-6 lg:px-8" ref={scrollRef}>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <motion.div
                        variants={heroTitleSectiion}
                        initial="hidden"
                        animate={mainDivController}
                        className="lg:pr-8">
                        <div className="lg:max-w-lg">
                            <div className="relative w-max flex flex-col gap-7">
                                <h1 className="font-black  text-black capitalize text-6xl leading-[1.2] max-w-2xl text-start">
                                    Why<span className='text-[#4c52e6]'> ACE</span> <br /> College of  <br /> <span className='text-[#4c52e6]' >Engineering ?</span>
                                </h1>
                                <p className="text-black font-space text-lg capitalize  leading-[1.2] relative max-w-xl">
                                    ACE College of Engineering, founded in 2013 by Manarul Huda Trust, is a leading institution in Thiruvananthapuram, known for its excellence in professional and value-based education. With advanced facilities and a strong focus on technical and ethical growth, ACE nurtures young minds, empowering them for a bright future.
                                </p>
                                <a href="#" className="rounded-md bg-[#4c52e6] px-3.5 py-2.5 w-fit text-lg  text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Explore 360</a>
                            </div>


                        </div>


                    </motion.div>

                    <BentoGrid2 />



                </div>
            </div>
        </div>
    );
}