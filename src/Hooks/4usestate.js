import React ,{useState} from 'react'

function ArrayUsestate() {
const [Arr,setArr]=useState([])  
  
const handleClick = () => {
    setArr(prevArr => [
      ...prevArr,
      {
        id: prevArr.length,
        value: Math.floor(Math.random() * 100) + 1,
      },
    ]);
  };
  return (
        <div className='App'>
          <button onClick={handleClick}>Random Click</button>
          <ul>
            {Arr.map(value => (
              <li key={value.id}>{value.value}</li>
            ))}
          </ul>
                
        </div>
      );
    }
    
export default ArrayUsestate

