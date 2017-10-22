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
            return res.data;

        })
    }
    
    render() {
        return (
            <div>
                <div className="commentPost">
                    {this.state.data.length > 0 ? this.state.data[0].data.children.map((x: any) => <div>{x.data.title}</div>) : null}
                </div>
                
                <div>
                    Comments: 
                    {this.state.data.length > 1 ? this.state.data[1].data.children.map((x: any) => <div className="comment">{x.data.body}</div>) : null}
                </div>
            </div>
        )
    }
}