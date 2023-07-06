import React, { useContext } from 'react'
import { CustomData } from '../../context/Context'

export default function BlogFormat1() {
    const {BlogImg,BlogContent} = useContext(CustomData)
  return (
    <div className='m-10 bg-slate-500 text-white '>
      <h2>{BlogContent.title}</h2>
      <img src={BlogImg} alt="img" className='h-1/3 w-1/3'/>
      <p>{BlogContent.description}</p>
    </div>
  )
}
