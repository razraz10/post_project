import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function PostCard({ post }) {
    const { id, title, body } = post
    const titleForImage = title.replace(' ', '').slice(0, 2).toUpperCase();
    return (
        <li className='rounded-lg shadow-lg bg-neutral-700'>
            <Image className='rounded-t-lg' src={`https://fakeimg.pl/600x400?text=${titleForImage}`} priority={id == '29'} width="600" height="400" alt={title} />
            <Link href={`/posts/${id}`}>
                <div className='p-4'>
                    <h4 className='text-xl text-neutral-50 font-medium'>{title}</h4>
                    <p className='text-neutral-300'>
                        {body.slice(0, 50)}
                    </p>
                </div>
            </Link>
        </li>
    )
}
