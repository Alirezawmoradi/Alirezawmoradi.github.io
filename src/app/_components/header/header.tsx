import React from "react";
import {TopNavigation} from "@/app/_components/header/top-navigation";

export const Header: React.FC = () => {
    return (
        <nav
            className='sm:px-16 px-6 w-full flex items-center py-2 fixed top-0 z-20 bg-flashWhite sm:opacity-[0.97] xs:h-[12vh]'>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <span>Logo</span>
                <TopNavigation/>
            </div>
        </nav>
    )
}