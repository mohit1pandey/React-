// try to use with 5and 6
import { useState } from 'react';

export default function TextArea(props) {

    const [Text, setText] = useState('Hi this is text area');
//upper
    let click_text_val = () => {
        setText(Text.toUpperCase())
    }  

//lower
   let click_to_lowercase= () => {
    setText(Text.toLowerCase())
}

//clear
let click_to_clear=()=>{
    setText("")  // empty
}

let handle_extra_spaces=()=>{
let newText= Text.split(/[ ]+/)
setText(newText.join(' '))
}

    let onchangeHandle = (event) => {
        setText(event.target.value)


    }
    return (

        <>
            <div className="container">
                <div className="mb-3">
                    <textarea className="form-control mt-5" onChange={onchangeHandle} rows="8" id="myBox" value={Text} style={{background: props.mode==='dark'? 'gray':'white'}} ></textarea>

                </div>
                <button className='btn btn-primary mx-2' onClick={click_text_val}>To Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={click_to_lowercase}>To Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={click_to_clear}>Clear</button>
                <button className='btn btn-primary mx-2' onClick={handle_extra_spaces}>RemoveExteaSpace</button>

            </div>
             <div className="container">
              <h5 className='my-3'>Your text summary</h5>
              <p> Number of character in the paragraph {Text.length},and the number of words {Text.split(' ').length}</p>
                <p>{(Text.split(' ').length)*0.008} Minutes will take to read this para</p>
             </div>
                
        </>

    )

}