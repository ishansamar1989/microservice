import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'


const PostList=()=>{
const [posts,setPosts]=useState({})
const fetchPosts = async()=>{
    const res= await axios.get('http://localhost:4002/posts')
    console.log(res.data)
    setPosts(res.data)
}
useEffect(()=>{
    fetchPosts()
},[])
const renderedPost = Object.values(posts).map((val,index)=>{
    return( <div className='card' key={index}>
        <div className='card-body'>
        {val.title}
        <CommentCreate postId={val.id} />
        <CommentList comments={val.comments} />
        </div>
    </div>
    )
})
return(
    <div>
     {renderedPost}

    </div>
)
}
export default PostList