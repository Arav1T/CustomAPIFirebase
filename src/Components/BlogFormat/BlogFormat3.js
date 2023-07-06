import React, { useContext } from 'react'
import { CustomData } from '../../context/Context'

export default function BlogFormat3() {
    const {BlogImg,BlogContent} = useContext(CustomData)
  return (
    <div className='m-10 bg-slate-500 text-white flex'>
      <div>
      <h2>{BlogContent.title}</h2>
      <p>{BlogContent.description}</p>
    </div>
      <div >
      <img src={BlogImg} alt="img" />
    </div>
    </div>
  )
}
