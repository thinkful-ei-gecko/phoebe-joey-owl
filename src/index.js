import React from 'react';
import ReactDOM from 'react-dom';
import App from './composition/App';
import './index.css';
import participants from './store';
import chatEvents from './chatEvents'

ReactDOM.render(<App participants={participants} chatEvents={chatEvents}/>, document.getElementById('root'));