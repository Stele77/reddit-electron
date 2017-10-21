import * as React from "react";
import { TextPost } from './text.component';

export class Post extends React.Component<any> {
    constructor(props: any) {
        super(props);

        console.log(props);
    }
    
    render() {
        return (
            <div className="post">
                <TextPost/>
            </div>
        );
    }
}