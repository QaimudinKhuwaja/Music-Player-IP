import React from 'react'
import MusicPlayer from './Components/MusicPlayer'
const page = () => {
  return (
    <div>
      <h1 className='text-gray-500 text-center'>Welcome to Music Player</h1>
      <h2 className='text-yellow-500 text-center'>Listen to your favorite songs</h2>
     
      <MusicPlayer />
      <h1 className='text-gray-500 text-center'>  Made by Qaimudin Khuwaja</h1>
    </div>  
  )
}

export default page