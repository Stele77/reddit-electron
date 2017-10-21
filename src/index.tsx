import * as React from 'React';
import * as ReactDOM from "react-dom";

import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { Messages } from './components/messages';
import { Profile } from './components/profile';
import { Search } from './components/search';
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
        <Sidebar />
        <div>
            <Header />
            <div>
                <Router>
                    <div className="secondMenu">
                        <Route path = "/Search" component={Search}/>
                        <Route path = "/Message" component={Messages}/>
                        <Route path = "/Profile" component={Profile}/>
                    </div>
                </Router>
                
                <Router>
                    <div className="container">
                        <Route exact path="/" component={Board}/>
                        <Route path="/Login" component={Login}/>
                    </div>
                </Router>
            </div>
        </div>
    </div>

    ,
    document.getElementById("root")
)