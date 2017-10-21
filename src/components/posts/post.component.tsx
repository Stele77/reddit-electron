import * as React from "react";
import { TextPost } from './text.component';

export class Post extends React.Component<any> {
    constructor(props: any) {
        super(props);

        console.log(props.data);
    }

    componentWillMount() {
        let postData = this.props.data;
    }
    
    render() {
        return (
            <div className="post">
                {this.props.data.domain}
            </div>
        );
    }
}