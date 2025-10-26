import Image from 'next/image'
import logo from '../../public/Logo.png'
import Link from 'next/link'
export default function Register() {
  return (
    <div className='flex flex-col justify-center items-center space-y-6'>
      <Image src={logo} width={192} placeholder='blur' alt='Logo image' />
      <h1 className='text-6xl font-bold'>Crea il tuo account!</h1>
      <form className='flex flex-col justify-center items-center space-y-6 w-1/6 border-2 border-blue-400 px-4 py-6 rounded-2xl bg-gray-200'>
        <h1 className='text-4xl font-bold'>Register</h1>
      
        <input
          type='text'
          className='border-2 border-b-gray-700 w-full h-10 rounded-2xl px-4'
          placeholder='Nome'
        />
        <input
          type='email'
          className='border-2 border-b-gray-700 w-full h-10 rounded-2xl px-4'
          placeholder='Email'
        />
      
        <input
          type='password'
          className='border-2 border-b-gray-700 w-full h-10 rounded-2xl px-4'
          placeholder='Password'
        />
        <button className='flex justify-center items-center border-2 border-blue-400 rounded-4xl px-4 py-2 w-full font-bold text-xl'>
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
