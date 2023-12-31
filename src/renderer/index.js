import React, { StrictMode } from 'react';
import { createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);


//ReactDOM.render(<App />, document.getElementById('root'));