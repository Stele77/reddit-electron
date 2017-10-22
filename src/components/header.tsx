import * as React from "React";
import { Login } from '../containers/login';
import { BoardTypes, BoardTypeObjects } from '../boardTypes';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router";

export class Header extends React.Component<any> {
    
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
                </div>
            </div>);
    }
}