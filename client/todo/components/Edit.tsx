import { useTaskContext } from "@/contexts/taskContext"
export default function Edit() {
  const { editNomeTask, setEditNomeTask, updateTask, setIsEditPopUpOpen,selectedTaskId } =
    useTaskContext()
  return (
    <form className='flex flex-col justify-center items-center space-y-6  px-8 py-6 rounded-2xl bg-gray-200'>
      <input
        type='text'
        value={editNomeTask}
        onChange={(e) => setEditNomeTask(e.target.value)}
        className='border-2 border-b-gray-700 w-full h-10 rounded-2xl px-4'
        placeholder='Titolo'
      />
      <div className='flex justify-center items-center'>
        <button
          type='button'
          onClick={() => {
            if (selectedTaskId) {
              updateTask(selectedTaskId)
              setIsEditPopUpOpen(false)
            }
          }}
          className='flex justify-center items-center  rounded-4xl px-4 py-2 w-full font-bold text-xl'
        >
          Salva Modifiche
        </button>
        <button
          type='button'
          onClick={() => setIsEditPopUpOpen(false)}
          className='flex justify-center items-center  rounded-4xl px-4 py-2 w-full font-bold text-xl'
        >
          Annulla
        </button>
      </div>
    </form>
  )
}