'use client'
import Card from '@/components/Card'
import UseState from '@/components/UseState'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {

const [bgclor, setbgclor]=useState('olive')
  
function bgred(){
  setbgclor('red')
}
function bgOrange(){
  setbgclor('Orange')
}
function bgLime(){
  setbgclor('Lime')
}
  return (
  <div className='w-full h-screen' style={{backgroundColor:bgclor}}>  
   <div className='flex justify-center mt-4'>
    <Card name='Asad Bukhari' age={26}/>
    <Card name='Muhammad Junaid' age={23}/>
    <Card name='Muhammad Moeez' age={1}/>
   </div>
   <div className='flex justify-center mt-4'>
    <UseState/>
   </div>
   
   <div className=' flex p-5 justify-center items-end'>
    <button className=' mx-4 border border-solid border-gray-800 py-3 px-2 rounded-xl' onClick={bgred}>Change as Red</button>
    <button className='border mx-4 border-solid border-gray-800 py-3 px-2 rounded-xl' onClick={bgOrange}>Change as Orange</button>
    <button className='border mx-4 border-solid border-gray-800 py-3 px-2 rounded-xl' onClick={bgLime}>Change as lime</button>
   </div>

   </div>

  )
}
