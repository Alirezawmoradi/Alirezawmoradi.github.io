'use client';
import React from "react";
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
    return (
        <ul className='list-none hidden sm:flex flex-row gap-14 mt-2'>
            {
                menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <li className={`navigation-${item.href}`}>
                            <Link href={item.href}
                                  className={`hover:text-taupe text-[21px] font-medium mova uppercase tracking-[3px] cursor-pointer nav-links ${isActive ? 'text-french' : 'text-eerieBlack'}`}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}