import React, { useEffect, useState } from 'react'
import axios from 'axios';

function FetchData() {
    const[Post,setPost]=useState({})
    const[id,setidval]=useState(1)
    const [IDFromClick,setIDFromClick]=useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${IDFromClick}`)
        .then(res=>{
            setPost(res.data)
            console.log(res.data)
        })
        .catch(err=>{
            console.error(err)
        })

    },[IDFromClick])

    let handleClick=()=>{
        setIDFromClick(id);
    }
  return (
    <div>FetchData
     <div>
        <ul>
           <li key={Post.id}>{Post.title}</li>
        </ul>
     </div>enter id
     <input type="text" value={id}  onChange={(e)=>setidval(e.target.value)}/>
     <button onClick={handleClick}>Enter</button>
    </div>
  )
}

export default FetchData