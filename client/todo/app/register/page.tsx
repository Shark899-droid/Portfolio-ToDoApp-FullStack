"use client"
import Image from 'next/image'
import logo from '../../public/Logo.png'
import Link from 'next/link'
import PopUp from '@/components/PopUp'
import { useUserContext } from '@/contexts/userContext'
export default function Register() {
  const {
    name,
    email,
    password,
    setEmail,
    setPassword,
    register,
    setName,
    showErrorPopUp,

    showSuccessPopUp,

  } = useUserContext()

  return (
    <div className='flex flex-col justify-center items-center space-y-6'>
      <Image src={logo} width={192} placeholder='blur' alt='Logo image' />
      <h1 className='text-3xl font-bold'>Crea il tuo account!</h1>
      <form className='flex flex-col justify-center items-center space-y-6  border-2 border-blue-400 px-6 py-6 rounded-2xl bg-gray-200'>
      {showErrorPopUp && <PopUp text="Something went wrong in the registration" color='red'/>} 
      {showSuccessPopUp && <PopUp text="User registered successfully" color='green'/>} 
        <h1 className='text-2xl font-bold'>Register</h1>

        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border-2 border-b-gray-700 w-full h-10 rounded-2xl px-4'
          placeholder='Nome'
        />
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border-2 border-b-gray-700 w-full h-10 rounded-2xl px-4'
          placeholder='Email'
        />

        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='border-2 border-b-gray-700 w-full h-10 rounded-2xl px-4'
          placeholder='Password'
        />
        <button
        type='button'
          className='flex justify-center items-center border-2 border-blue-400 rounded-4xl px-4 py-2 w-full font-bold text-xl'
          onClick={() => register()}
        >
          Registrati
        </button>
        <span>
          Non hai un account ?
          <Link className='text-blue-700' href='/login'>
            Accedi
          </Link>
        </span>
      </form>
    </div>
  )
}
