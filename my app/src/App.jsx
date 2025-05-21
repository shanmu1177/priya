import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Medium from'./image/cs family.jpg' 
import Music from'./Onakkaga-Poranthaenae.mp3'
import Video from'./yennachu.mp4'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <img src={Medium} alt=""/>
      <audio src={Music} controls></audio>
      <video src={Video} controls></video>
    </div>
    </>
  )
}

export default App
