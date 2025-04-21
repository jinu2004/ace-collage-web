// 'use client'
// import useMouse from "@react-hook/mouse-position";
// import { motion } from "framer-motion";
// import { useRef, useState } from "react";

// export default function NewsAndUpdates() {
//     const News = [
//         {
//             conducting: 'EEE',
//             date: "5th March 2025",
//             heading: "Design, Development, and application of electrical systems and electronic devices ",
//             description: 'focuses on the design, development, and application of electrical systems and electronic devices across various industries',
//             imageUrl: 'NewsAndUpdates/event.jpg',
//         },
//         {
//             conducting: 'EEE',
//             date: "5th March 2025",
//             heading: "Design, Development, and application of electrical systems and electronic devices ",
//             description: 'focuses on the design, development, and application of electrical systems and electronic devices across various industries',
//             imageUrl: 'NewsAndUpdates/event.jpg',
//         }

//     ]


//     const [cursorText, setCursorText] = useState("");
//     const [cursorVariant, setCursorVariant] = useState("default");

//     const ref = useRef(null);
//     const mouse = useMouse(ref, {
//         enterDelay: 100,
//         leaveDelay: 100
//     });

//     let mouseXPosition = 0;
//     let mouseYPosition = 0;
//     mouseXPosition = mouse.clientX ?? 0;
//     mouseYPosition = mouse.clientY ?? 0;
//     const variants = {
//         default: {
//             opacity: 0,
//             height: 10,
//             width: 10,
//             fontSize: "16px",
//             x: mouseXPosition,
//             y: mouseYPosition,
//             transition: {
//                 type: "spring",
//                 mass: 0.6
//             }
//         },
//         project: {
//             opacity: 1,
//             // backgroundColor: "rgba(255, 255, 255, 0.6)",
//             backgroundColor: "#00000",
//             color: "#fff",
//             height: 80,
//             width: 80,
//             fontSize: "18px",
//             x: mouseXPosition - 32,
//             y: mouseYPosition - 32
//         },
//     };

//     const spring = {
//         type: "spring",
//         stiffness: 500,
//         damping: 28
//     };

//     function projectEnter() {
//         setCursorText("Scroll");
//         setCursorVariant("project");
//     }

//     function projectLeave() {
//         setCursorText("");
//         setCursorVariant("default");
//     }


// return (
//     <div className="flex flex-col p-12 bg-indigo-300 text-black relative" ref={ref} >

//         <motion.div
//             variants={variants}
//             className="circle fixed top-0 left-0 z-[100] flex flex-row items-center justify-center h-[10px] w-[10px] bg-transparent rounded-full pointer-events-none text-white text-[16px]"
//             animate={cursorVariant}
//             transition={spring}
//         >
//             <span className="cursorText">{cursorText}</span>
//         </motion.div>

//         <h1 className="w-full text-center font-bold text-5xl p-5 capitalize ">Upcoming Events</h1>
//         <p className="w-full text-center font-normal text-2xl p-5">Events of the most popular topics that can some changes for our daily life</p>

//         <div className="flex flex-col justify-center  mt-3 overflow-y-auto h-[60vh] my-auto scroll-smooth scrollbar-hide mx-auto rounded-lg" onMouseEnter={projectEnter} onMouseLeave={projectLeave}>
//             <div className="h-full">
//                 <div className="overflow-y-scroll h-100 scroll-smooth scrollbar-hide">
//                     <ul role="list" >
//                         {News.map((news, index) => (
//                             <li key={index} className="justify-between gap-y-6 w-full py-3">
//                                 <motion.div
//                                     initial={{ scale: 0.8, opacity: 0.5 }}
//                                     whileInView={{
//                                         scale: 1,
//                                         opacity: 1,
//                                         transition: {
//                                             ease: "easeIn",
//                                             duration: 1
//                                         }

//                                     }}
//                                     className="mx-auto w-full flex flex-row max-w-7xl min-w-52" >
//                                     <img src={news.imageUrl} className="h-96" />
//                                     <div className="bg-white w-full">
//                                         <div className="flex flex-row w-full gap-96 justify-between p-6">
//                                             <h2 className="bg-violet-700 text-white p-2">{news.date}</h2>
//                                             <h2 className="bg-green-300 text-black p-2">{news.conducting}</h2>
//                                         </div>

