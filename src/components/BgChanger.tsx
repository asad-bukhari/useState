"use client"
import { useState } from "react"

const BgChanger = () => {
const [bg,setbg]=useState('green')
    function bgred(){
        setbg('red');
    }
  return (

    <div style={{backgroundColor:bg}}>
        <button onClick={bgred}>
            green
        </button>
    </div>
  )
}

export default BgChanger