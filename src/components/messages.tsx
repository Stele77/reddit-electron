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
        <Link to={'/board/' + BoardTypes.Inbox} onClick={this.props.closeMenu}>
            <span className="fa-stack fa-2x">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-envelope-open fa-stack-1x fa-inverted"></i>
            </span>
            Inbox<br />
        </Link>
        <Link to={'/board/' + BoardTypes.CommentReplies} onClick={this.props.closeMenu}>
            <span className="fa-stack fa-2x">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-retweet fa-stack-1x fa-inverted"></i>
            </span>
            Comment Replies<br />
        </Link>
        <Link to={'/board/' + BoardTypes.PostReplies} onClick={this.props.closeMenu}>
            <span className="fa-stack fa-2x">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-thumbs-up fa-stack-1x fa-inverted"></i>
            </span>
            Post Replies<br />
        </Link>
        <Link to={'/board/' + BoardTypes.UsernameMentions} onClick={this.props.closeMenu}>
            <span className="fa-stack fa-2x">
             <i className="fa fa-circle fa-stack-2x"></i>
             <i className="fa fa-reddit-thumbs-up fa-stack-1x fa-inverted"></i>
             </span>
             Username Mentions<br />
        </Link>
    </div>);
    }
}