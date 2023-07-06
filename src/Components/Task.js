import React, { useState } from 'react'
import Taskitem from './Taskitem'
import Navbar from './Navbar'

export default function Task(props) {
  const [text, settext] = useState()
  const [content, setcontent] = useState([])

  
  let save = (e) => {
      e.preventDefault()
    
    let info={
      text : text,
      
    }
    
    setcontent([...content,info])
   
    
    
    
  }
  
  
  const Delete=(ky)=>{
    content.splice(ky-1,1)
    setcontent([...content])
   
}
  
  return (
    <>
      <Navbar/>
      <div className='flex justify-center mt-10 h-screen '>
      <div className='h-4/5 w-3/4 bg-gray-400 border-2 border-gray-900 rounded-xl'>
        <input type="text" name="text" id="text" placeholder="write here" onChange={(e) => { settext(e.target.value) }} value={text} className='w-4/5 border-2 border-gray-600 m-5 pl-2 rounded-tl-xl rounded-br-xl ' />
        <button onClick={save} className='bg-gray-500 p-0.5 border-2 border-gray-800 hover:shadow-lg hover:shadow-gray-900 rounded-md '>Save</button>
        {content.map((con,i)=>{return <Taskitem Delete={Delete} item={con.text} ky={i+1}/>})}
      </div>
    </div>
    </>
  )
}
