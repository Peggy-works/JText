import React, { useState } from 'react';
import ReactDOM from 'react-dom';



const Editor = () => {
    
    const [text, setText] = useState('');

    const handleTextChanges = (event) => {
        console.log(event);
        //Need to set a timeout, like a delay to wait till user has not touched any more keys.
        if(event.key === "Enter"){
            event.preventDefault();
            console.log("Pressed enter")
        }
        setText(event.target.textContent);
    }

    return(
        <>
            <div value={text} contentEditable={true} onKeyDown={handleTextChanges}></div>
        </>


        /*<div>
            <textarea value={text} onChange={handleTextChanges} rows={5} columns={10}>
            </textarea>
        </div>*/
    );
}

export default Editor;
