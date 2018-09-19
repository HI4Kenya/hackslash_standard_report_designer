import React from 'react';
import ReactDOM from 'react-dom';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import './index.css';
import Home from './Home';
import Selection from './Selection';
import Visualizer from './components/Visualizer';



import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-dual-listbox/lib/react-dual-listbox.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(<Selection />, document.getElementById('root'));


//registerServiceWorker();
