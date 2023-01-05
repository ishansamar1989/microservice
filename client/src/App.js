import React from 'react'
import PostCreate from './PostCreate'
import PostList from './PostList'
const App=()=>{
    return <div className='container'>
        Blog App
        <h1><PostCreate /></h1>
        <hr/>
        <h1><PostList /></h1>
        </div>
}
export default App