// parent Componant
import React, { useState } from 'react'
import ChildThree from './11IncorrectMemo'
import ChildThree1 from './12IncorrectMemo'

function ParentThree() {
  const [Count, setCount] = useState(0)
  const [name, setname] = useState('mohit')
  console.log("Parent renders")
  return (
    <div>
      <h3>ParentThree</h3>
      <button onClick={() => setCount(cnt => cnt + 1)}>Count-{Count}</button>
      <button onClick={() => setname('tivari')}>Count-{name}</button>

      <ChildThree1 name={name}/>
      {/* 
      <ChildThree>
        {/* normal text no re-render html or any other compnet send it will re-render 
      <strong>hello</strong>
      </ChildThree>
       */}
    </div>
  )
}

export default ParentThree
