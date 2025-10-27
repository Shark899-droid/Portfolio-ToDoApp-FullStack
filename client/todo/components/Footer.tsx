import { useTaskContext } from '@/contexts/taskContext'
export default function Footer() {
  const { nomeTask, setNomeTask,addTask } = useTaskContext()
  return (
    <div className='flex justify-between items-center bg-gray-200 h-20 px-2'>
      <input
        type='text'
        value={nomeTask}
        onChange={(e)=>setNomeTask(e.target.value)}
        className='border-2 border-b-gray-700 h-10 rounded-2xl px-4 w-full mr-4'
        placeholder='Es.Comprare il latte'
      />
      <button type='button' className='border-2 border-blue-400 rounded-4xl px-4 py-2 font-bold text-l' onClick={()=>addTask()}>
        Aggiungi

      </button>
    </div>
  )
}