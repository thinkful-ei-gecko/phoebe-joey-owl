import React from 'react';
import ReactDOM from 'react-dom';
import App from './composition/App';
import './index.css';
import participants from './store';

ReactDOM.render(<App participants={participants}/>, document.getElementById('root'));