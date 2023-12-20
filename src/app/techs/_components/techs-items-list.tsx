import React from "react";
import {TechsItems} from "@/app/techs/_components/techs-items";

type TechsItemsProps = {
    techs: TechsItems[];
}
export const TechsItemList: React.FC<TechsItemsProps> = ({techs}: TechsItemsProps) => {
    return (
        <div className="flex flex-wrap justify-center gap-10 mt-14">
            {techs.map((technology) => (
                <div className="w-28 h-28" key={technology.name}>
                    <TechsItems name={technology.name} icon={technology.icon}/>
                </div>
            ))}
        </div>
    )
}