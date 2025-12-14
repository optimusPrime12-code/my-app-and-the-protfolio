"use client"
import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
} from 'react-icons/hi2';

import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const navlinks = [
    { id: 1, name: 'home', path: '/', icon: <HiHome></HiHome> },
    { id: 2, name: 'about', path: '/about', icon: <HiUser /> },
    { id: 3, name: 'services', path: '/services', icon: <HiRectangleGroup /> },
    { id: 4, name: 'work', path: '/work', icon: <HiViewColumns /> },
    {
        id: 5,
        name: 'testimonials',
        path: '/testimonials',
        icon: <HiChatBubbleBottomCenterText />,
    },
    {
        id: 6,
        name: 'contact',
        path: '/contact',
        icon: <HiEnvelope />,
    }
];


const Nav = () => {

    const handleClick = (path: string) => {
        console.log(path)
    }


    const router = useRouter()
    const pathname = usePathname()

    return (

        <nav className='flex flex-col items-center xl:justify-center
            gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%]
            z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen        
        '>
            <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center 
            gap-y-10 px-4 md:px-40 xl:px-0 h-20
            xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl
             xl:text-xl xl:rounded-full'>
                {navlinks.map((link) => {
                    return <Link key={link.id} href={link.path} className={`${link.path == pathname && 'text-red-500'} hover:text-red-500`}>
                        <div>
                            {link.icon}
                        </div>
                    </Link>
                })}
            </div>
        </nav>
    )
}


export default Nav