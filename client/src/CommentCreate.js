import React,{useState,useEffect} from 'react'
import axios from 'axios'


const CommentCreate=({postId})=>{
    const[content,setContent]=useState('')
    const onSubmit=async (e)=>{
        e.preventDefault()
        await axios.post(`http://localhost:4001/posts/${postId}/comments`,{content})
        setContent('')
    }
return(
    <div className='form-group'>
        <label>New Comment</label>
        <input type="text" onChange={e=>setContent(e.target.value)}></input>
        <button onClick={onSubmit}>Submit</button>
    </div>
)
}
export default CommentCreate