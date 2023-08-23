import { useState } from 'react';

export default function TextArea(prop) {

    const [Text, setText] = useState('Hi this is text area');
    //upper
    let click_to_uppercase = () => {
        setText(Text.toUpperCase())
    }

   //lower
   let click_to_lowercase= () => {
    setText(Text.toLowerCase())
}

    let onchangeHandle = (event) => {
        setText(event.target.value)
        //  here event.target.value will return the currnet value of text area 
        // firstly as we change the textarea the onchange will trigger and then now as we submit the onclick will triger and it will set the value to upprcase.
    }
    return (


        <div className="container">
            <h3 className='my-3'>Enter your text</h3>
            <div className="mb-3">
                <textarea className="form-control" onChange={onchangeHandle} rows="8"   id="myBox" value={Text} ></textarea>

            </div>
            <button className='btn btn-primary mx-3' onClick={click_to_uppercase} >To Uppercase</button>
            <button className='btn btn-primary' onClick={click_to_lowercase}>To Lowercase</button>

        </div>

    )

}