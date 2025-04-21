'use client'
import { motion, useAnimation, useInView } from 'framer-motion'

export default function BentoGrid2() {

    return (
        <div className="relative m-auto w-full h-full">
            <div
                aria-hidden="true"
                className="lg:absolute lg:inset-y-0"
            >
                <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8  lg:left-1/2  lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-4">
                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-4">
                            <div className="w-64 h-32 overflow-hidden rounded-3xl sm:opacity-0 lg:opacity-100">
                                <motion.img
                                    whileHover={{ scale: 1.3, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                                    whileTap={{ scale: 0.9, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                                    alt=""
                                    src="/gridgifs/9n7sc2-ezgif.com-crop (1).gif.gif"
                                    className="size-full object-cover"
                                />
                            </div>
                            <div className="w-64 h-32 overflow-hidden rounded-3xl transform -translate-x-8">
                                <motion.img
                                    whileHover={{ scale: 1.3, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                                    whileTap={{ scale: 0.9, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                                    alt=""
                                    src="/gridgifs/gif1-ezgif.com-crop.gif.gif"
                                    className="size-full object-cover"
                                />
                            </div>
                            <div className="w-64 h-32 overflow-hidden rounded-3xl">
                                <motion.img
                                    whileHover={{ scale: 1.3, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                                    whileTap={{ scale: 0.9, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                                    alt=""
                                    src="/gridgifs/gif5-ezgif.com-crop.gif.gif"
                                    className="size-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-4">
                            <div className="w-64 h-32 overflow-hidden rounded-3xl">
                                <motion.img
                                    whileHover={{ scale: 1.3, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                                    whileTap={{ scale: 0.9, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                                    alt=""
                                    src="/gridgifs/labAiro-ezgif.com-crop.gif.gif"
                                    className="size-full object-cover"
                                />
                            </div>
                            <div className="w-64 h-32 overflow-hidden rounded-3xl -translate-x-8">
                                <motion.img
                                    whileHover={{ scale: 1.3, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                                    whileTap={{ scale: 0.9, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                                    alt=""
                                    src="/gridgifs/gif3-ezgif.com-crop.gif.gif"
                                    className="size-full object-cover"
                                />
                            </div>
                            <div className="w-64 h-32 overflow-hidden rounded-3xl">
                                <motion.img
                                    whileHover={{ scale: 1.3, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                                    whileTap={{ scale: 0.9, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                                    alt=""
                                    src="/gridgifs/gif4-ezgif.com-optimize.gif.gif"
                                    className="size-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-4">
                            <div className="w-64 h-32 overflow-hidden rounded-3xl">
                                <motion.img
                                    whileHover={{ scale: 1.3, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                                    whileTap={{ scale: 0.9, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                                    alt=""
                                    src="/gridgifs/gif5-ezgif.com-crop.gif.gif"
                                    className="size-full object-cover"
                                />
                            </div>
                            <div className="w-64 h-32 overflow-hidden rounded-3xl -translate-x-8">
                                <motion.img
                                    whileHover={{ scale: 1.3, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                                    whileTap={{ scale: 0.9, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                                    alt=""
                                    src="/gridgifs/gif8-ezgif.com-crop.gif.gif"
                                    className="size-full object-cover"
                                />
                            </div>
                            <div className="w-64 h-32 overflow-hidden rounded-3xl sm:opacity-0 lg:opacity-100">
                                <motion.img
                                    whileHover={{ scale: 1.3, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                                    whileTap={{ scale: 0.9, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                                    alt=""
                                    src="/gridgifs/9n7sc2-ezgif.com-crop (1).gif.gif"
                                    className="size-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)

}





