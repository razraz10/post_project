import React from 'react'
import PostForm from './PostForm'
import { getPost } from '@/app/services/posts.server';

export const metadata = {
  title: "Edit post | tutorial",
  description: "Edit post description",
};



export default async function Edit({ params: { id } }) {

  const post = await getPost(id)
  return (
    <div>

      <h1>Edit:{id}</h1>

      <PostForm id={id} title={post.title} body={post.body} />
    </div>
  )
}
