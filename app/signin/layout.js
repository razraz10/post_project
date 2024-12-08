import { getServerSession } from 'next-auth'
import React from 'react'
import { authOption } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function SingInLayout({children}) {
  const session = await getServerSession(authOption)
  if(session){
    redirect('/')
  }
  return (
    <div>
        {children}
    </div>
  )
}
