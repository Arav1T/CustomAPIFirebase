import React, { useContext } from 'react'
import { CustomData } from '../context/Context'
import { Link } from 'react-router-dom'

export default function CreateBlog() {
    const {Blog,BlogImg,setBlogImg,setBlogContent } = useContext(CustomData)
  

    const OnChangeImg = (e) => {
        const file = e.target.files[0];
        console.log(file)
        const reader = new FileReader();
        reader.onload = () => {
            setBlogImg(reader.result);
            console.log(reader.result)
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    const onSubmitImg = () => {
        
        setBlogContent({title:Blog,description:document.querySelector('#description').value})

    }
    return (
        <>
            <div className='flex justify-between '>
            <div className='bg-slate-400 mt-10'>
                <h2 className='text-black'>{Blog}</h2>
                <div>
                    <h3>Description</h3>
                    <textarea className=' border-2 border-black' name="description" id="description" cols="100" rows="10" onChange={e => e.target.value} placeholder='Write Description' ></textarea>
                </div>
                <div>
                    <h4>upload picture</h4>
                    <input type="file" name="img" id="img" onChange={OnChangeImg} />
                    
                </div>
            </div>
            
            <div>
                <button className='h-36 w-36 border-2 border-black m-7' onClick={onSubmitImg}><Link to="/BlogFormat1">
                    {<div>
                        <h2>BlogTitle</h2>
                        <img src={BlogImg} alt="img" className='h-10 w-10'/>
                        <p>Description</p>
                    </div>}
                    
                </Link></button>
                <button className='h-36 w-36 border-2 border-black m-7' onClick={onSubmitImg}>
                    <Link to="/BlogFormat2">
                        <div>
                            <h2>BlogTitle</h2>
                            <div className='flex'>
                                <img src={BlogImg} alt="img" className='h-10 w-10'/>
                                <p>Description</p>
                            </div>
                        </div>
                        
                    </Link>
                </button>
                <button className='h-36 w-36 border-2 border-black m-7' onClick={onSubmitImg}>
                    <Link to="/BlogFormat3">
                        <div className='flex'>
                            <div>
                                <h2>BlogTitle</h2>
                                <p>Description</p>
                            </div>
                            <div >
                                <img src={BlogImg} alt="img" className='h-10 w-10'/>
                            </div>
                        </div>
                        
                    </Link>
                </button>
            <h3>click in any format to create blog</h3>
            </div>
            </div>
        </>
    )
}
