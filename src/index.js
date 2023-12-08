import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './components/Redux/redux-store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (State) => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
    let State = store.getState();
    rerenderEntireTree (State)
});




