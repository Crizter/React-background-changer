import React from 'react'
import { useState } from 'react'

export default function Backgr() {
  const [ color , setColor ] = useState("#FFFFFF")
   function changeBackground(color) { 
    setColor(color)    
   }
  return (  
    <div className = 'mt-72'   style={{ backgroundColor: color }} >
      <div className ="w-full h-screen ">
         
          
      </div>
          <div className='flex justify-center items-center'>
          <button onClick={() => changeBackground("blue")} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Blue</button>
          <button onClick={() => changeBackground("red")} type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Red</button>
          <button onClick={() => changeBackground("green")} type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Green</button>
          <button onClick={() => changeBackground("orange")} type="button" class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">Orange</button>
          <button onClick={() => changeBackground("pink")} type="button" class="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-pink-800">Pink</button>
          </div>
    </div>
   
  )
}


// useEffect, useRef and useCallback
