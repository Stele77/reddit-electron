import * as React from 'React';
import * as ReactDOM from "react-dom";

import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import './index.css';

ReactDOM.render(
    <div>
        <Header />
        <Sidebar />
    </div>

    ,
    document.getElementById("root")
)