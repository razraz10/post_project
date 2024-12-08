"use client"

import { savePost } from '@/app/services/posts.client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function PostForm(props) {

    const [title, setTitle] = useState(props.title || '')
    const [body, setBody] = useState(props.body || '')
    const { push } = useRouter()

    async function onSubmit(e) {
        e.preventDefault()
        try{
            await savePost({ id: props.id, title, body })
            alert('Post edit')
            push('/posts')
        }catch(error){
            console.error(error);
        }
    }




    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='postForm__block'>
                    <label className='postForm__label'>Title</label>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title' className='postForm__input' />
                </div>
                <div className='mb-4'>
                    <label className='postForm__label'>Body</label>
                    <textarea rows={20} value={body} onChange={(e) => setBody(e.target.value)} placeholder='body' className='postForm__input' />
                </div>
                <button type='submit' className='btn'>SEND</button>
            </form>
        </div>
    )
}
