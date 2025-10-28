"use client"
import Image from 'next/image'
import logo from '../../public/Logo.png'
import Link from 'next/link'
import { useUserContext } from '@/contexts/userContext'
import PopUp from '@/components/PopUp'
export default function Login() {
  const {
    email,
    password,
    setEmail,
    setPassword,
    login,
    showErrorPopUp,

    showSuccessPopUp,
  } = useUserContext()
  return (
    <div className='flex flex-col justify-center items-center space-y-6'>
      <Image src={logo} width={192} placeholder='blur' alt='Logo image' />
      <h1 className='text-3xl font-bold'>Bentornato!</h1>
      <form className='flex flex-col justify-center items-center space-y-6 border-2 border-blue-400 px-6 py-6 rounded-2xl bg-gray-200'>
      {showErrorPopUp && <PopUp text="Something went wrong in the logging.Retry!!!" color='red'/>} 
      {showSuccessPopUp && <PopUp text="User logged in successfully" color='green'/>} 
        <h1 className='text-2xl font-bold'>Login</h1>
        {/* <label className='text-xl'>EMAIL</label> */}
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border-2 border-b-gray-700 w-full h-10 rounded-2xl px-4'
          placeholder='Email'
        />
        {/* <label className='text-xl'>PASSWORD</label> */}
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
          onClick={() => login()}
        >
          Accedi
        </button>
        <span>
          Non hai un account ?{' '}
          <Link className='text-blue-700' href='/register'>
            Registrati
          </Link>
        </span>
      </form>
    </div>
  )
}
