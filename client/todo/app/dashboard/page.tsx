import Footer from '@/components/Footer'
import Headbar from '@/components/Headbar'
import Task from '@/components/Task'
import Edit from "../../components/Edit"
export default function Dashboard() {
  return (
    <>
      <div className='relative min-h-screen w-full'>
        <Headbar />
        <main className='flex flex-col justify-center items-center pb-20 w-full'>
          <h1 className='font-bold text-3xl mt-4'>Da fare (Attivi)</h1>
          <Task />
          <h1 className='font-bold text-3xl'>Completati (Finiti)</h1>
          <Task />
        </main>
        <div className='fixed bottom-0 left-0 w-full'>
          <Footer />
        </div>
        {/* <div
          className='
              fixed inset-0                   
              flex justify-center items-center 
              bg-black/50                      
            ' */}
          {/* // Opzionale: clicca sullo sfondo per chiudere
          // onClick={() => setIsEditModalOpen(false)} */}
        {/* > */}
          {/* <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Edit />
          </div> */}
        {/* </div> */}
      </div>
    </>
  )
}