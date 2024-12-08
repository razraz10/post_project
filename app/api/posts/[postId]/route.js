import { firestore } from "@/app/firebase";
import { isPostValid } from "@/app/services/posts.server";
import revalidate from "@/app/services/revalidate";
import { getServerSession } from "next-auth";
import admin from 'firebase-admin'
import { authOption } from "../../auth/[...nextauth]/route";
//GET 
// export async function GET(request, context) {
//     // const id = context.params.postId;

//     // const document = await firestore.collection('posts').doc(id).get();
//     // const data = document.data();

//     // if (!(document.exists && data)) {
//     //     return new Response('Bad request', { status: 400 })
//     // }
//     // return new Response(JSON.stringify({
//     //     id: document.id,
//     //     title: data.title,
//     //     body: data.body, 
//     // }));
// }




//PUT
export async function PUT(request, context) {
    try {
        const id = context.params.postId;

        const post = await request.json()

        const session = await getServerSession(authOption);

        if (!(id && isPostValid(post))) {
            return new Response('Bad request', { status: 400 })
        }

        await firestore.collection('posts').doc(id).set({
            title: post.title,
            body: post.body,
            updateBy: session?.user,
            updateAt: admin.firestore.Timestamp.now()
        })

        await revalidate(request, ['/posts',`/posts/${id}`])

        console.log('Post edit successfully');

        return new Response(JSON.stringify({ message: 'Post edit successfully' }), {
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Error editing post: ', error);
        return new Response('Server error', { status: 500 })
    }
}


export async function DELETE(request, context) {
    const id = context.params.postId;
    if (!id) {
        return new Response('Bad request', { status: 400 })
    }

    try {
        await firestore.collection('posts').doc(id).delete();

        await revalidate(request, ['/posts',`/posts/${id}`])

        console.log('Post deleted successfully');

        return new Response(JSON.stringify({ message: 'Post deleted successfully' }), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error deleting post', error);
        return new Response('Server error', { status: 500 })
    }
}
