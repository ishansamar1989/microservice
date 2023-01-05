const express = require('express')
const bodyParser = require('body-parser')
const axios= require('axios')
const app = express()
app.use(bodyParser.json())
app.post('/events',async (req,res)=>{
    const event= req.body
    const {type,data}= req.body
    
    if(type === 'CommentCreated'){
        const status = data.content.includes('orange')?'rejected':'approved'
        axios.post('http://localhost:4005/events',{
            type:'CommentModerated',
            data:{
                id:data.id,
                postId:data.postId,
                status,
                content:data.content
            }
        })
        console.log('moderated',data)
    }
    res.send({})

})
app.listen(4003,()=>{
    console.log('LISTENING ON 4003(moderation)')
})  