"use client"
import {signIn} from 'next-auth/react'

export default function SignInPage() {

    function handlerSignIn(){
        signIn('google')
    }

  return (
    <div>
        <h1>sign in</h1>
        <button onClick={handlerSignIn} className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>signIn with google</button>
    </div>
  )
}
