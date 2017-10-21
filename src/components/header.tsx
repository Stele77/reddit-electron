import * as React from "react";
import { Login } from './login';

export class Header extends React.Component {
    state = { showLogin: false };

    constructor(props: any) {
        super(props);
    }

    ToggleShowLogin() {
        
    }

    render() {
        return <div className="container"><h1 className="title">Reddit Wrapper</h1><p className="subtitle">An Electron wrapper for Reddit!</p><button className='button' onClick={() => this.ToggleShowLogin()}>Login to Reddit</button><Login /></div>;
    }
}