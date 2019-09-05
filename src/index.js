import React from 'react';
import ReactDOM from 'react-dom';
import App from './composition/App';
import participants from './store';
import chatEvents from './chatEvents'
import './styles/index.css';

ReactDOM.render(<App participants={participants} chatEvents={chatEvents}/>, document.getElementById('root'));