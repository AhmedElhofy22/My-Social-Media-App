import React from 'react'
import './Post.css'
import PostImg from '../Images/post.img.png'
import { Link } from 'react-router-dom';

const Post = (props) => {
  console.log(props)
  return (    <Link to={props.id?.toString()}>
    <li className='post'>
    <p>{props.userId}</p>
    <img src={PostImg} alt='logo-img' className='img'>{props.img}</img>
      
      <p className='title'>{props.title}</p>
      <p className='body'>{props.body}</p>
    </li>
    </Link>

  )
}

export default Post
