import React from 'react';
import ReactDOM from 'react-dom';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import './index.css';
import Home from './Home';
import Visualizer from './components/Visualizer';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(<Home />, document.getElementById('root'));


//registerServiceWorker();
