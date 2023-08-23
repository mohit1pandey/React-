import React, { useEffect, useState } from 'react'
import axios from 'axios';

function FetchData() {
    const[Posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            setPosts(res.data)
            console.log(res.data)
        })
        .catch(err=>{
            console.error(err)
        })

    },[])
  return (
    <div>FetchData
     <div>
        <ul>
            {
                Posts.map((value)=>{
                  return(
                    <li key={ value.id}>{value.title}</li>
                  )
                })
            }
        </ul>
     </div>
    </div>
  )
}

export default FetchData