import Link from 'next/link'
import React from 'react'
import PostCard from '../components/PostCard'
import { getPosts } from '@/app/services/posts.server'
import RestrictedContent from '../components/RestrictedContent';
import admin from 'firebase-admin'
// export const revalidate = 3;

export const metadata = {
    title: "Posts | tutorial",
    description: "Posts description",
};



export default async function Posts() {


    const postStructure = {
        id: 0,
        title: '',
        body: '',
        updateBy:{
            name: ''| null,
            email: '' | null,
            image: '' | null
        },
        updateAt: admin.firestore.Timestamp
    };

    const posts = await getPosts().then((data) =>
        data.posts.map((post) => ({ ...postStructure, ...post }))
    );

    return (
        <div>
            <header className='flex items-center mb-6'>
                <h1>Posts</h1>
                <RestrictedContent>
                    <Link href="/posts/new" className='btn ml-auto'>NEW POST</Link>
                </RestrictedContent>
            </header>

            <ul className='grid grid-cols-3 gap-3'>
                {posts.map((post) => (
                    <PostCard post={post} key={posts.id} {...posts} />
                ))}
            </ul>

        </div>
    )
}
