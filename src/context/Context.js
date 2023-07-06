import React, { createContext, useState } from 'react'


export const CustomData=createContext()

export const Context=({children})=> {
    const [AddContent, setAddContent] = useState({
        title:" ",
        KeyW1:" ",
        KeyW2:" ",
        KeyW3:" ",
        KeyW4:" ",
      })
      const [articles, setarticles] = useState([])
      const [Blog,setBlog] = useState()
      const [BlogImg, setBlogImg] = useState(null)
      const [Delete,setDelete]=useState(null)
      const [BlogContent, setBlogContent] = useState(
        {
            title:"",
            description:""
        }
      )

  return (
    <CustomData.Provider value={{BlogContent,setBlogContent,AddContent,setAddContent,articles,setarticles,setBlog,Blog,BlogImg,setBlogImg,Delete,setDelete}}>
      {children}
    </CustomData.Provider>
  )
}
