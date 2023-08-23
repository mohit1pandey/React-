//here we will fetch data from API via using Reducer 
import React, { useEffect, useReducer } from 'react'
import axios from 'axios';
const initial_state={
    loading: true,
    error: '',
    data: {}
}
const reducer =(currentstate,action)=>{
    switch (action.type) {
        case 'Success':
            return({
                loading: false,
                error: '',
                data: action.payload
            })
    
        case 'Error':
            return({
                loading: false,
                error: 'somthing went wrong',
                data: {}})
    
        default:
            return currentstate;
    }

}
function FetchData( ){
    const[state,dispatch]=useReducer(reducer,initial_state)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            dispatch({type:'Success',payload : res.data})
        })
        .catch(err=>{
            dispatch({type:'Error'})
        })
    },[])

return(
    <>
    <h3>fetch data</h3>
    <div>
        {state.loading? 'loading...': state.data.title}
    </div>
    <div>
        {state.error? state.error :null}
    </div>
    </>
)

}

export default FetchData
/*
import React, { useEffect, useState } from 'react'
import axios from 'axios';
function FetchData() {
    const[isLoading,setIsLoading]=useState(true);
    const[error,setError]=useState('');
    const[data,setData]=useState({});

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            setIsLoading(false) // due to some rendering set it false
            setData(res.data)
            setError('')

        })
        .catch(err=>{
            setIsLoading(true) 
            setData({})
            setError('something went wrong')    
            })

    },[])

  return (
    <div>
        <div>
          {isLoading ? 'loading......':data.title}
        </div>
        <div>
            {error? error:null}
        </div>
    
    </div>
  )
}

export default FetchData
*/