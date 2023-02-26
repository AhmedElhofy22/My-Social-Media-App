
import { useState,useEffect } from 'react'

const useFetchPosts = () => {
    const[posts,setPosts]=useState([])
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState()
    useEffect(()=>{
        const fetchPosts=async()=>{
            setLoading(true)
            try {
                const response = await  fetch('https://jsonplaceholder.typicode.com/posts');
                if(!response.ok){
                    throw new Error('Something went wrong')
                }
        const responseData = await response.json()
        setPosts(responseData)
    
            }
       
        catch(error){
          setError(error.message)
        }
        setLoading(false)
        };
        fetchPosts()
    },[])
  return {
    posts,
    loading,
    error
  }
}

export default useFetchPosts