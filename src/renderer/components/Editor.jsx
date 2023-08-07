import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom'; 



const Editor = () => {
    
    const [text, setText] = useState('');
    const [enter,  setEnter] = useState(false);
    const [numOfLines, setNewLines] = useState(0); 
    const [elements, setElements] = useState([]);
    const [currentLine, setCurrentLine] = useState(0);

    const elementRef = useRef([]);

    const handleTextChanges = (event, index) => {
        console.log(event);
        //Need to set a timeout, like a delay to wait till user has not touched any more keys.
        if(event.key === "Enter"){
            //setEnter(true);
            
            
            setNewLines((numOfLines) => numOfLines + 1);
            setElements([...elements, event.target.textContent]);
            event.preventDefault();
            console.log("Pressed enter")
            setCurrentLine(currentLine+1)
            console.log(currentLine);

            /**
             * This approach to change the cursor position works
             */
            let range = document.createRange();
            range.setStart(elementRef.current[0].firstChild, 2);
            range.setEnd(elementRef.current[0].firstChild,2);
            let selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);

            let targetElement = elementRef.current[0]
            console.log(targetElement.focus()); 
            
            console.log(`index: ${event.target.dataset.index}`);
            if(targetElement)
                targetElement.current; 
        }
        //setText(event.target.textContent);
    }

    const handleInput = (event) => {
        console.log(event);
        setText(event.target.textContent);
        console.log(event.target.value)
    }

    return(
        <> 
            {
                !numOfLines ? (
                    <div className="text-line" contentEditable={true} onKeyDown={handleTextChanges}></div>
                ) : (
                    elements.map((element, index) => (
                        <div className="text-line" key={index} ref={(el) => elementRef.current[index] = el} contentEditable={true} onKeyDown={(event) => handleTextChanges(event, index)} data-index={index}>Hello world!</div>
                    ))
                )
            }
            
            
        </>


        /*<div>
            <textarea value={text} onChange={handleTextChanges} rows={5} columns={10}>
            </textarea>
        </div>
        { 
                !numOfLines ? (
                    <p value={text} contentEditable={true} onInput={handleInput} onKeyDown={handleTextChanges}></p>
                    ) : (elements.map((element, index) => (
                <div value={text} onInput={handleInput} onKeyDown={handleTextChanges}></div>
                )))
            }
        */
    );
}

export default Editor;
