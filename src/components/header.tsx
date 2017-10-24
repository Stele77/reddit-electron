import * as React from "React";
import { Login } from '../containers/login';
import { BoardTypes, BoardTypeObjects } from '../boardTypes';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router";

export class Header extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        let index = BoardTypeObjects.map(x => x.route).indexOf(this.props.location.pathname);
        let name: string;
        if(this.props.location.pathname.toLowerCase().includes('/post/')) {
            name = "Comments";
        } else if (this.props.location.pathname.toLowerCase().includes('/login')) {
            name = "Refresh Token"
        } else if(index == -1) {
            name = "r/" + this.props.location.pathname.slice(10);
        } else {
            name = BoardTypeObjects[index].FriendlyName;
        }
        return (
            <div className="header">
                <div className="subreddit-name">
                    { this.props.showBack ? (<span className="fa-stack fa-1x pull-left" onClick={this.props.back}>
                        <i className="fa fa-chevron-left fa-stack-1x"></i>
                    </span>) : null}
                    {name}
                    <span className="loginButton pull-right">
                        {!this.props.loginState ? 
                        (<a className="btn" href="http://reddit.com/api/v1/authorize?client_id=NgpgFc7DxzmgBQ&response_type=code&state=hello&redirect_uri=http://127.0.0.1:5000/authorize_callback&duration=permanent&scope=read%20identity%20mysubreddits%20history%20edit%20save%20submit%20privatemessages%20subscribe%20vote">Login</a>) :
                        (<a className="btn" href="/auth/clearToken">Logout</a>)}
                    </span>
                </div>
            </div>);
    }
}