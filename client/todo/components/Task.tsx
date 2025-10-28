import Image from 'next/image'
import del from '../public/delete.png'
import edit from '../public/edit.png'
import { useTaskContext } from '@/contexts/taskContext'

type TaskItemProps = {
  id: number
  title: string
  is_completed: boolean // Add this prop
}
export default function Task({ id, title, is_completed }: TaskItemProps) {
  const {
    deleteTask,
    setIsEditPopUpOpen,
    setSelectedTaskId,
    setEditNomeTask,
    setCompleted

  } = useTaskContext()


  return (
    <div className='flex justify-between items-center w-full px-4 my-2 border-b-2 border-gray-200 pb-2'>
      <input
        type='checkbox'
        // 1. Use the prop for the checked status
        checked={is_completed}
        // 2. Call setCompleted directly from context
        //    and pass the new checked value (e.target.checked)
        onChange={(e) => setCompleted(id, e.target.checked)}
        className='w-4 h-4'
      />
      <div className='flex flex-col justify-center items-center'>
        <h1 className={`${is_completed ? 'line-through text-gray-400' : ''}`}>
          {title}
        </h1>
      </div>
      <div className='flex justify-center items-center space-x-2'>
        <button
          onClick={() => {
            setSelectedTaskId(id)
            setEditNomeTask(title)
            setIsEditPopUpOpen(true)
          }}
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
