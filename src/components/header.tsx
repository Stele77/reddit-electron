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
            name = "r/" + this.props.location.pathname.slice(10);
        } else {
            name = BoardTypeObjects[index].FriendlyName;
        }
        return (
            <div className="header">
                <div className="subreddit-name">
                    {name}
                    {localStorage.getItem("Token") == null ? (<Link to = {"/login"}>
                        <span className="pull-right">Login</span>
                    </Link>) : 
                    (<span onClick={()=>localStorage.removeItem("Token")} className="pull-right">Logout</span>) }
                </div>
            </div>);
    }
}