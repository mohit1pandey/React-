import React, { useMemo, useState } from 'react'

function Memo() {
    const[countone,setcountone]=useState(0);
    const[counttwo,setcountwo]=useState(2);
    
    const incrementone=()=>{
        setcountone(countone+1);
    }
    const incrementtwo =()=>{
        setcountwo(counttwo+1);
    }
    const isEven=useMemo(()=>{
        let i=0;
        while(i<2000000000) i++

            let istrue=countone%2 === 0  //if both 0 then istrue is 1
            return istrue;
    },[countone])

  return (
   <>
   <h3>useMemo</h3>
   <div>
    <button onClick={incrementone}>Click one</button>-{countone}
    <span> {isEven? 'even ': 'odd'} </span>
   </div>
   <div>
    <button onClick={incrementtwo}>Click two</button>-{counttwo}
   </div>

   </>
  )
}

export default Memo