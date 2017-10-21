import * as React from 'React';
import { SecondaryPages } from '../sidebar';
import { BoardTypes } from '../../boardTypes';
import { Link } from 'react-router-dom';

export interface ProfileProps {
    closeMenu: any;
    open: any;
}

export class Profile extends React.Component<ProfileProps> {

    render() {
        return (<div className='profile'>
                    <Link to={'/board/' + BoardTypes.Saved} onClick={this.props.closeMenu}>
                        <span className="fa-stack fa-2x">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-download fa-stack-1x fa-inverted"></i>
                        </span>
                        Saved <br />
                    </Link>
                    <Link to={'/board/' + BoardTypes.MyPosts} onClick={this.props.closeMenu}>
                        <span className="fa-stack fa-2x">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-pencil fa-stack-1x fa-inverted"></i>
                        </span>
                        My Posts <br />
                    </Link>
                    <Link to={'/board/' + BoardTypes.MyComments} onClick={this.props.closeMenu}>
                        <span className="fa-stack fa-2x">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-comments fa-stack-1x fa-inverted"></i>
                        </span>
                        My Comments <br />
                    </Link>
                    <Link to={'/board/' + BoardTypes.Upvoted} onClick={this.props.closeMenu}>
                        <span className="fa-stack fa-2x">
                         <i className="fa fa-circle fa-stack-2x"></i>
                         <i className="fa fa-reddit-thumbs-up fa-stack-1x fa-inverted"></i>
                         </span>
                         Upvoted <br />
                    </Link>
                    <Link to={'/board/' + BoardTypes.Hidden} onClick={this.props.closeMenu}>
                        <span className="fa-stack fa-2x">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-ban fa-stack-1x fa-inverted"></i>
                        </span>
                        Hidden <br />
                    </Link>
                </div>);
    }
}