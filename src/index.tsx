import * as React from 'React';
import * as ReactDOM from "react-dom";

import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { Board } from './components/board';
import { Login } from './components/login';
import './index.css';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

ReactDOM.render(
    <div>
        <Header />
        <Sidebar />
        <Router>
            <div className="container">
                <Route exact path="/" component={Board}/>
                <Route path="/Login" component={Login}/>
            </div>
        </Router>
    </div>

    ,
    document.getElementById("root")
)