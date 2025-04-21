'use client'
import useMouse from "@react-hook/mouse-position"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
export default function CourcesList() {

    const Cources = [
        {
            courceName: 'Electrical & electronics engineering',
            description: 'focuses on the design, development, and application of electrical systems and electronic devices across various industries',
            imageUrl:
                '/icons/bolt.png',
            gif: '/courcegifs/Electrician.gif'
        },
        {
            courceName: 'Aeronotical engineering',
            description: 'Explore the science of flight, aerospace technology, and aircraft design.',
            imageUrl:
                '/icons/fly.png',
            gif: '/courcegifs/Flying around the world.gif'

        },
        {
            courceName: 'mechatronics engineering',
            description: 'Mechatronics Engineering integrates mechanical, electrical, and computer engineering to design automated systems.',
            imageUrl:
                '/icons/mechatronics.png.png',
            gif: '/courcegifs/Time machine (1).gif'

        },
        {
            courceName: 'Electronics & communication engineering',
            description: 'focuses on the design and development of electronic systems and communication technologies.',
            imageUrl:
                '/icons/radio-station.png.png',
            gif: '/courcegifs/Printed circuit board.gif'

        },
        {
            courceName: 'Civil Engineering',
            description: 'focuses on the design and development of electronic systems and communication technologies.',
            imageUrl:
                '/icons/radio-station.png.png',
            gif: '/courcegifs/Bricklayer.gif'

        },



    ]
    const [progress, setProgress] = useState(0);
    const intervalTime = 3000; // 5 seconds

    const [selectedItem, setSelectedItem] = useState(0)
    const [currentGif, setGif] = useState(Cources[selectedItem].gif)


    const [cursorText, setCursorText] = useState("");
    const [cursorVariant, setCursorVariant] = useState("default");

    const ref = useRef(null);
    const mouse = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 100
    });

    let mouseXPosition = 0;
    let mouseYPosition = 0;
    mouseXPosition = mouse.clientX ?? 0;
    mouseYPosition = mouse.clientY ?? 0;
    const variants = {
        default: {
            opacity: 0,
            height: 10,
            width: 10,
            fontSize: "16px",
            x: mouseXPosition,
            y: mouseYPosition,
            transition: {
                type: "spring",
                mass: 0.6
            }
        },
        project: {
            opacity: 1,
            // backgroundColor: "rgba(255, 255, 255, 0.6)",
            backgroundColor: "#00000",
            color: "#fff",
            height: 80,
            width: 150,
            fontSize: "18px",
            x: mouseXPosition - 32,
            y: mouseYPosition - 32
        },
    };

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 28
    };

    function projectEnter() {
        setCursorText("Register");
        setCursorVariant("project");
    }

    function projectLeave() {
        setCursorText("");
        setCursorVariant("default");
    }






    return (<div className="w-full relative py-14 bg-white flex flex-col gap-4 z-10" ref={ref}>

        <motion.div
            variants={variants}
            className="circle fixed top-0 left-0 z-[100] flex flex-row items-center justify-center h-[10px] w-[10px] bg-transparent rounded-full pointer-events-none text-white text-[16px]"
            animate={cursorVariant}
            transition={spring}
        >
            <span className="cursorText">{cursorText}</span>
        </motion.div>

        <h1 className="w-full text-center text-5xl font-inter font-bold text-black">Explore our courses</h1>
        <h3 className="w-full text-center text-3xl font inter font-medium text-black">Shaping future engineers with cutting-edge skills.</h3>

        <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="overflow-y-scroll h-96 scroll-smooth scrollbar-hide">
                    <ul role="list" className="divide-y divide-gray-100">
                        {Cources.map((cource, index) => (
                            <li key={index} className={selectedItem == index ? "flex justify-between gap-x-6 py-5 bg-gray-100" : "flex justify-between gap-x-6 py-5"} onClick={() => { setGif(cource.gif); setSelectedItem(index) }}>

                                <div className={"flex min-w-0 gap-x-4"}>
                                    <img alt="" src={cource.imageUrl} className="size-12 flex-none" />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-lg font-bold font-inter capitalize text-gray-900">{cource.courceName}</p>
                                        <p className="mt-1 truncate text-xs/5 capitalize text-gray-500">{cource.description}</p>
                                    </div>
                                </div>

                            </li>
                        ))}
                    </ul>
                </div>

                <img src={currentGif} className="w-96 mx-32" onMouseLeave={projectLeave} onMouseEnter={projectEnter} />

            </div>
        </div>






    </div >)

}