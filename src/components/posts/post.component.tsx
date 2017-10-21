import * as React from "react";
import { TextPost } from './text.component';
import { PostData } from './post.model';
import { LinkPost } from './link.component';
import { PicturePost } from './pic.component';

export class Post extends React.Component<any> {
    constructor(props: any) {
        super(props);

        console.log(props.data);
    }

    renderPost() {
        let postData: PostData = this.props.data;
        console.log(postData);
        switch (postData.post_hint) {
            case ("link"):
                return (<LinkPost post={postData}/>)
            case ("image"):
                return (<PicturePost post={postData}/>)
            case ("self"):
                return (<TextPost post={postData}/>)
            default:
                return (<TextPost post={postData}/>)
        }
    }
    
    render() {
        return (
            <div className="post">
                <div className="title-block">
                    <span className="subreddit-thumb"><i className="fa fa-2x fa-reddit"></i>
                    <img src={this.props.data.preview}></img>
                    </span>
                    <div className="subreddit-info">
                        <span>r/{this.props.data.subreddit}</span>
                        <small>3h • {this.props.data.author}</small>
                    </div>
                    <span className="post-options"><a><i className="fa fa-ellipsis-h"></i></a></span>
                </div>
                <div className="post-block">{this.renderPost()}</div>
            </div>
        );
    }
}