

// export async function getPosts() {
//     const posts = await firestore.collection('posts').get();

//     const responseData = {
//         posts: posts.docs.map(doc => {
//             const { title, body } = doc.data();
//             return {
//                 id: doc.id,
//                 title,
//                 body
//             };
//         })
//     };

//     return responseData;
// }

// export async function getPost(id) {
//     //  const id = context.params.postId;

//         const document = await firestore.collection('posts').doc(id).get();
//         const data = document.data();
    
//         if (!(document.exists && data)) {
//             redirect('/posts')
//         }
//         return new Response(JSON.stringify({
//             id: document.id,
//             title: data.title,
//             body: data.body,
//         }));
// }

// export function isPostValid(post){
//     return (post.title && post.body && post.title.length>3 && post.body.length>3)
// }

export async function savePost(post) {
    try {
        const method = post?.id ? 'PUT': 'POST'
        const response = await fetch(`/api/posts/${post?.id || ''}`, {
            method,
            headers: {
                'Context-Type': 'application/json',
            }, 
            body: JSON.stringify(post),
        })
        if (!response.ok) {
            alert('network not ok')
            return
        }
        return response.json()
    }catch(e){
        console.error(e);
        alert('ERROR')
    }
}

export async function deletePost(id){
    try{
      const response = await fetch(`/api/posts/${id}`,{
        method: 'DELETE'
      })

      if(!response.ok){
        alert('Network response not ok')
        return 
      }

      return response.json()

    }catch(e){
        console.error(e);
        alert('ERROR')
        return 
    }
}