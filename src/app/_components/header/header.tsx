import React from "react";
import {TopNavigation} from "@/app/_components/header/top-navigation";

export const Header: React.FC = () => {
    return (
        <header className='border-b dark:border-base-content dark:border-opacity-5'>
            <div className='flex items-center justify-center'>
                <TopNavigation/>
            </div>
        </header>
    )
}