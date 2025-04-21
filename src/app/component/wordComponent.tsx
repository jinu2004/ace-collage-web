import { motion, useTransform } from "framer-motion";


interface WordProps {
    children: React.ReactNode;
}

export const Word: React.FC<WordProps> = ({ children }) => {
    return (
        <span className="">
            <span className=""> </span>
            <motion.span initial={{ opacity: 0.5, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1, transition: { ease: "easeIn", duration: 1 } }}>{children}</motion.span>
        </span>
    )
}