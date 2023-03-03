import React from 'react'
import { useParams } from 'react-router-dom'
import Post from '../Components/Post'
import { useState,useEffect } from 'react'
import Comment from '../Components/Comment'

const PostDetail = () => {
 
  const params =useParams()
  console.log(params)
  const[post,setPost]=useState([])
  const[comments,setComments]=useState([])
  const[commentLoading,setCommentLoading]=useState(false)
  const[loading,setLoading]=useState(false)
    const[error,setError]=useState()
    useEffect(()=>{
        const fetchPostDetail=async()=>{
            setLoading(true)
            try {
                const response = await  fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
                
                if(!response.ok){
                    throw new Error('Something went wrong')
                }
        const responseData = await response.json()
        setPost(responseData)
            }
       
        catch(error){
          setError(error.message)
        }
        setLoading(false)
        };
        const fetchPostDetailComments=async()=>{
          setCommentLoading(true)
          try {
             
              const responseComment = await  fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`);
              if(!responseComment.ok){
                  throw new Error('Something went wrong')
              }
     
      const responseCommentData = await responseComment.json()
      
      setComments(responseCommentData)
  
          }
     
      catch(error){
        setError(error.message)
      }
      setCommentLoading(false)
      };
      fetchPostDetail()
        fetchPostDetailComments()
    },[params.id])
    const OnePost = <Post key={post.id} id={post.id} title={post.title} body={post.body} img={post.img} userId={post.userId}/>
    if (!loading && error){
      return <h1>{error}</h1>
    }
    const postDetailComments =  comments.map((comments)=>(<Comment key={comments.id} img={comments.img} id={comments.id} name={comments.name} email={comments.email} body={comments.body} />))
    
  return (
    <div   >
    {loading? <h3>LOADING...</h3>:OnePost}
    <h2>Comments</h2>
    {commentLoading? <h3>Comments Loading</h3> : postDetailComments}
    </div>
  )
}

export default PostDetail

