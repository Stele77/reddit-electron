import * as React from 'React';
import { Post } from '../components/posts/post.component';
import axios from 'axios';
import ReactList from 'react-list';
var LazyLoading = require('react-list-lazy-load');

export class Board extends React.Component {
    posts: any[] = [];

    constructor(props: any) {
        super(props);

        this.getPosts();
    }

    getPosts() {
        return axios.get('http://www.reddit.com/r/all/hot.json').then(res => {
            res.data.data.children.forEach((post: any) => {
                console.log(post);
                this.posts.push(post);
            });
            return this.posts;
        });
    }

    render() {
        return (
            <div>
                <h1>A Board Component</h1>
                <LazyLoading
                    length={this.posts.length}
                    items={this.posts}
                    onRequestPage={1}
                >
                    <ReactList
                        itemRenderer={(idx, key) => (
                            <div key={key}>{this.posts[idx]}</div>
                        )}
                        type="uniform"
                        length={this.posts.length}
                    />
                </LazyLoading>
            </div>
        )
    }
}