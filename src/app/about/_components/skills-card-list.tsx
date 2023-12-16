import React from "react";
import {SkillsItems} from "@/types/skills-items.types";
import {SkillsCard} from "@/app/about/_components/skills-card";

export type SkillsCardProps = {
    skills: SkillsItems[];
}

export const SkillsCardList: React.FC<SkillsCardProps> = ({skills}: SkillsCardProps) => {
    return (
        <div className='flex flex-wrap justify-center xl:justify-center gap-6 mt-10'>
            {
                skills.map((skill) => (
                    <SkillsCard key={skill.index} {...skill}/>
                ))
            }
        </div>
    )
}
