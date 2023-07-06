import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [ChangeColour,ChangeColour2,ChangeColour1,ChangeColour3,ChangeColour4,ChangeColour5] = [useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)]
    return (
      <div>
        <nav className='flex justify-between px-8 bg-slate-600 text-white p-5'>
            <div >
            <ul className='flex space-x-4'>
                <li ref={ChangeColour}><button onClick={()=>[ChangeColour.current.style.borderBottom,ChangeColour1.current.style.borderBottom,ChangeColour2.current.style.borderBottom,ChangeColour3.current.style.borderBottom,ChangeColour4.current.style.borderBottom,ChangeColour5.current.style.borderBottom]=["2px solid black",null,null,null,null,null]}><Link to="/general">General</Link></button>  </li>
                <li ref={ChangeColour1}> <button onClick={()=>[ChangeColour1.current.style.borderBottom,ChangeColour.current.style.borderBottom,ChangeColour2.current.style.borderBottom,ChangeColour3.current.style.borderBottom,ChangeColour4.current.style.borderBottom,ChangeColour5.current.style.borderBottom]=["2px solid black",null,null,null,null,null]}><Link to="/business">Business</Link></button> </li>
                <li ref={ChangeColour2}> <button onClick={()=>[ChangeColour2.current.style.borderBottom,ChangeColour1.current.style.borderBottom,ChangeColour.current.style.borderBottom,ChangeColour3.current.style.borderBottom,ChangeColour4.current.style.borderBottom,ChangeColour5.current.style.borderBottom]=["2px solid black",null,null,null,null,null]}><Link to="/entertainment">Entertaiment</Link></button> </li>
                
                <li ref={ChangeColour3}> <button onClick={()=>[ChangeColour3.current.style.borderBottom,ChangeColour1.current.style.borderBottom,ChangeColour2.current.style.borderBottom,ChangeColour.current.style.borderBottom,ChangeColour4.current.style.borderBottom,ChangeColour5.current.style.borderBottom]=["2px solid black",null,null,null,null,null]}>
                <Link to="/technology">Technology</Link>
                </button> </li>
                <li ref={ChangeColour4}>
                    <button onClick={()=>[ChangeColour4.current.style.borderBottom,ChangeColour1.current.style.borderBottom,ChangeColour2.current.style.borderBottom,ChangeColour3.current.style.borderBottom,ChangeColour.current.style.borderBottom,ChangeColour5.current.style.borderBottom]=["2px solid black",null,null,null,null,null]}><Link to="/custom">Custom</Link></button>
                </li>
                <li ref={ChangeColour5}>
                    <button onClick={()=>[ChangeColour5.current.style.borderBottom,ChangeColour1.current.style.borderBottom,ChangeColour2.current.style.borderBottom,ChangeColour3.current.style.borderBottom,ChangeColour.current.style.borderBottom]=["2px solid black",null,null,null,null]}><Link to="/Todo">ToDo</Link></button>
                </li>
               
            </ul> 
             </div>
            <div className='space-x-4'>
                
                <Link to="/forget">Forget</Link> 
                <button> <Link to="/ADD">ADD+</Link> </button>
            </div>
        </nav>
        
      </div>
    )
  
}
