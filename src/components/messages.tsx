import * as React from 'React';
import { SecondaryPages } from './sidebar';
import { BoardTypes } from '../boardTypes';
import { Link } from 'react-router-dom';

export interface MessageProps {
    closeMenu: any,
    open: any
}

export class Messages extends React.Component<any> {

    render() {
        return (<div className='messages'>
            <h3 className="mess-m-text">Messages</h3>
        <Link to={'/board/' + BoardTypes.Inbox} onClick={this.props.closeMenu}>
            <span className="fa-stack fa-2x">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-envelope-open fa-stack-1x mess-stack"></i>
            </span>
            <span className="mess-text">Inbox</span><br />
        </Link>
        <Link to={'/board/' + BoardTypes.CommentReplies} onClick={this.props.closeMenu}>
            <span className="fa-stack fa-2x">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-retweet fa-stack-1x mess-stack"></i>
            </span>
            <span className="mess-text">Comment Replies</span><br />
        </Link>
        <Link to={'/board/' + BoardTypes.PostReplies} onClick={this.props.closeMenu}>
            <span className="fa-stack fa-2x">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-thumbs-up fa-stack-1x mess-stack"></i>
            </span>
            <span className="mess-text">Post Replies</span><br />
        </Link>
        <Link to={'/board/' + BoardTypes.UsernameMentions} onClick={this.props.closeMenu}>
            <span className="fa-stack fa-2x">
             <i className="fa fa-circle fa-stack-2x"></i>
             <i className="fa fa-at fa-stack-1x mess-stack"></i>
             </span>
             <span className="mess-text">Username Mentions</span><br />
        </Link>
    </div>);
    }
}