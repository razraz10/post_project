"use client"

import Link from "next/link"
import { deletePost } from "../services/posts.client"
import { useRouter } from "next/navigation"
import RestrictedContent from "./RestrictedContent"

export default function PostAction({ id }) {

    const { push } = useRouter()

    async function onDelete() {
        const deletedPost = await deletePost(id);

        if (deletedPost) {
            alert('Post deleted successfully');
            push('/posts');
        }
    }

    return (
        <RestrictedContent>
            <div className='ml-auto flex gap-4'>
                <Link className='btn' href={`/posts/${id}/edit`}>Edit</Link>
                <button onClick={onDelete} className='btn_delete'>DELETE</button>
            </div>
        </RestrictedContent>

    )


}