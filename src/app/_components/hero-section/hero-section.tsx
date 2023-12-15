'use client';
import React from "react";
import {styles} from "@/tailwind/components/styles";
import {motion} from "framer-motion";

export const HeroSection: React.FC = () => {
    return (
        <>
            <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
                <img
                    src={'/images/backgrounds/bw-map.jpeg'}
                    alt="world map"
                    className="w-full h-full sm:block hidden object-cover"
                />
            </div>
            <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
                <img
                    src={'/images/backgrounds/world-map.png'}
                    alt="world map"
                    className="w-full h-full sm:hidden block object-cover"
                />
            </div>
            <section
                className="relative flex sm:flex-row flex-col w-full h-screen mx-auto sm:bg-hero bg-hero-mobile overflow-hidden">
                <div
                    className={`absolute inset-0 sm:top-[250px] top-[150px] lg:top-[150px] xl:top-[250px] ${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start justify-between gap-3`}>
                    <div>
                        <h1 className={`${styles.heroHeadText} text-eerieBlack poppins uppercase`}>
                            Hi, I'm{' '}
                            <span
                                className="sm:text-battleGray sm:text-[39px] text-eerieBlack text-[20px] mova extrabold uppercase mr-2">
                         Alireza
                        </span>
                            <span
                                className="sm:text-battleGray sm:text-[39px] text-eerieBlack text-[20px] mova extrabold uppercase">
                         Moradi
                        </span>
                        </h1>
                        <p className='text-eerieBlack medium lg:text-[27px] sm:text-[26px] xs:text-[20px] text-[11px] lg:leading-[40px] mt-2'>
                            FrontEnd Developer
                        </p>
                        <p className='text-eerieBlack medium lg:text-[15px] text-[7px] '>| React.js | Angular.js |
                            Flutter |</p>
                    </div>
                    <div className="w-screen flex flex-col items-start justify-center sm:-ml-[3rem] xxs:mt-4"></div>
                    <div></div>
                </div>
                <div>
                    <img
                        className="grayscale hover:grayscale-0 duration-500 absolute bottom-0 ml-[50vw] lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[63vw] sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
                        src={'/images/personal/Alirezaw.png'}
                        alt="shaquille"
                    />
                </div>
                <div className="absolute xs:bottom-10 bottom-1 w-full  flex justify-center items-center">
                    <a href="/about">
                        <div
                            className="w-[35px] h-[64px] rounded-3xl border-4  border-french border-dim flex justify-center items-start p-2">
                            <motion.div
                                animate={{
                                    y: [0, 24, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                }}
                                className="w-3 h-3 rounded-full bg-taupe mb-1"
                            />
                        </div>
                    </a>
                </div>
            </section>
        </>

    )
}