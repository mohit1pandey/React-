import { useEffect, useState } from 'react';

function UseEffectFive() {
  const [count, setcount] = useState(0);

  let tick = () => {
    setcount(count+1);
  
  

  };      

  useEffect(() => {
    let interval = setInterval(tick, 2000);
 
    return () => {
      clearInterval(interval); 
    };
},[count]);


  return ( 
    <div className='App'>
      <h3>UseEffectFive</h3>
      {count}
    </div>
  );
}

export default UseEffectFive;
/*
import { useEffect, useState } from 'react';

function UseEffectFive() {
  const [count, setcount] = useState(0);

  let tick = () => {
    setcount((prevcount) =>prevcount + 1);

  };      

  useEffect(() => {
    let interval = setInterval(tick, 5000);
 
    return () => {
      clearInterval(interval); 
    };
},[]);


  return ( 
    <div className='App'>
      <h3>UseEffectFive</h3>
      {count}
    </div>
  );
}

export default UseEffectFive;
*/