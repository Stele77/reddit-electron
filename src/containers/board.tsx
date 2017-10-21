import * as React from 'React';
import { Post } from '../components/posts/post.component';
import axios from 'axios';
import { BoardTypes, BoardTypeObjects } from '../boardTypes';

export interface BoardProps {
    boardType: BoardTypes;
    match: any;
}

export class Board extends React.Component<BoardProps> {
    public state: { data: any[], isLoading: boolean, dateCount: number } ;

    constructor(props: any) {
        super(props);
        axios.defaults.headers.common['Authorization'] = "Bearer -LurnDc_nLn8lhmUU3qUjODnFNA";
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    componentWillMount() {
        this.setState({isLoading: true, data: [], dataCount: 0})
        this.getData(Number(this.props.match.params.boardType), this.props.match.params.subreddit).then(data => {
            this.setState({data: data, isLoading: false, dataCount: data.count});
        });
    }

    componentWillReceiveProps(nextProps: BoardProps) {
        if(nextProps.match.params.boardType != this.props.match.params.boardType || nextProps.match.params.subreddit != this.props.match.params.subreddit) {
            this.setState({isLoading: true, data: [], dataCount: 0})
            this.getData(Number(nextProps.match.params.boardType), nextProps.match.params.subreddit).then(data => {
                this.setState({data: data, isLoading: false, dataCount: data.count});
            });
        }
    }

    getData(boardType: BoardTypes, subreddit?: string) {
        switch(boardType) {
            case BoardTypes.Subreddits:
            console.log(this.props.match.params);
                return axios.get(BoardTypeObjects[boardType].URL + subreddit).then(res => {
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

    render() {
        if (this.state && !this.state.isLoading) {
            if(this.state.data.length == 0) {
                return (<div>
                    <div>We did not find any data matching your request</div>
                </div>)
            } else {
                switch(this.props.boardType)
                {
                    default:
                    return <div className="board">{this.state.data.map(this.renderPost)}</div>
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