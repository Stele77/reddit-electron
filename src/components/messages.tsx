import * as React from 'React';
import { SecondaryPages } from './sidebar';
import { BoardTypes } from '../boardTypes';
import { Link } from 'react-router-dom';

export interface MessageProps {
    closeMenu: any,
    open: any
}

export class Messages extends React.Component<MessageProps> {

    render() {
        return (<div className='messages'>
            <span className="fa-stack fa-2x">
                <i className="fa fa-circle fa-stack-2x blank-it"></i>
                <i className="fa fa-envelope-open fa-stack-1x blank-it"></i>
            </span>
            <br />
        <Link to={'/board/' + BoardTypes.Inbox} onClick={this.props.closeMenu}>
            <span className="fa-stack fa-2x">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-envelope-open fa-stack-1x mess-stack"></i>
            </span>
            Inbox<br />
        </Link>
        <Link to={'/board/' + BoardTypes.CommentReplies} onClick={this.props.closeMenu}>
            <span className="fa-stack fa-2x">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-retweet fa-stack-1x mess-stack"></i>
            </span>
            Comment Replies<br />
        </Link>
        <Link to={'/board/' + BoardTypes.PostReplies} onClick={this.props.closeMenu}>
            <span className="fa-stack fa-2x">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-thumbs-up fa-stack-1x mess-stack"></i>
            </span>
            Post Replies<br />
        </Link>
        <Link to={'/board/' + BoardTypes.UsernameMentions} onClick={this.props.closeMenu}>
            <span className="fa-stack fa-2x">
             <i className="fa fa-circle fa-stack-2x"></i>
             <i className="fa fa-at fa-stack-1x mess-stack"></i>
             </span>
             Username Mentions<br />
        </Link>
    </div>);
    }
}