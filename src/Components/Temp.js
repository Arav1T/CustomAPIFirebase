import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CustomData } from '../context/Context'

export default function Temp(props) {
  const {setBlog,setDelete} = useContext(CustomData)
  const OnBlogEdit=()=>{
    setBlog(props.element.title)
  }
  const onDelete=()=>{
      setDelete(props.element.title)
  }
  return (
    <div className='bg-slate-200 hover:shadow-lg hover:shadow-slate-600 flex justify-between border-y-2 border-gray-500 mt-4 p-3'>
      <div className='space-y-2'>
      <h3 className='text-sm font-medium'>{props.element.title}</h3>
      <ul className='flex space-x-2'>
        <li className='border-2 border-red-400 bg-white text-red-400 p-1 rounded-xl ' >{!props.element.KeyW1 ? "helath":props.element.KeyW1}</li>
        <li className='border-2 border-green-400 bg-white text-green-400 p-1 rounded-xl ' >{!props.element.KeyW2 ? "Business":props.element.KeyW2}</li>
        <li className='border-2 border-yellow-400 bg-white text-yellow-400 p-1 rounded-xl ' >{!props.element.KeyW3 ? "Manufacturing":props.element.KeyW3}</li>
        <li className='border-2 border-purple-400 bg-white text-purple-400 p-1 rounded-xl ' >{!props.element.KeyW4 ? "TextBook":props.element.KeyW4}</li>
      </ul>
      </div>
      <div className='space-y-2'>
      <div className='bg-slate-400 text-white px-1 rounded-lg hover:shadow-xl hover:shadow-slate-500'>
        <button onClick={OnBlogEdit}> <Link to="/CreateBlog">Write</Link> </button>
      </div>
      <div className='bg-slate-400 text-white px-1 rounded-lg hover:shadow-xl hover:shadow-slate-500'>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
    </div>
  )
}