//                                         <h1 className="px-6 text-3xl max-w-xl font-bold">
//                                             {news.heading}
//                                         </h1>
//                                         <p className="px-6 text-lg max-w-xl font-normal pt-6">{news.description}</p>

//                                         <button className="mx-6 my-6 text-2xl font-bold text-white p-3 bg-black ">
//                                             READ MORE
//                                         </button>





//                                     </div>
//                                 </motion.div>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     </div>


// )


export default function NewsAndUpdates() {
    const News = [
        {
            courceName: 'Electrical & electronics engineering',
            description: 'focuses on the design, development, and application of electrical systems and electronic devices across various industries',
            imageUrl:
                'NewsAndUpdates/EEE1.png',
            gif: '/courcegifs/Electrician.gif'
        },
        {
            courceName: 'Aeronotical engineering',
            description: 'Explore the science of flight, aerospace technology, and aircraft design.',
            imageUrl:
                'NewsAndUpdates/EEE2.png',
            gif: '/courcegifs/Flying around the world.gif'

        },
        {
            courceName: 'mechatronics engineering',
            description: 'Mechatronics Engineering integrates mechanical, electrical, and computer engineering to design automated systems.',
            imageUrl:
                'NewsAndUpdates/EEE3.png',
            gif: '/courcegifs/Time machine (1).gif'

        },
        {
            courceName: 'Electronics & communication engineering',
            description: 'focuses on the design and development of electronic systems and communication technologies.',
            imageUrl:
                'NewsAndUpdates/EEE1.png',
            gif: '/courcegifs/Printed circuit board.gif'

        },
        {
            courceName: 'Civil Engineering',
            description: 'focuses on the design and development of electronic systems and communication technologies.',
            imageUrl:
                'NewsAndUpdates/EEE2.png',
            gif: '/courcegifs/Bricklayer.gif'

        },
        {
            courceName: 'Civil Engineering',
            description: 'focuses on the design and development of electronic systems and communication technologies.',
            imageUrl:
                'NewsAndUpdates/EEE3.png',
            gif: '/courcegifs/Bricklayer.gif'

        },
        {
            courceName: 'Civil Engineering',
            description: 'focuses on the design and development of electronic systems and communication technologies.',
            imageUrl:
                'NewsAndUpdates/EEE1.png',
            gif: '/courcegifs/Bricklayer.gif'

        },
    ]

    return (
        <div className="flex flex-col md:flex-row gap-8 p-12"
            style={{
                background: "#a5b4fc",
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundSize: "40%, 50%",
                backgroundImage: "url('backgroundSvg/svg-newsUpdates-left.png'), url('backgroundSvg/svg-newsUpdates-right.png')",
                backgroundPosition: "bottom left,bottom right",
            }}>
            {/* Left Div */}
            <div className="flex-1 h-full p-8">
                <h2 className="text-5xl font-black text-black uppercase mb-4">News<span className='text-[#4c52e6]'> &</span>  <br />Updates</h2>
                <div className="h-[85%] w-[85%] relative">
                    <img src="NewsAndUpdates\newsmain.jpg" alt="Image" className="w-full h-full rounded-3xl" />
                    <div className="absolute bottom-0 left-0 w-full  rounded-b-3xl bg-black font-inter text-sm text-white/80 bg-opacity-70 p-3">
                        <p className="text-lg text-white">Publication of magazine</p>
                        The publication of a magazine involves the process of
                        producing and distributing a periodical publication, typically focused on a specific topic or interest. It requires
                        collaboration among writers, editors, designers, and marketers to ensure high-quality content reaches its target audience.</div>
                </div>
            </div>

            {/* Right Div */}
            <div className="flex flex-col justify-center flex-1 p-8 overflow-y-auto max-h-[80vh] scroll-smooth scrollbar-hide">
                <div className="space-y-4 h-full">
                    <div className="overflow-y-scroll h-100 scroll-smooth scrollbar-hide">
                        <ul role="list" >
                            {News.map((news, index) => (
                                <li key={index} className=" justify-between gap-x-6 py-2">
                                    <div className="flex min-w-0 gap-x-4 bg-indigo-100 text-black p-5 rounded-lg">
                                        <img alt="" src={news.imageUrl} className="w-24 flex-none" />
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-lg font-bold font-inter capitalize text-black">{news.courceName}</p>
                                            <p className="mt-1 text-base/5 capitalize text-gray-900 ">{news.description}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}