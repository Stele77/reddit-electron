import * as React from 'React';
import * as ReactDOM from "react-dom";

import { Header } from './components/header';
import { Login } from './components/login';
import './index.css';

ReactDOM.render(
    <Header><Login /></Header>
    ,
    document.getElementById("header")
)