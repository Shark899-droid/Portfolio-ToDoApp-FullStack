import Image from 'next/image'
import del from '../public/delete.png'
import edit from '../public/edit.png'
import { useTaskContext } from '@/contexts/taskContext'

export default function Task({ title, id }: { title: string; id: number }) {
  const {
    deleteTask,
    setIsEditPopUpOpen,
    isEditPopUpOpen,
    setSelectedTaskId,
    setEditNomeTask,
  } = useTaskContext()


  return (
    <div className='flex justify-between items-center w-full px-4 my-2 border-b-2 border-gray-200 pb-2'>
      <input type='checkbox' className='w-4 h-4' />
      <div className='flex flex-col justify-center items-center'>
        <h1>{title}</h1>
      </div>
      <div className='flex justify-center items-center space-x-2'>
        <button
          onClick={()=>{
            
            setSelectedTaskId(id)
            setEditNomeTask(title) // Pre-fill the edit field with current title
            setIsEditPopUpOpen(true)
          }
          }
          
          className='cursor-pointer'
          type='button'
        >
          <Image src={edit} alt='Edit task' />
        </button>
        <button
          onClick={() => deleteTask(id)}
          className='cursor-pointer'
          type='button'
        >
          <Image src={del} alt='Delete task' />
        </button>
      </div>
    </div>
  )
}
