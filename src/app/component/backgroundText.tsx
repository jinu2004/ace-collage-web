'use client'
import { motion } from "framer-motion";

export default function BackgroundText() {
  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const textItems1 = ["DJ NIGHT", "RIDDIX X OURIXZ","DJ NIGHT", "RIDDIX X OURIXZ"];
  const textItems2 = ["HANAN SHAH & TEAM" , "HANAN SHAH & TEAM"];
  const textItems3 = ["THIRUMALI X THUNDWISER","THIRUMALI X THUNDWISER"];

  const renderMarqueeRow = (textArray: any[], fontClass: string) => (
    <div className="flex overflow-hidden whitespace-nowrap">
      {/* Duplicate container to create a seamless loop */}
      <motion.div
        className="flex gap-32 min-w-[200%]"
        variants={marqueeVariants}
        animate="animate"
      >
        {textArray.map((text, index) => (
          <h1 key={index} className={`text-9xl text-indigo-300 ${fontClass}`}>
            {text}
          </h1>
        ))}
        {textArray.map((text, index) => (
          <h1 key={`dup-${index}`} className={`text-9xl text-indigo-300 ${fontClass}`}>
            {text}
          </h1>
        ))}
      </motion.div>
    </div>
  );

  return (
    <div className="absolute top-[40%] md:top-[26%] left-0 w-full rotate-[-10deg] opacity-40 overflow-hidden">
      <div className="relative h-[100px] flex items-center">{renderMarqueeRow(textItems1, "font-Bangers")}</div>
      <div className="relative h-[100px] flex items-center mt-20">{renderMarqueeRow(textItems2, "font-doubleXcomp")}</div>
      <div className="relative h-[100px] flex items-center mt-20">{renderMarqueeRow(textItems3, "font-Bangers")}</div>
    </div>
  );
}