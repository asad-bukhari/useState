"use client"
import {useState} from 'react'

const UseState = () => {

    const [count,setcount]= useState(0);

    function increament(){
        if (count<20) {
            setcount(count+1);
        }
    }
    function decreament (){
        if (count>0) {
            setcount(count-1)
            
        }
    }

  return (
    <div>
        <h1>Counter : {count}</h1>
        <button className='m-4' onClick={increament}>Increament</button>
        <button onClick={decreament}>decreament</button>
    </div>
  )
}

export default UseState