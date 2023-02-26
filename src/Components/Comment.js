import React from 'react'
import UserImg from '../Images/User-img.png'
import './Comment.css'

const Comment = (props) => {
  return (
    <div>
      
      <li className='comment'>
      
      <img src={UserImg} alt='user-img' className='user-img'>{props.img}</img>
       <p>{props.userId}</p>
        <p className='name'>{props.name}</p>
        <p className='email'>{props.email}</p>
        <p className='body-comment'>{props.body}</p>
      </li>
    </div>
  )
}

export default Comment
