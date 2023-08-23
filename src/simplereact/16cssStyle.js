import React from 'react'
import './myApp.css'
import styles from'./myApp.module.css'
import Child from './x'

function CssStyle() {

 let css ={
    background: 'black',
   
 }

  return (
    <>
    <div className='simpecss'   style={css}>CssStyle</div>
    <h3 className={styles.green}> hello</h3>
    <Child/>
    </>
  )
}



export default CssStyle;