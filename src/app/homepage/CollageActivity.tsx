'use client'
import { CloseButton } from '@headlessui/react'
import { motion } from 'framer-motion'
import { details } from 'framer-motion/m'
import React, { useRef, useState } from 'react'
import Marquee from 'react-fast-marquee'
import SpinningText from '../component/spinningText'
import useMouse from '@react-hook/mouse-position'

export default function CollageActivity() {
  enum sections {
    sports = "sports",
    workshops = "workshops",
    projects = "projects",
    null = ""
  }

  enum directions {
    left = "left",
    right = "right"
  }

  const [hovered, setHovered] = useState(sections.null)
  const Activites = [
    {
      label: sections.workshops,
      direction: directions.left,
      marquee: [
        {
          text: "Hackathons",
          img: "/hackathons_workshops/hackathon.jpeg"
        },
        {
          text: "Workshops",
          img: "/hackathons_workshops/workshops.jpg"
        },
        {
          text: "Hackathons",
          img: "/hackathons_workshops/hackathon.jpeg"
        },
        {
          text: "Workshops",
          img: "/hackathons_workshops/workshops.jpg"
        }

      ],
      details: [
        {
          heading: "hackathons 2025",
          discription: "Play engages the world for curiosity’s sake, for the purpose of trying something new, without fearing the consequences. Play is our word for pure research, for raw experimentation, and for harmless trial and error.",
          img: "/hackathons_workshops/hackathon.jpeg"
        },
        {
          heading: "Workshops",
          discription: "Play engages the world for curiosity’s sake, for the purpose of trying something new, without fearing the consequences. Play is our word for pure research, for raw experimentation, and for harmless trial and error.",
          img: "/hackathons_workshops/workshops.jpg"
        }
      ]
    }
    ,
    {
      label: sections.sports,
      direction: directions.right,
      marquee: [
        {
          text: "sports",
          img: "/sports-and-education/sports-1.jpg"
        },
        {
          text: "sports",
          img: "/sports-and-education/sports-2.jpg"
        },
        {
          text: "sports",
          img: "/sports-and-education/sports-1.jpg"
        },
        {
          text: "sports",
          img: "/sports-and-education/sports-2.jpg"
        }

      ],
      details: [
        {
          heading: "1st Runner-Up Victory in Basketball Battle",
          discription: "The fierce and talented girls’ basketball team of Ace College of Engineering secured the 1st Runner-Up spot in a high-energy intercollegiate tournament. Their grit, passion, and teamwork lit up the court — a proud moment for the college",
          img: "/sports-and-education/sports-1.jpg"
        },
        {
          heading: "Boys’ Cricket Team Wins Championship Title",
          discription: "The boys’ cricket team of Ace College of Engineering has emerged as champions in a prestigious intercollegiate cricket tournament. With exceptional teamwork, strategic gameplay, and unwavering determination, the team secured the title and brought great pride to the institution.",
          img: "/sports-and-education/sports-2.jpg"
        }
      ]
    },
    {
      label: sections.projects,
      direction: directions.left,
      marquee: [
        {
          text: "Projects",
          img: "/projects/Drone-John-C-Lindley-III.jpg"
        },
        {
          text: "Creativity",
          img: "/projects/l-intro-1683510614.jpg"
        },
        {
          text: "Projects",
          img: "/projects/Drone-John-C-Lindley-III.jpg"
        },
        {
          text: "Creativity",
          img: "/projects/l-intro-1683510614.jpg"
        }

      ],
      details: [
        {
          heading: "Creativity",
          discription: "Play engages the world for curiosity’s sake, for the purpose of trying something new, without fearing the consequences. Play is our word for pure research, for raw experimentation, and for harmless trial and error.",
          img: "/projects/l-intro-1683510614.jpg"
        },
        {
          heading: "Projects",
          discription: "Play engages the world for curiosity’s sake, for the purpose of trying something new, without fearing the consequences. Play is our word for pure research, for raw experimentation, and for harmless trial and error.",
          img: "/projects/Drone-John-C-Lindley-III.jpg"
        }
      ]
    }
  ]
  const [currentImg, setImg] = useState(Activites[0].details[0].img)





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
      width: 80,
      padding:"2px",
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
    setCursorText("Scroll");
    setCursorVariant("project");
  }

  function projectLeave() {
    setCursorText("");
    setCursorVariant("default");
  }
  function Enter() {
    setCursorText("Click Me");
    setCursorVariant("project");
  }

  function Leave() {
    setCursorText("");
    setCursorVariant("default");
  }









  return (
    <div className='w-full relative bg-indigo-400 py-10' ref={ref}>
      <motion.div
        variants={variants}
        className="circle fixed top-0 left-0 z-[100] flex flex-row items-center justify-center h-[10px] w-[10px] bg-transparent rounded-full pointer-events-none text-white text-[16px]"
        animate={cursorVariant}
        transition={spring}
      >
        <span className="cursorText">{cursorText}</span>
      </motion.div>

      {
        Activites.map((item, index) => (
          <div
            className='flex-col flex w-full border-solid scrollbar-hide'
            onClick={() => setHovered(item.label)}
            onMouseEnter={Enter}
            onMouseLeave={Leave}

          >
            <div
              className={`w-full border-t-2 border-b-2 font-Bangers transition-all duration-300 ${hovered === item.label ? 'bg-indigo-100 text-black border-none' : ''
                }`}
            >
              <Marquee pauseOnHover direction={item.direction} >
                {item.marquee.map((m, index) => (
                  <div className='flex-row flex align-middle' key={index}>
                    <h1 className='text-[80px] font-Bangers my-6'>{m.text}</h1>
                    <img
                      src={m.img}
                      className='w-56 object-cover rounded-[50px] max-h-28 my-6 mx-10'
                    />
                  </div>

                ))}
              </Marquee>
            </div>
            <div
              className={`w-full px-6 lg:px-8 bg-indigo-100 text-black transition-all duration-300 h-fit ${hovered === item.label ? 'block' : 'hidden'
                }`}
            >


              <div className='mx-auto grid w-full grid-cols-1 gap-x-10 lg:mx-auto lg:max-w-7xl lg:grid-cols-2 h-fit mt-5'>

                <div className="overflow-y-scroll h-60 mt-10 scroll-smooth scrollbar-hide">

                  {
                    item.details.map((detail, imgIndex) => (
                      <div className='w-full h-full' key={index}>
                        <motion.div
                          initial={{
                            opacity: "0",
                            scale: "0.3"
                          }}
                          whileInView={{
                            opacity: "1",
                            scale: "1",
                            transition: {
                              ease: "easeIn",
                              duration: "1s"
                            }
                          }}

                          className='h-fit' onViewportEnter={() => setImg(detail.img)} onMouseLeave={projectLeave} onMouseEnter={projectEnter}>
                          <h2 className='text-3xl font-medium'>{detail.heading}</h2>
                          <p className='mt-6 text-lg font-thin'>
                            {detail.discription}
                          </p>
                        </motion.div>
                      </div>

                    ))
                  }
                </div>




                <div className='w-full mx-auto'>
                  <img src={currentImg} className='w-3/4 h-60 object-cover object-center rounded-3xl mx-24' />
                </div>
              </div>



            </div>
          </div>
        ))
      }


    </div>
  )
}