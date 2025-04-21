'use client'
import { useInView, useAnimation, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Word } from "../component/wordComponent";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
export default function Principal() {


    const listofperson = [
        {
            name: "Dr. Farrukh Sayeed",
            profession: "Principal, Ace College of Engineering",
            words: 'Its my privilege to warmly welcome you to ACE College of Engineering, committed to achieve academic excellence by inspiring, transforming and developing young students and deliver them as effective and dynamic industry ready professionals."',
            foregroundImg: "/principle/principle.jpg",
            backgroundImg: "principle/principle.jpg"
        },
        {
            name: "Dr. Farrukh Sayeed",
            profession: "Principal, Ace College of Engineering",
            words: 'Its my privilege to warmly welcome you to ACE College of Engineering, committed to achieve academic excellence by inspiring, transforming and developing young students and deliver them as effective and dynamic industry ready professionals."',
            foregroundImg: "/principle/principle.jpg",
            backgroundImg: "principle/principle.jpg"
        }
    ]

    const [selectedImg, setImg] = useState(listofperson[0].backgroundImg)








    return (<div className="w-full relative bg-black h-screen text-white flex items-center justify-center" >
        <img src={selectedImg} className="w-full h-screen  object-cover bg-opacity-0 opacity-35 absolute top-0 left-0 inset-0 z-10" />


        <div className="overflow-y-scroll scrollbar-hide max-h-[70vh] scroll-smooth  h-full">{
            listofperson.map((person, index) => (
                <motion.div
                    viewport={{ amount: 0.7, once: true }}
                    initial={{
                        opacity: 0,
                        scale: 0.5
                    }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: 1,
                            ease: "easeIn"
                        }
                    }}
                    onViewportEnter={() => setImg(person.backgroundImg)}
                    className="">
                    <div className="w-full max-w-7xl mx-auto flex flex-row my-auto h-fit z-50 justify-between align-middle">
                        <h1 className="text-[100px] font-bold text-white font-serif z-50">"</h1>
                        <h2 className="text-5xl font-serif p-11 text-white opacity-100 z-50">
                            {person.words}
                        </h2>
                    </div>
                    <div className="flex flex-row z-50 w-full max-w-7xl mx-auto mt-11 ">
                        <img className="rounded-full size-20 object-cover z-50 ml-20 mr-9 my-5" src={person.foregroundImg} />
                        <div className="z-50">
                            <h1 className="mt-8 text-xl text-white z-50 font-semibold">{person.name}</h1>
                            <h3 className="font-thin">{person.profession}</h3>
                        </div>
                    </div>
                </motion.div>
            ))
        }</div>
    </div>)



}