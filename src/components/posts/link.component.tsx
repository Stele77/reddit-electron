import * as React from "react";
import { PostData, IPostProp } from "./post.model";

export class LinkPost extends React.Component<IPostProp> {
    state: any = {isError: false}
    
    constructor(props: IPostProp) {
        super(props);
    }

    handleError() {
        this.setState({isError: true})
    }

    render() {
        return (
        <div className="link">
            <div className="text-block">
            <p className="title">{this.props.post.title}</p>
            </div>
            {!this.state.isError ? (
            <div className="img-block">
                <img src={this.props.post.thumbnail} onError={this.handleError}></img>
            </div>) : null}
        </div>
        );
    }
}