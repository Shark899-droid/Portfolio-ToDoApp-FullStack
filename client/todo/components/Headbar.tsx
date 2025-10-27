"use client"
import Link from 'next/link'
import { useEffect } from 'react'
export default function Headbar() {



  return (
    <div className='flex justify-between items-center bg-gray-200 h-20 px-2'>
      <span className='font-bold'>Ciao,{localStorage.getItem("name")||"Utente"}!</span>
      <Link href={"/login"} className='border-2 border-blue-400 rounded-4xl px-4 font-bold text-l'>
        Logout
      </Link>
    </div>
  )
}