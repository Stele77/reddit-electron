import * as React from 'React';
import { Post } from '../components/posts/post.component';
import axios from 'axios';
import { BoardTypes, BoardTypeObjects } from '../boardTypes';

export interface BoardProps {
    boardType: BoardTypes;
    match: any;
}

export class Board extends React.Component<BoardProps> {
    public state: any;

    constructor(props: any) {
        super(props);
        axios.defaults.headers.common['Authorization'] = "Bearer BGUPj8n_VKXyocS-8yg8lBUaOXw";
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    componentWillMount() {
        this.getData().then(data => {
            this.setState({data: data});
        });
    }

    componentWillUpdate(nextProps: BoardProps, nextState: any) {
    }

    componentWillReceiveProps(nextProps: BoardProps) {
        if(nextProps.match.params.boardType != this.props.match.params.boardType) {
            this.setState({data: []})
            this.getData().then(data => {
                this.setState({data: data});
            });
        }
    }

    getData() {
        return axios.get(BoardTypeObjects[Number(this.props.match.params.boardType)].URL).then(res => {
            return res.data.data.children;
        });
    }

    renderPost(post: any) {
        return <Post data={post.data}/>;
    }

    render() {
        if (this.state && this.state.data) {
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