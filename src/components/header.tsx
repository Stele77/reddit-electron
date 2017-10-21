import * as React from "React";
import { Login } from '../containers/login';
import { BoardTypes, BoardTypeObjects } from '../boardTypes';
import { Link } from 'react-router-dom';

export class Header extends React.Component<any> {
    state = { showLogin: false };

    constructor(props: any) {
        super(props);
    }

    ToggleShowLogin() {
        
    }
    
    render() {
        let index = BoardTypeObjects.map(x => x.route).indexOf(this.props.location.pathname);
        let name: string;
        if(index == -1) {
            name = this.props.location.pathname.slice(10);
        } else {
            name = BoardTypeObjects[index].FriendlyName;
        }
        return (
            <div className="header">
                <div className="subreddit-name">
                    {name}
                    <span className="pull-right"><Link to="/Login" className="login-button">Login</Link></span>
                </div>
            </div>);
    }
}