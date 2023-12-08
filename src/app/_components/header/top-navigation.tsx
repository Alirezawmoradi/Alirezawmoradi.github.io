'use client'
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const menuItems: NavigationMenuItem [] = [
    {
        title: 'صفحه اصلی',
        href: '/'
    }, {
        title: 'مهارت ها',
        href: '/skills'
    }, {
        title: 'پروژه ها',
        href: '/projects'
    }, {
        title: 'سوابق تحصیلی',
        href: '/education'
    }, {
        title: 'سوابق کاری',
        href: '/experiences'
    }, {
        title: 'درباره من',
        href: '/about'
    }, {
        title: 'ارتباط با من',
        href: '/contact'
    },
]
export const TopNavigation: React.FC = () => {
    const pathname = usePathname();
    return (
        <ul className='flex gap-x-8'>
            {
                menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return <li key={`navigation-${item.href}`}>
                        <Link href={item.href}
                              className={`dark:hover:text-primary transition-colors pb-2 ${isActive && 'border-b-2 dark:text-primary dark:border-primary/30'}`}
                        >
                            {item.title}
                        </Link>
                    </li>
                })
            }
        </ul>
    )
}