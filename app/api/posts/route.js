import { firestore } from "@/app/firebase";
import { isPostValid } from "@/app/services/posts.server";
import revalidate from "@/app/services/revalidate";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { authOption } from "../auth/[...nextauth]/route";
import admin from 'firebase-admin'
// export async function GET(request, context) {
//     // const posts = await firestore.collection('posts').get();

//     // const responseData = {
//     //     posts: posts.docs.map(doc => {
//     //         const { title, body } = doc.data();
//     //         return {
//     //             id: doc.id,
//     //             title,
//     //             body
//     //         };
//     //     })
//     // };

//     // return new Response(JSON.stringify(responseData));
// }

export async function POST(request, context) {
    const body = await request.json()
    const session = await getServerSession(authOption);

    if (!(isPostValid(body))) {
        return new Response('Bad request', { status: 400 })
    }
    try {
        await firestore.collection('posts').doc().set({
            ...body,
            updateBy: session?.user,
            updateAt: admin.firestore.Timestamp.now()
        })
        await revalidate(request, ['/posts'])

        console.log('Post edit successfully');

        return new Response(JSON.stringify({ message: 'Post edit successfully' }), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error editing post: ', error);
        return new Response('Sever error', { status: 500 })

    }
}



// const { searchParams } = new URL(request.url)
// const search = searchParams.get('search') || '';
// const regex = new RegExp(search, 'i')
// return new Response(JSON.stringify({
//     search: search,
//     posts: Array.from({ length: 30 }).map((_, index) => {
//         return {
//             id: index + 1,
//             title: `Post ${index}`,
//             body: `Post ${index}`
//         }
//     }).filter(post => Object.values(post).some(field => regex.test(field.toString())))
// }));