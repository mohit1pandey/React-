import React,{useState} from 'react'

function UseStateObj() {
const [name, setname] = useState({Fname:'',Lname:''})


  return (
    <div className='App'>
       Fname<input type="text" value={name.Fname} onChange={(e)=>setname({...name,Fname: e.target.value})}/>
       Lname <input type="text" value={name.Lname} onChange={(e)=>setname({...name,Lname: e.target.value})}/> <br/> <br/> <br/>
      
   
       <h3>yout first name is- </h3> {name.Fname}     <br/>
       <h3>yout last name is- </h3> {name.Lname}
       <h5>
        {JSON.stringify(name)}
       </h5>
    </div>
  )
}

export default UseStateObj