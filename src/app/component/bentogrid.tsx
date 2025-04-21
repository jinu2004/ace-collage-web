'use client'
import { AcademicCapIcon, BuildingOfficeIcon, TrophyIcon } from '@heroicons/react/24/outline';
import "./css/Bentostyle.css"
import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image';

export default function BentoGridHeroSection() {
    return (
        <div className='lg:max-w-lg overflow-visible relative bottom-0'>
            {/* <img src='/bg/girl_cover.png' className='absolute left-32 w-auto -top-5' alt=''></img> */}

            <Image src={"/bg/girl_cover.png"} className='absolute left-32 w-auto -top-5' alt='loading..' width={550} height={550}></Image>

            <div className="parent relative m-10 mb-0">
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                    whileTap={{ scale: 0.9, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                    className="div1 w-44">
                    <div className='rounded-lg bg-[#4d53e6] opacity-70 flex-col flex justify-center'>
                        <div className="flex px-2 py-2">
                            <div className="flex-auto"><BuildingOfficeIcon className='size-6' /></div>
                            <div className="flex-auto ">Company</div>
                        </div>
                        <p className='text-[11px] px-2 text-pretty py-2'>
                            Strong company relations in a college open doors to career opportunities, internships, and real-world industry exposure.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                    whileTap={{ scale: 0.9, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}

                    className="div2 w-44">
                    <div className='rounded-lg bg-[#4d53e6] opacity-70 flex-col flex justify-center'>
                        <div className="flex px-2 py-2">
                            <div className="flex-auto"><AcademicCapIcon className='size-6' /></div>
                            <div className="flex-auto ">Graduation</div>
                        </div>
                        <p className='text-[11px] px-2 text-pretty py-2'>
                            Strong company relations in a college open doors to career opportunities, internships, and real-world industry exposure.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                    whileTap={{ scale: 0.9, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}

                    className="div3 w-44">
                    <div className='rounded-lg bg-[#4d53e6] opacity-70 flex-col flex justify-center'>
                        <div className="flex px-2 py-2">
                            <div className="flex-auto"><TrophyIcon className='size-6' /></div>
                            <div className="flex-auto ">Achivement</div>
                        </div>
                        <p className='text-[11px] px-2 text-pretty py-2'>
                            The achievements we earn in college shape our future, proving that dedication and passion lead to success.
                        </p>
                    </div>
                </motion.div>
            </div>


        </div>
    )
}
