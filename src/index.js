import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import State, { addMessageInChat, addPostOnWall, seeTheActionsOfUserInTextarea, subscribe, watchForInputUserInTexteareOfChats } from './components/Redux/State';
const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (State) => {
    root.render(
        <React.StrictMode>

            <App TransferState={State} 
            watchForInputUserInTexteareOfChats={watchForInputUserInTexteareOfChats}

            addMessageInChat={addMessageInChat} 

            addPostOnWall={addPostOnWall} 
            
            seeTheActionsOfUserInTextarea={seeTheActionsOfUserInTextarea} />

        </React.StrictMode>
    );
}

rerenderEntireTree(State)
subscribe(rerenderEntireTree);




