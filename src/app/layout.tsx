import './globals.css'
import {Poppins} from "next/font/google";
import localFont from "next/font/local";
import {Header} from "@/app/_components/header";

const poppins = Poppins({
    display: 'swap',
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins'
})
const arenq = localFont({
    src: [
        {
            path: '../../public/fonts/arenq.otf',
            style: 'normal'
        },
    ],
    variable: '--font-arenq'
})
const beckman = localFont({
    src: [
        {
            path: '../../public/fonts/beckman.otf',
            style: 'normal'
        },
    ],
    variable: '--font-beckman'
})
const mova = localFont({
    src: [
        {
            path: '../../public/fonts/mova.otf',
            style: 'normal'
        },
    ],
    variable: '--font-mova'
})
const overcamebold = localFont({
    src: [
        {
            path: '../../public/fonts/overcame-bold.woff',
            style: 'normal'
        },
    ],
    variable: '--font-overcamebold'
})
const overcameoutline = localFont({
    src: [
        {
            path: '../../public/fonts/overcame-outline.woff',
            style: 'normal'
        },
    ],
    variable: '--font-overcameoutline'
})

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en"
              className={`${poppins.variable} ${arenq.variable} ${beckman.variable} ${mova.variable} ${overcamebold.variable} ${overcameoutline.variable}`}>
        <body className="flex flex-col min-h-screen font-bold uppercase">
        <div className='relative z-0'>
            <Header/>
            <main>
                {children}
            </main>
        </div>
        </body>
        </html>
    )
}
