import React, { useContext } from 'react'
import { CustomData } from '../../context/Context'

export default function BlogFormat2() {
    const {BlogImg,BlogContent} = useContext(CustomData)
  return (
    <div className='m-10 bg-slate-500 text-white '>
      <h2>{BlogContent.title}</h2>
      <div className='flex'>
      <img src={BlogImg} alt="img" />
      <p>{BlogContent.description}</p>
    </div>
    </div>
  )
}
