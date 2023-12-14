import React from "react";
import {CardProps} from "@/app/_components/card/card.types";
import {motion} from 'framer-motion';
import classNames from "classnames";
import {fadeIn} from "@/app/_components/utils/motion";


export const Card: React.FC<CardProps> = ({index, title, className}: CardProps) => {
    const classes = classNames(
        'card',
        className,
        index,
        {'Frontend Developer': title},
    )
    return (
        <motion.div
            variants={fadeIn('right', 'spring', 0.5 * (index || 0), 0.75)}
            className='xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card'>
            <div data-options={JSON.stringify({
                max: 45,
                scale: 1,
                speed: 450,
            })}
                 className={classes}>
                <img
                    src={'/images/icons/frontend.png'}
                    alt={title}
                    className="w-16 h-16 object-contain"
                />
                <h3 className="text-taupe text-[18px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </motion.div>
    )
}