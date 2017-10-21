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
        return (
            <div className="header">
                <h3 className="text-center">A Subreddit Name</h3>
            </div>);
    }
}