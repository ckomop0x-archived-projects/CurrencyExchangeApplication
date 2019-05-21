import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    e.prompt();
});

ReactDOM.render(<App />, document.getElementById('root'));
// check for support
if ('serviceWorker' in navigator) {
    try {
        // calls navigator.serviceWorker.register('sw.js');
        registerServiceWorker();
    } catch (e) {
        console.error(e);
    }
}

