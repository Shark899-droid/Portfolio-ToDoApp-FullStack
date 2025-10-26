export default function Edit() {
  return (
    <form className='flex flex-col justify-center items-center space-y-6  px-8 py-6 rounded-2xl bg-gray-200'>
      <input
        type='text'
        className='border-2 border-b-gray-700 w-full h-10 rounded-2xl px-4'
        placeholder='Titolo'
      />
      <div className="flex justify-center items-center">
        <button className='flex justify-center items-center  rounded-4xl px-4 py-2 w-full font-bold text-xl'>
          Salva Modifiche
        </button>
        <button className='flex justify-center items-center  rounded-4xl px-4 py-2 w-full font-bold text-xl'>
          Annulla
        </button>
      </div>
    </form>
  )
}