import React,{useState,useEffect} from 'react'
import axios from 'axios'


const CommentList=({comments})=>{

    const renderedComments = comments.map((comment,index)=>{
        let content
        if(comment.status==='approved'){
            content= comment.content
        }
        else if(comment.status==='pending'){
            content= 'Awaiting moderation'
        }
        else if(comment.status==='rejected'){
            content= 'Rejected'
        }
       return <div key={comment.id}>{content}</div>
    })
    return(
        <div>
         {renderedComments}
                    ss
        </div>
    )
}
export default CommentList