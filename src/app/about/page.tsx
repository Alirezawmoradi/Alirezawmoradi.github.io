'use client';
import {motion} from "framer-motion";
import {SkillsCardList} from "@/app/about/_components/skills-card-list";
import {Skills} from "@/data/skills";
import {fadeIn, textVariant} from "@/app/_components/utils/motion";
import React from "react";
import SectionWrapper from "@/app/_components/hoc/section-wrapper";


const About: React.FC = () => {
    return (
        <div className="bg-about bg-cover bg-center bg-no-repeat">
            <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
                <div className=" -mt-[6rem]">
                    <motion.div variants={textVariant()}>
                        <p className='sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins'>Introduction</p>
                        <h2 className='text-eerieBlack font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins'>Overview.</h2>
                    </motion.div>
                    <motion.p
                        variants={fadeIn('', '', 0.1, 1)}
                        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] font-normal">
                        I am a Front-end Developer with 2 years of programming experience and familiarity with
                        mobile
                        app development using the Flutter framework. I am interested in solving challenges and
                        bugs,
                        as
                        well as learning new technologies.
                        I strongly prefer teamwork over solo endeavors and thrive in collaborative environments.
                    </motion.p>
                    <SkillsCardList skills={Skills}/>
                </div>
            </div>
        </div>
    )
};
export default SectionWrapper(About, 'about');

