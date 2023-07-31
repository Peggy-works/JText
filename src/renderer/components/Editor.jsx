import React, { useState } from 'react';
import ReactDOM from 'react-dom';



const Editor = () => {
    
    const [text, setText] = useState('');

    const handleTextChanges = (event) => {
        setText(event.target.value);
    }

    return(
        <div>
            <textarea value={text} onChange={handleTextChanges} rows={5} columns={10}>
            </textarea>
        </div>
    )
}

export default Editor;