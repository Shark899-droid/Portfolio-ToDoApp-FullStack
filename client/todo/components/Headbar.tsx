"use client"
import Image from 'next/image'
import { useTaskContext } from '@/contexts/taskContext'
import logo from '../public/Logo2.png'
export default function Headbar() {
const {logout} = useTaskContext()



  return (
    <div className='flex justify-between items-center bg-gray-200 h-20 px-2'>
      <div className='flex justify-center items-center'>
        <Image src={logo} width={60} placeholder='blur' alt='Logo image' />
        <span className='font-bold'>
          Ciao,{localStorage.getItem('name') || 'Utente'}!
        </span>
      </div>
      <button
        onClick={() => logout()}
        className='border-2 border-blue-400 rounded-4xl py-4 font-bold text-l bg-blue-300'
      >
        Logout
      </button>
    </div>
  )
}