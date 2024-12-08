import Link from 'next/link'
import React from 'react'
import AppHeaderUser from './AppHeaderUser'

const MENU_ITEM=[
    {title: "Home", path:"/"},
    {title: "Posts", path:"/posts"},
    {title: "About", path:"/about"}
]

export default function Header() {
    return (
        <div>
            <nav className='bg-gray-800 px-5 py-5'>
                <div className='flex mx-auto max-w-5xl items-center'>
                    <ul className='flex gap-4'>
                        {MENU_ITEM.map(item=>(
                        <li key={item.path} className='text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium'> 
                        <Link href={item.path}>{item.title}</Link>
                        </li>
                        ))}
                    </ul>
                    <AppHeaderUser/>
                </div>
            </nav>
        </div>
    )
}

