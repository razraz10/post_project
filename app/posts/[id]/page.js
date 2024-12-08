import PostAction from '@/app/components/PostAction'
import { getPost } from '@/app/services/posts.server'
import Link from 'next/link'
import React from 'react'

// export const revalidate = 3;


export function generateMetadata({ params: { id } }) {
    return {
        title: `Post ${id}`,
        description: `Post description ${id}`,
    }
}

export default async function PageId({ params: { id } }) {
    const { title, body, updateBy, updateAt } = await getPost(id)
    const updateAtString = updateAt.toDate().toLocaleString('en-GB')
    return (
        <div>
            <header className='flex items-center mb-6'>
                <div>
                    <h1>{title}</h1>
                    <div className='text-sm'>{updateBy?.name} {updateAtString}</div>
                </div>
                <PostAction id={id} />
            </header>
            <p>{body}</p>
        </div>
    )
}
