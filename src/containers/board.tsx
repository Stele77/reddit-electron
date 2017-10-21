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
        axios.defaults.headers.common['Authorization'] = "Bearer LQHiNUEtX-0nA1ZQouSDboF5jPo";
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    componentWillMount() {
        this.getData().then(data => {
            console.log(data);
            this.setState({data: data});
        });
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
        if (this.state) {
            if(!!this.state.data && this.state.data.length == 0) {
                <div>
                    <h1>A Board Component</h1>
                    <div>We did not find any data matching your request</div>
                </div>
            } else {
                switch(this.props.boardType)
                {
                    default:
                    return <div className="board">{this.state.data.map(this.renderPost)}</div>
                }
            }
        }
        return (
                <div className="board">
                    <h1>A Board Component</h1>
                    <div>Loading...</div>
                </div>
        )
    }
}