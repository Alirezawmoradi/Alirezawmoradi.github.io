import React from "react";

type TechsItemsProps = TechsItems & {};
export const TechsItems: React.FC<TechsItemsProps> = ({name, icon}: TechsItemsProps) => {
    return (
        <div
            className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
            {/* option?????? */}
            <div
                // options={{
                //     max: 45,
                //     scale: 1,
                //     speed: 450,
                // }}
                className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img src={icon} alt={name} className="w-16 h-16 object-contain" />
                <h3 className="text-taupe text-[18px] font-bold text-center">
                    {name}
                </h3>
            </div>
        </div>
    )
}