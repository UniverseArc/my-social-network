import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './components/Redux/State';
const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (State) => {
    root.render(
        <React.StrictMode>

            <App TransferState={State} 
            watchForInputUserInTexteareOfChats={store.watchForInputUserInTexteareOfChats.bind(store)}

            addMessageInChat={store.addMessageInChat.bind(store)} 

            addPostOnWall={store.addPostOnWall.bind(store)} 
            
            seeTheActionsOfUserInTextarea={store.seeTheActionsOfUserInTextarea.bind(store)} />

        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree);




