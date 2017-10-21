import * as React from "react";
import { PostData, IPostProp } from "./post.model";

export class PicturePost extends React.Component<IPostProp> {
    constructor(props: IPostProp) {
        super(props);
    }

    render() {
        return (
        <div className="pic">PICTURE COMPONENT
            <img src={this.props.post.thumbnail}></img>
        </div>
        );
    }
}