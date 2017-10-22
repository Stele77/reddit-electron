import * as React from "react";
import { PostData, IPostProp } from "./post.model";

export class TextPost extends React.Component<IPostProp> {
    state: any = {isError: false}

    constructor(props: IPostProp) {
        super(props);
        this.handleError = this.handleError.bind(this);
    }

    handleError() {
        this.setState({isError: true})
    }

    render(): any {
        return (
        <div className="text">
            <div className="text-title">
                {this.props.post.title}
            </div>
            <div className="text-selftext">
                {this.props.post.selftext && this.props.post.selftext.length > 80 ? this.props.post.selftext.substring(0, 80) + '...' : this.props.post.selftext}
            </div>
            <div className="text-body">
                {this.props.post.body}
            </div>
            {this.props.post.thumbnail != null && !this.state.isError ? 
            (<img className="text-thumnail" src={this.props.post.thumbnail}  onError={this.handleError} />) : null }
        </div>)
    }
}