// main file
import React, { useCallback, useState } from 'react'
import Count from './23usecallback'
import Button from './24usecallback'
import Title from './25usecallback';


function ParentComp() {
const [age, setage]=useState(21);
const [salary,setsalary]=useState(25000)

const incrementAge=useCallback( ()=>{
    setage(age+1);
}, [age])

const incrementSalary=useCallback( ()=>{
    setsalary(salary+1000)  
},[salary])

    return (
        <>
            <Title/>
            <Count value={age} text='Age'/>
            <Button handleClick={incrementAge}> increment age</Button>
            <Count value={salary} text='salary' />
            <Button handleClick={incrementSalary}> increment salary</Button>
        </>
    )
}

export default ParentComp