export default function Footer() {
  return (
    <div className='flex justify-between items-center bg-gray-200 h-20 px-2'>
      <input
        type='text'
        className='border-2 border-b-gray-700 h-10 rounded-2xl px-4 w-full mr-4'
        placeholder='Es.Comprare il latte'
      />
      <button className='border-2 border-blue-400 rounded-4xl px-4 py-2 font-bold text-l'>
        Aggiungi

      </button>
    </div>
  )
}