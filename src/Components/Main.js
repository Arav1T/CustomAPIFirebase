import React,{useState, useEffect, useContext} from 'react';
import Temp from './Temp';
import { CustomData } from '../context/Context';
import Navbar from './Navbar';
export default function Main (props) {  
  const [articles, setarticles] = useState([])
  const {Delete} = useContext(CustomData)
  useEffect(() => { 
    return async () => {
      let url = fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=0a98e72654e546ac8cab7b03823509eb&page=1&pageSize=6`)
      console.log(await url)
      let def = await (await url).json()
      console.log(def)
      setarticles(def.articles)
    }
  },[])
  useEffect(()=>{
    setarticles(articles.filter((e)=>(Delete!==e.title)
    ))
  },[Delete])

    return (
      <div>
      <Navbar/>
        
        <div>
          

          {articles?.map((element) => {
            return <Temp element={element} key={element.url} />
          })}
        </div>

      </div>
    )
  }
