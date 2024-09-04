import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className='w-fill h-[100px] bg-red-600'>
    </header>

    <main className='h-fill flex'>
      
      {/* barra lateral */}
      <div className='w-[15%] h-fill bg-teal-500 flex flex-col items-center p-6'>
        <div className='w-32 h-32 bg-teal-100 m-5'></div>
        <div className='w-32 h-32 bg-teal-100 m-5'></div>
        <div className='w-32 h-32 bg-teal-100 m-5'></div>
      </div>

      {/* itens principais */}
      <div className='m-10 ml-20 mr-20 grid grid-cols-6 items-start'>

        <div className='w-32 h-32 bg-teal-500 flex-col flex justify-center items-center mr-10'>
          <div className='w-20 h-8 bg-white m-2'></div>
          <div className='w-20 h-8 bg-white m-2'></div>
        </div>

        <div className='w-32 h-32 bg-teal-500 flex-col flex justify-center items-center mr-10'>
          <div className='w-20 h-8 bg-white m-2'></div>
          <div className='w-20 h-8 bg-white m-2'></div>
        </div>

        <div className='w-32 h-32 bg-teal-500 flex-col flex justify-center items-center mr-10'>
          <div className='w-20 h-8 bg-white m-2'></div>
          <div className='w-20 h-8 bg-white m-2'></div>
        </div>

        <div className='w-32 h-32 bg-teal-500 flex-col flex justify-center items-center mr-10'>
          <div className='w-20 h-8 bg-white m-2'></div>
          <div className='w-20 h-8 bg-white m-2'></div>
        </div>

        <div className='w-32 h-32 bg-teal-500 flex-col flex justify-center items-center mr-10'>
          <div className='w-20 h-8 bg-white m-2'></div>
          <div className='w-20 h-8 bg-white m-2'></div>
        </div>

        <div className='w-32 h-32 bg-teal-500 flex-col flex justify-center items-center mr-10'>
          <div className='w-20 h-8 bg-white m-2'></div>
          <div className='w-20 h-8 bg-white m-2'></div>
        </div>
        
        <div className='w-32 h-32 bg-teal-500 flex-col flex justify-center items-center mr-10'>
          <div className='w-20 h-8 bg-white m-2'></div>
          <div className='w-20 h-8 bg-white m-2'></div>
        </div>

        <div className='w-32 h-32 bg-teal-500 flex-col flex justify-center items-center mr-10'>
          <div className='w-20 h-8 bg-white m-2'></div>
          <div className='w-20 h-8 bg-white m-2'></div>
        </div>

        <div className='w-32 h-32 bg-teal-500 flex-col flex justify-center items-center mr-10'>
          <div className='w-20 h-8 bg-white m-2'></div>
          <div className='w-20 h-8 bg-white m-2'></div>
        </div>

        <div className='w-32 h-32 bg-teal-500 flex-col flex justify-center items-center mr-10'>
          <div className='w-20 h-8 bg-white m-2'></div>
          <div className='w-20 h-8 bg-white m-2'></div>
        </div>

        <div className='w-32 h-32 bg-teal-500 flex-col flex justify-center items-center mr-10'>
          <div className='w-20 h-8 bg-white m-2'></div>
          <div className='w-20 h-8 bg-white m-2'></div>
        </div>

        <div className='w-32 h-32 bg-teal-500 flex-col flex justify-center items-center mr-10'>
          <div className='w-20 h-8 bg-white m-2'></div>
          <div className='w-20 h-8 bg-white m-2'></div>
        </div>
        <div className='w-32 h-32 bg-teal-500 flex-col flex justify-center items-center mr-10'>
          <div className='w-20 h-8 bg-white m-2'></div>
          <div className='w-20 h-8 bg-white m-2'></div>
        </div>

        <div className='w-32 h-32 bg-teal-500 flex-col flex justify-center items-center mr-10'>
          <div className='w-20 h-8 bg-white m-2'></div>
          <div className='w-20 h-8 bg-white m-2'></div>
        </div>

        <div className='w-32 h-32 bg-teal-500 flex-col flex justify-center items-center mr-10'>
          <div className='w-20 h-8 bg-white m-2'></div>
          <div className='w-20 h-8 bg-white m-2'></div>
        </div>

        <div className='w-32 h-32 bg-teal-500 flex-col flex justify-center items-center mr-10'>
          <div className='w-20 h-8 bg-white m-2'></div>
          <div className='w-20 h-8 bg-white m-2'></div>
        </div>

        <div className='w-32 h-32 bg-teal-500 flex-col flex justify-center items-center mr-10'>
          <div className='w-20 h-8 bg-white m-2'></div>
          <div className='w-20 h-8 bg-white m-2'></div>
        </div>

        <div className='w-32 h-32 bg-teal-500 flex-col flex justify-center items-center mr-10'>
          <div className='w-20 h-8 bg-white m-2'></div>
          <div className='w-20 h-8 bg-white m-2'></div>
        </div>

      </div>

    </main>

    </>
  )
}

export default App
