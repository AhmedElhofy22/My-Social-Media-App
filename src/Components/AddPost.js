import React  from "react";
import "./AddPost.css";
import { useState } from "react";
import PopUp from "./PopUp";
import { useNavigate } from "react-router-dom";



const AddPost = ({onClose}) => {
  
 
  const closeHandler=()=>{
    onClose()
  }
  const navigate = useNavigate();
  const newPostHandler=()=>{
    navigate('/post')
  }
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const bodyHandler = (event) => {
    setBody(event.target.value);
  };
   
   const submitHandler = async(event) => {
    event.preventDefault();
    const postData = {
      title: title,
      body: body,
    };
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "content-type": "application/json",
      } ,
    });
    if (response.ok){
      newPostHandler() 
      onClose()
    }
    const data = response.json();
    console.log(data)
  };
  return (
    
     <PopUp onClose={closeHandler}>
      <form className="form" onSubmit={submitHandler} >
        <div>
          <label htmlFor="name">Title</label>
          <input
            type="text"
            id="name"
            value={title}
            required
            onChange={titleHandler}
          />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <textarea
            type="body"
            rows={3}
            value={body}
            required
            onChange={bodyHandler}
          />
        </div>
        <div className="actions">
          <button  type="button" onClick={closeHandler}>
          
            Cancel
          </button>
          <button  >
            Submit
          </button>
        </div>
      </form>
      </PopUp>
      
  );
};

export default AddPost;
