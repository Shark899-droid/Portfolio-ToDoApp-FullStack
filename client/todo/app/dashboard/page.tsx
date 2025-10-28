'use client'
import Footer from '@/components/Footer'
import Headbar from '@/components/Headbar'
import Task from '@/components/Task'
import Edit from '../../components/Edit'
import { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import { useTaskContext } from '@/contexts/taskContext'

export default function Dashboard() {
  const { getAllTasks, tasks, setIsEditPopUpOpen, isEditPopUpOpen } =
    useTaskContext()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    if (localStorage.getItem('token') === null) {
      redirect('/login')
    }
  }, [])

  useEffect(() => {
    getAllTasks()
  }, [])

  // Filter tasks outside of JSX
  const activeTasks = tasks?.filter((task: any) => !task.is_completed) || []
  const completedTasks = tasks?.filter((task: any) => task.is_completed) || []

  if (!isClient) return null // Prevent hydration mismatch

  return (
    <>
      <div className='relative min-h-screen w-full'>
        <Headbar />
        <main className='flex flex-col justify-center items-center pb-20 w-full'>
          <h1 className='font-bold text-3xl mt-4'>Da fare (Attivi)</h1>
          {activeTasks.length > 0 ? (
            activeTasks.map((task: any) => (
              <div key={task.id} className='w-full'>
                <Task
                  title={task.title}
                  id={task.id}
                  is_completed={task.is_completed}
                />
              </div>
            ))
          ) : (
            <div>Non hai task attive!</div>
          )}

          <h1 className='font-bold text-3xl mt-8'>Completati (Finiti)</h1>
          {completedTasks.length > 0 ? (
            completedTasks.map((task: any) => (
              <div key={task.id} className='w-full'>
                <Task
                  title={task.title}
                  id={task.id}
                  is_completed={task.is_completed}
                />
              </div>
            ))
          ) : (
            <div>Non hai ancora concluso nessuna task!</div>
          )}
        </main>
        <div className='fixed bottom-0 left-0 w-full'>
          <Footer />
        </div>
        {isEditPopUpOpen && (
          <div
            className='fixed inset-0 flex justify-center items-center bg-black/50'
            onClick={() => setIsEditPopUpOpen(false)}
          >
            <div
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
              onClick={(e) => e.stopPropagation()}
            >
              <Edit />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
