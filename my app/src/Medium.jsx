import React from 'react'
import Image from './image/cs family.jpg'
import audio from'./Onakkaga-Poranthaenae.mp3'
import Video from'./yennachu.mp4'
function Medium() {
  return (
    <div>
      <img src={Image} controls></img>
      <audio src={Music} controls></audio>
      <video src={Video} controls></video>
    </div>
  )
}

export default Medium

