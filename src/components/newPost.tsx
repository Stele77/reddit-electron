import * as React from 'React';
import { SecondaryPages } from './sidebar';
import { Link } from 'react-router-dom';

export interface ProfileProps {
    closeMenu: any;
    open: any;
}

export class NewPost extends React.Component<ProfileProps> {

    post() {

    }

    render() {
        return (
            <div className= "newPost">
                <form onSubmit= {this.post()}>
                Subre

                </form>
            </div>
        );
    }
}