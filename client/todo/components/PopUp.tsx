export default function PopUp({text,color}:{text:string;color:string}) {
  return (
    <div className='w-full border-2 border-black rounded-2xl flex justify-center items-center font-bold h-10
     'style={{background:color}}>{text}</div>
  )
}