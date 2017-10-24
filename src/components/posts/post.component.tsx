import * as React from "react";
import { TextPost } from './text.component';
import { PostData } from './post.model';
import { LinkPost } from './link.component';
import { PicturePost } from './pic.component';
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import * as moment from 'moment';

export class Post extends React.Component<any> {
    state: { votes: number, up: any, timeAgo: string } = { votes: 0, up: null, timeAgo: '' };

    constructor(props: any) {
        super(props);
    }

    componentWillMount() {
        var d = new Date(0);
        d.setUTCSeconds(this.props.data.created + 60);
        let timeago = moment(d).fromNow(true);
        let num = parseInt(timeago);
        let suffix = "";
        for(let i = 0; i < timeago.length; i++) {
            if(isNaN(parseInt(timeago.charAt(i))) && timeago.charAt(i) !== ' ') {
                suffix = timeago.charAt(i);
                break;
            }
        }

        if(isNaN(num)) {
            num = 1;
            if(timeago.includes('hour')) {
                suffix = 'h';
            }
            if(timeago.includes('day')) {
                suffix = 'd';
            }
            if(timeago.includes('minute')) {
                suffix = 'm';
            }
            if(timeago.includes('year')) {
                suffix = 'y';
            }
            if(timeago.includes('month')) {
                suffix = 'mo';
            }
        }
        this.setState({ votes: this.props.data.score, up: this.props.data.likes, timeAgo: num + suffix});
    }

    renderPost() {
        let postData: PostData = this.props.data;
        switch (postData.post_hint) {
            case ("link"):
                return (<LinkPost post={postData}/>)
            case ("image"):
                return (<PicturePost post={postData}/>)
            case ("self"):
                return (<TextPost post={postData}/>)
            default:
                return (<TextPost post={postData}/>)
        }
    }

    vote(dir: number) {
        let offset = 0;
        // if revoting the current vote, unset the vote
        if(this.state.up && dir === 1 || this.state.up === false && dir === -1) {
            offset = -1 * dir;
            dir = 0;
        }
        let body = "dir=" + dir + "&id=" + this.props.data.name
        axios.post('https://oauth.reddit.com/api/vote', body).then(res => {
            let up = null;
            if(dir == -1) {
                up = false;
            } else if(dir == 1) {
                up = true;
            }
            this.setState({votes: this.state.votes + (dir == 0 ? offset : dir), up: up});
        }, err => {
            console.log(err);
        });
    }

    GoToPost(route: string) {
        return (
            <Redirect to={route} />
        )
    }
    
    render() {
        let route = '/post/' + this.props.data.subreddit + '/' + this.props.data.id;        
        return (
            <div className="post">                
                <div className="title-block">
                    <span className="subreddit-thumb"><i className="fa fa-2x fa-pied-piper-alt"></i>
                    </span>
                    <div className="subreddit-info">
                        <Link to={'/post/' + this.props.data.subreddit}>{"r/" + this.props.data.subreddit}</Link>
                        <small>{this.state.timeAgo} • {this.props.data.author}</small>
                    </div>
                    <span className="post-options"><a><i className="fa fa-ellipsis-h"></i></a></span>
                </div>
                <Link to={route} >
                    <div className="post-block">{this.renderPost()}</div>
                </Link>
                <div className="vote-block">
                    <span>{this.state.votes} <i className={this.state.up ? 'fa fa-arrow-circle-o-up text-danger' : 'fa fa-arrow-circle-o-up' } onClick={() => this.vote(1)}></i></span>
                    <span><i className={this.state.up === false ? 'fa fa-arrow-circle-o-down text-danger' : 'fa fa-arrow-circle-o-up' } onClick={() => this.vote(-1)}></i></span>
                    <Link to={route} ><span><i className="fa fa-comments fa-inverse"></i> {this.props.data.num_comments} Comments</span></Link>
                </div>
            </div>
        );
    }
}