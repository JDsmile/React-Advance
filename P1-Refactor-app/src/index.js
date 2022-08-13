import React from 'react';
import App from "./app"
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css'
import { BrowserRouter as Router} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>    
        <App/>
    </Router>

)