import React from 'react'

export default function revalidate(request, paths) {
    const origin = request.headers.get('origin')

    return fetch(`${origin}/api/revalidate`,{
        cache: 'no-cache',
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
             'Cookie': request.cookies.toString()
        },
        body: JSON.stringify({
            secret: process.env.REVALIDATE_SECRET,
            paths
        })
    })
}
