import React from 'react'
import './Post.css'
import PostImg from '../Images/post.img.png'

const Post = (props) => {
  return (
    <li className='post' onClick={props.onPostDetail}>
    <p>{props.userId}</p>
    <img src={PostImg} alt='logo-img' className='img'>{props.img}</img>
      
      <p className='title'>{props.title}</p>
      <p className='body'>{props.body}</p>
    </li>
  )
}

export default Post
