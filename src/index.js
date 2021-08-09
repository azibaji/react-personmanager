import React from 'react';
import {render} from 'react-dom'
import App from './App';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

render(<App title="Persons manager"/>,document.getElementById('root'))