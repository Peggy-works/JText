import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom'; 



const Editor = () => {
    
    const [text, setText] = useState('');
    const [enter,  setEnter] = useState(false);
    const [numOfLines, setNewLines] = useState(1); 
    const [elements, setElements] = useState([""]);
    const [currentLine, setCurrentLine] = useState(0);

    const elementRef = useRef([]);

    useEffect(() => {
        //Return for the first re-render
        if(numOfLines == 1) return;
        //setCurrentLine((currentLine) => currentLine + 1)
        console.log("re-rendered")
        /**
         * This approach to change the cursor position works
         */
        let range = document.createRange();
        range.setStart(elementRef.current[currentLine].firstChild, 2);
        range.setEnd(elementRef.current[currentLine].firstChild,2);
        let selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        console.log(elementRef);
        console.log(elementRef.current.length);
        console.log(`Current line: ${currentLine}`);
        for(let i = 0; i < elementRef.current.length; i++){
            console.log(`Index: ${i}, Value: ${elementRef.current[i]}`);
        }

        let targetElement = elementRef.current[currentLine]
        console.log(targetElement.focus()); 
    }, [numOfLines])

    const handleTextChanges = (event, index) => { 

        //Need to set a timeout, like a delay to wait till user has not touched any more keys.
        if(event.key === "Enter"){
            //setEnter(true);
            console.log(event);
            console.log(event.target);
            setCurrentLine((currentLine) => currentLine + 1)
            setNewLines((numOfLines) => numOfLines + 1);
            setElements([...elements, event.target.textContent || ""]);
            event.preventDefault();
            console.log("Pressed enter") 
            console.log(currentLine);

            
            
            console.log(`index: ${event.target.dataset.index}`);
            //setCurrentLine(currentLine+1)
            //if(targetElement)
                //targetElement.current; 
        } else if(event.key == "ArrowUp"){
            console.log("Up");
            console.log(event);
            console.log(event.target);
            setCurrentLine(currentLine => Math.max(0, currentLine - 1))
        } else if(event.key == "ArrowDown"){
            console.log("Down");
            console.log(event);
            console.log(event.target);
            setCurrentLine(currentLine => Math.max(0, currentLine + 1))
        } else if(event.key == "ArrowRight"){
            console.log(event);
            console.log(event.target);
            console.log("Right");
        } else if(event.key == "ArrowLeft"){
            console.log(event);
            console.log(event.target);
            console.log("Left");
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
                        <div className="text-line" key={index} ref={(el) => elementRef.current[index] = el} contentEditable={true} onKeyDown={(event) => handleTextChanges(event, index)} data-index={index}>Hello world!{index}</div>
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
