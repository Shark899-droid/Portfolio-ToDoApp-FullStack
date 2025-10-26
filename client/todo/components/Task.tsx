import Image from "next/image"
import del from "../public/delete.png"
import edit from "../public/edit.png"
export default function Task() {
  return (
    <div className='flex justify-between items-center w-full px-4 my-2 border-b-2 border-gray-200 pb-2'>
      <input type='checkbox' className='w-4 h-4' />
      <div className='flex flex-col justify-center items-center'>
        <h1>Testo</h1>
        <h1>Descrizione</h1>
      </div>
      <div className='flex justify-center items-center space-x-2'>
        <Image src={edit} alt=''/>
        <Image src={del} alt=''/>
      </div>
    </div>
  )
}