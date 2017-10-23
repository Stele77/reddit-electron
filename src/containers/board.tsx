import * as React from 'React';
import { Post } from '../components/posts/post.component';
import axios from 'axios';
import { BoardTypes, BoardTypeObjects } from '../boardTypes';

export class Board extends React.Component<any> {
    public state: { data: any[], isLoading: boolean, dateCount: number, pageCount: number } ;

    constructor(props: any) {
        super(props);
    }

    componentWillMount() {
        this.setState({isLoading: true, data: [], dataCount: 0, pageCount: 0})
        this.getData(Number(this.props.match.params.boardType), this.props.match.params.subreddit).then(data => {
            this.setState({data: data, isLoading: false, dataCount: data.count, pageCount: 1});
        });
    }

    componentWillReceiveProps(nextProps: any) {
        if(nextProps.match.params.boardType != this.props.match.params.boardType || nextProps.match.params.subreddit != this.props.match.params.subreddit) {
            this.setState({isLoading: true, data: [], dataCount: 0})
            this.getData(Number(nextProps.match.params.boardType), nextProps.match.params.subreddit).then(data => {
                this.setState({data: data, isLoading: false, dataCount: data.count});
            });
        }
    }

    getData(boardType: BoardTypes, subreddit?: string) {
        switch(boardType){
            case BoardTypes.Subreddits:
                return axios.get(BoardTypeObjects[boardType].URL + subreddit+"?limit=100").then(res => {
                    return res.data.data.children;
                });
            default:
                return axios.get(BoardTypeObjects[boardType].URL).then(res => {
                    return res.data.data.children;
                });
        }
    }

    renderPost(post: any) {
        return <Post data={post.data}/>;
    }

    LoadMore() {
    }

    buildComments() {
        return this.state.data.map(x => (<div className="links">{x.data.link_title}</div>))
    }

    buildColumns() {
        let col1 = [], col2 = [], col3 = [];
        let i;
        for(i = 0; i < this.state.data.length; i++) {
            if(i % 3 == 0 && this.state.data[i].data.over_18 == false) {
                col1.push(this.renderPost(this.state.data[i]))
            }
            if(i % 3 == 1 && this.state.data[i].data.over_18 == false) {
                col2.push(this.renderPost(this.state.data[i]))
            }
            if(i % 3 == 2 && this.state.data[i].data.over_18 == false) {
                col3.push(this.renderPost(this.state.data[i]))
            }
        }
        let colElem1 = (<div className="post-col col-sm-4">{col1}</div>)
        let colElem2 = (<div className="post-col col-sm-4">{col2}</div>)
        let colElem3 = (<div className="post-col col-sm-4">{col3}</div>)
        return (<div>{colElem1}{colElem2}{colElem3}</div>)
    }

    render() {
        if (this.state && !this.state.isLoading) {
            if(this.state.data.filter(x => !x.data.over_18).length == 0) {
                return (<div className="container">
                    <div>We did not find any data matching your request</div>
                </div>)
            } else {
                switch(Number(this.props.match.params.boardType))
                {
                    case BoardTypes.Saved:
                    case BoardTypes.MyComments:
                    case BoardTypes.PostReplies:
                    case BoardTypes.UsernameMentions:
                        return this.buildComments();
                    default:
                        return this.buildColumns();
                }
            }
        } else {
            return (
                <div className="board">
                    <div>Loading...</div>
                </div>
            )
        }
    }
}