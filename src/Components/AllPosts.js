
import Post from './Post';
import useFetchPosts from '../Hooks/useFetchPosts';


const AllPosts = () => {
   const{posts,loading,error}=useFetchPosts()
     const AllPostList =  posts.map((post)=>(<Post key={post.id} id={post.id} title={post.title} body={post.body} img={post.img} userId={post.userId}/>))
if (!loading && error){
  return <h1>{error}</h1>
}
  return (
    <div>
      {loading? <h3>LOADING...</h3>:AllPostList}
    </div>
  )
}

export default AllPosts

