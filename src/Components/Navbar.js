import React  from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    
    return (
      <div>
        <nav className='flex justify-between px-8 bg-slate-600 text-white p-5'>
            <div >
            <ul className='flex space-x-4'>
                <li  className="hover:border-b-2 hover:border-black" ><button ><Link to="/general">General</Link></button>  </li>
                <li r className="hover:border-b-2 hover:border-black" > <button ><Link to="/business">Business</Link></button> </li>
                <li r className="hover:border-b-2 hover:border-black" > <button ><Link to="/entertainment">Entertaiment</Link></button> </li>
                
                <li r className="hover:border-b-2 hover:border-black" > <button >
                <Link to="/technology">Technology</Link>
                </button> </li>
                <li r className="hover:border-b-2 hover:border-black" >
                    <button ><Link to="/custom">Custom</Link></button>
                </li>
                <li r className="hover:border-b-2 hover:border-black" >
                    <button ><Link to="/Todo">ToDo</Link></button>
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
