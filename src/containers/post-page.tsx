import * as React from 'react';
import axios from 'axios';
import { authURL } from '../boardTypes';

export class PostPage extends React.Component<any> {
    state: any = { isLoading: false, data: {} };
    constructor(props: any) {
        super(props);
        console.log(this.props);
    }

    componentWillMount() {
        this.setState({isLoading: true, data: []})
        this.getData().then(data => {
            console.log(data);
            this.setState({data: data, isLoading: false});
        });
    }

    getData() {
        return axios.get(authURL + 'r/' +this.props.match.params.subreddit + "/comments/" + this.props.match.params.article).then(res => {
            return res.data.reduce((a: any, b: any) => {
                a.children.concat(b.children);
            });

        })
    }
    
    render() {
        return (
            <div>
                {this.state.data.map((x: any) => <div>{x.data.children[0].title} {x.data.children[0].body}</div>)}
            </div>
        )
    }
}