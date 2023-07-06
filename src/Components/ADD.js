import React, { useContext } from 'react'
import { CustomData } from '../context/Context'
import { useNavigate } from 'react-router-dom'


export default function ADD() {
  const navigate= useNavigate()
  const {AddContent,setAddContent,articles,setarticles} = useContext(CustomData)
  const Submit =(e)=>{
    e.preventDefault()
    setarticles([...articles,AddContent])
    navigate("/custom")

  }

  return (
    <div className='bg-slate-600 mt-6 text-white flex justify-center py-5 rounded-full w-3/4 ml-20'>
      <form onSubmit={Submit}>
        <div>
            <h4>Title</h4>
            <input type="text" className='border-2 pl-2 rounded-xl border-slate-400 text-black' onChange={(e)=>{setAddContent({...AddContent,title:e.target.value})}} placeholder='Write Titel'/>
        </div>
        <div>
        <h4>Key Word</h4>
        <ul>
            <li><input type="text" onChange={(e)=>{setAddContent({...AddContent,KeyW1:e.target.value})}} placeholder='Write KeyWord' className='border-2 pl-2 rounded-xl border-slate-400 text-black' /></li>
            <li><input type="text" onChange={(e)=>{setAddContent({...AddContent,KeyW2:e.target.value})}} placeholder='Write KeyWord' className='border-2 pl-2 rounded-xl border-slate-400 text-black' /></li>
            <li><input type="text" onChange={(e)=>{setAddContent({...AddContent,KeyW3:e.target.value})}} placeholder='Write KeyWord' className='border-2 pl-2 rounded-xl border-slate-400 text-black' /></li>
            <li><input type="text" onChange={(e)=>{setAddContent({...AddContent,KeyW4:e.target.value})}} placeholder='Write KeyWord' className='border-2 pl-2 rounded-xl border-slate-400 text-black' /></li>
        </ul>
        </div>
        <button className='bg-slate-400 hover:shadow-xl hover:shadow-white rounded-xl m-3 p-1'>submit</button>
      </form>
    </div>
  )
}

