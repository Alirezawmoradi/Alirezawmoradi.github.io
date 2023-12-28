import React from "react";
import {SkillsCardProps} from "@/app/about/_components/skills-card.types";
import {fadeIn} from "@/app/_components/utils/motion";
import { motion } from 'framer-motion';


export const SkillsCard: React.FC<SkillsCardProps> = ({index, title, icon}: SkillsCardProps) => {
    return(
        <motion.div
            variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
            className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
            animate={{
                max: 45,
                scale: 1,
                speed: 450,
            }}>
            <div className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                <h3 className="text-taupe text-[18px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </motion.div>
    )
}