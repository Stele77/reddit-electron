import * as React from 'react';
import axios from 'axios';
import { authURL } from '../boardTypes';

export class PostPage extends React.Component<any> {
    state: any = { isLoading: false, data: {} };

    componentWillMount() {
        this.setState({isLoading: true, data: [], dataCount: 0})
        this.getData().then(data => {
            this.setState({data: data, isLoading: false});
        });
    }

    getData() {
        return axios.get(authURL + /r/ + this.props.match.params.subreddit + "/comments/" + this.props.match.params.article).then(res => {
            console.log(res.data.data.children);
            return res.data.data.children;

        })
    }
    
    render() {
        return (
            <h1>A subreddit page</h1>
        )
    }
}