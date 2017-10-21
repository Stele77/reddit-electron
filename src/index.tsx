import * as React from 'React';
import * as ReactDOM from "react-dom";

import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { SecondaryMenu } from './components/secondaryMenu';
import './index.css';

ReactDOM.render(
    <div>
        <Header />
        <Sidebar />
        <SecondaryMenu />
    </div>

    ,
    document.getElementById("root")
)