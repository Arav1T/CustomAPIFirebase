import React, { useContext, useEffect } from 'react'
import { CustomData } from '../context/Context'
import Temp from './Temp'
import Navbar from './Navbar'

export default function Custom() {
    const {articles,setarticles,Delete} = useContext(CustomData)
    useEffect(() => {
      setarticles(articles.filter((e)=>(Delete!==e.title)
      ))
    }, [Delete])
    
    
  return (
    <div>
    <Navbar/>
     {articles.map((element)=>{
      return  <Temp element={element} key={element.title}/>
     })}
    </div>
  )
}
