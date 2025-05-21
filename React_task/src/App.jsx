import React from 'react'
import './App.css'
import Child from './Child'
import { useState } from 'react'

function App() {
  const [count,setCount] = useState(0)
  const handleClick=()=>{setCount(count+1)}


  const user=[
    {id:1,Name:"Guru",Age:19},
    {id:2,Name:"Prabhakaran",Age:29}
  ]


  return (
  <>
  {/*props*/}
     {/* <Child Name={"Guru Prasanthini"} Age={19} Gender={"Female"}/>
      <br/>
      <Child Name={"Prabhakaran"} Age={29} Gender={"Male"}/> */}
      {/* <br/> */}

      <Child login={user}/>
    <div>{count}</div>
    <button onClick={handleClick}>increase value</button>

    <button onClick={()=>setCount(count-1)}>decrement value</button>
    </>
  )
}

export default App


































