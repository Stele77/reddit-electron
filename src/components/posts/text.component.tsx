import * as React from "react";
import { PostData, IPostProp } from "./post.model";

export class TextPost extends React.Component<IPostProp> {
    constructor(props: IPostProp) {
        super(props);
    }

    render(): any {
        return <div className="text">TEXT COMPONENT</div>;
    }
}