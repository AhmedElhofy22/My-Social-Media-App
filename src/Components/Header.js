import React, { useState } from 'react'
import Logo from '../Images/logo.twitter.png'
import './Header.css'

import AddPost from './AddPost'

const Header = (props) => {
  const [popup , setPopup] = useState(false)
  const setIsVisible = ()=>setPopup(v=>!v)
  return (
    <div className='header'>
    
        <img className='header-logo' src={Logo} alt='logo-img'/>



        
        <h1 className='header-title'>Twitter</h1>
        <button  type='button' onClick={setIsVisible} className='header-btn' >Post</button>
      {popup? <AddPost onClose={()=>setPopup(false)}/> :null}
    </div>
    
  )
}

export default Header
