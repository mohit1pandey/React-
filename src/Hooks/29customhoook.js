// this is hook file
import  { useEffect } from 'react'

function useUpdateTilte(title) {
 useEffect(()=>{
    document.title= `title ${title}`;
 },[title])
}

export default useUpdateTilte