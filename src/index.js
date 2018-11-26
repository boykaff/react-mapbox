import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Map from './components/map';
import Header from './components/header';

ReactDOM.render(<div>
    <Header/>
    <Map />
</div>, document.getElementById('root'));
serviceWorker.unregister();
