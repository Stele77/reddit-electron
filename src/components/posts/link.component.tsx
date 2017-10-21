import * as React from "react";
import { PostData, IPostProp } from "./post.model";

export class LinkPost extends React.Component<IPostProp> {
    constructor(props: IPostProp) {
        super(props);
    }

    render() {
        return (
        <div className="link">
            <div className="text-block">
            <p className="title">{this.props.post.title}</p>
            </div>
            <div className="img-block">
                <img src={this.props.post.thumbnail}></img>
            </div>
        </div>
        );
    }
}