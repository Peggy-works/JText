import ReactDOM from 'react-dom';
import React from 'react';
import Explorer from './components/Explorer';
import Editor from './components/Editor';

function App(){
    return(
        <div>
            <Explorer></Explorer>
            <Editor></Editor>
        </div>
    );
}

export default App;