import * as React from 'react';
import axios from 'axios';
import { authURL } from '../boardTypes';
import { Link } from 'react-router-dom';
import * as moment from 'moment';

export class PostPage extends React.Component<any> {
    state: any = { isLoading: false, data: {}, votes: 0, up: null};
    
    constructor(props: any) {
        super(props);
    }

    componentWillMount() {
        this.setState({isLoading: true, data: []})
        this.getData().then(data => {
            var d = new Date(0);
            d.setUTCSeconds(data.created + 60);
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
            this.setState({ votes: data.score, up: data.likes, data: data, isLoading: false});
        });
    }

    getTime(created: number) {
        var d = new Date(0);
        d.setUTCSeconds(created + 60);
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
        return num+suffix;
    }

    getData() {
        return axios.get(authURL + 'r/' +this.props.match.params.subreddit + "/comments/" + this.props.match.params.article).then(res => {
            return res.data;

        })
    }


    
    render() {
        let op = this.state.data.length > 0 ? this.state.data[0].data.children[0] : null;
        let comments = this.state.data.length > 1 ? this.state.data[1].data.children : null;
        if (op  && comments) {
        return (
            <div>
                <div className="commentPost">
                    <div>{"r/" + op.data.subreddit}</div>
                    <small>{this.getTime(op.data.created)} • {op.data.author}</small>
                    <div>{op.data.title}</div>
                </div>
                
                <div>
                    Comments: 
                    {comments.map((x: any) => <div className="comment">{x.data.body}</div>)}
                </div>
            </div>
        )} else {
            return null;
        }

    }
}