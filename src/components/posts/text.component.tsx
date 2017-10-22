import * as React from "react";
import { PostData, IPostProp } from "./post.model";

export class TextPost extends React.Component<IPostProp> {
    constructor(props: IPostProp) {
        super(props);
        console.log(props);
    }

    render(): any {
        return (
        <div className="text">
            <div className="text-title">
                {this.props.post.title}
            </div>
            <div className="text-selftext">
                {this.props.post.selftext}
            </div>
            {this.props.post.thumbnail != null ? 
            (<img className="text-thumnail" src={this.props.post.thumbnail}/>) : null }
        </div>)
    }
}