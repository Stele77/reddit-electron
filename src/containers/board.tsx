import * as React from 'React';
import { Post } from '../components/posts/post.component';
import axios from 'axios';

export class Board extends React.Component {
    public state: any = {
        posts: []
    };

    constructor(props: any) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentWillMount() {
        this.getPosts().then(posts => {
            this.setState({posts: posts});
        });
    }

    getPosts() {
        return axios.get('http://www.reddit.com/r/all/hot.json').then(res => {
            return res.data.data.children;
        });
    }

    renderPost(post: any) {
        return <Post data={post.data}/>;
    }

    render() {
        const { posts } = this.state;
        if (this.state.posts) {
            return (
                <div className="board">
                    {this.state.posts.map(this.renderPost)}
                </div>
            )
        }
        return (
            <div className="board">
                <h1>A Board Component</h1>
                <div>Loading...</div>
            </div>
        )
    }
}