import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './asset/variables.less'
import App from './App';
import './untils/ydui.flexible'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
