'use client';
import React, {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const menuItems: NavigationMenuItem[] = [
    {
        title: 'About',
        href: '/about'
    }, {
        title: 'Projects',
        href: '/projects'
    }, {
        title: 'Contact',
        href: '/contact'
    }
]
export const TopNavigation: React.FC = () => {
    const pathname = usePathname();
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <ul className='list-none hidden sm:flex flex-row gap-14 mt-2'>
                {
                    menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.href} className={`navigation-${item.href}`}>
                                <Link href={item.href}
                                      className={`hover:text-taupe text-[21px] font-medium mova uppercase tracking-[3px] cursor-pointer nav-links ${isActive ? 'text-french' : 'text-eerieBlack'}`}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <div className='sm:hidden flex flex-1 w-screen justify-end items-center'>
                {
                    toggle ? (
                        <div
                            className={`p-10 bg-flashWhite opacity-[0.98] absolute top-0 left-0 w-screen h-[100vh] z-10 menu${toggle ? 'menu-open' : 'menu-close'}`}>
                            <div className='flex justify-end'>
                                <img
                                    src={'/images/icons/close.png'}
                                    alt='close'
                                    className='w-[22px] h-[22px] object-contain cursor-pointer'
                                    onClick={() => setToggle(!toggle)}
                                />
                            </div>
                            <ul className="list-none flex flex-col -gap-[1rem] items-start justify-end mt-[10rem] -ml-[35px]">
                                {
                                    menuItems.map((item) => {
                                        const isActive = pathname === item.href;
                                        return (
                                            <li key={item.href} className={`navigation-${item.href}`}>
                                                <Link href={item.href}
                                                      className={`text-[55px] font-bold arenq uppercase tracking-[1px] cursor-pointer ${isActive ? 'text-french' : 'text-eerieBlack'}`}
                                                      onClick={() => setToggle(!toggle)}
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    ) : (
                        <img
                            src={'images/icons/menu.png'}
                            alt="menu"
                            className="w-[34px] h-[34px] object-contain cursor-pointer"
                            onClick={() => setToggle(!toggle)}
                        />
                    )
                }
            </div>
        </>
    )
}