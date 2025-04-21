'use client'
import { useInView, useAnimation, motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Industries() {
    const scrollRef = useRef(null);
    const isInview = useInView(scrollRef, { once: true });
    const mainDivController = useAnimation();
    const divVarients = {
        hidden: { opacity: 0.5, x: 75 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "linear" },
        },
    };

    useEffect(() => {
        if (isInview) {
            mainDivController.start("visible");
        }
    }, [isInview]);

    return (
        <div className="bg-white pt-14 sm:pt-24">
            <div className="mx-auto px-6 lg:px-8 place-content-center flex justify-center flex-col w-full">
                <h2 className="text-3xl lg:text-5xl text-center font-bold text-gray-900  max-w-5xl mx-auto ">
                    We Collaborate with Leading  University and Companies
                </h2>
                <div className="mx-auto my-10 grid grid-cols-2 lg:grid-cols-5 items-center gap-x-8 sm:gap-x-10 gap-y-10 lg:mx-0 lg:max-w-none py-10">
                    <a href="#">
                        <img
                            alt="Transistor"
                            src="/logos/industriesLogo/microsoft.png"
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        />
                    </a>
                    <a href="#">
                        <img
                            alt="Reform"
                            src="/logos/industriesLogo/google.png"
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        />
                    </a>
                    <a href="#">
                        <img
                            alt="Tuple"
                            src="/logos/industriesLogo/tsc.PNG.png"
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        />
                    </a>
                    <a href="#">
                        <img
                            alt="SavvyCal"
                            src="/logos/industriesLogo/edys.PNG.png"
                            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                        />
                    </a>
                    <a href="#" className='col-span-2 lg:col-span-1'>
                        <img
                            alt="Statamic"
                            src="/logos/industriesLogo/ICT_Academy_Kerala.png"
                            className=" col-start-2 max-h-12 w-full object-contain sm:col-start-auto"
                        />
                    </a>
                </div>
            </div>




        </div>
    );
}