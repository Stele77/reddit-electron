import * as React from 'React';
import { SecondaryPages } from './sidebar';
import { BoardTypes } from '../boardTypes';
import { Link } from 'react-router-dom';

export interface ProfileProps {
    closeMenu: any;
    open: any;
}

export class Profile extends React.Component<any> {

    render() {
        return (<div className='profile'>
                    <h3 className= "mess-m-text">Profile</h3>
                    <Link to={'/board/' + BoardTypes.Saved} onClick={this.props.closeMenu}>
                        <span className="fa-stack fa-2x">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-download fa-stack-1x mess-stack"></i>
                        </span>
                        <span className="mess-text">Saved</span> <br />
                    </Link>
                    <Link to={'/board/' + BoardTypes.MyPosts} onClick={this.props.closeMenu}>
                        <span className="fa-stack fa-2x">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-pencil fa-stack-1x mess-stack"></i>
                        </span>
                        <span className="mess-text">My Posts</span> <br />
                    </Link>
                    <Link to={'/board/' + BoardTypes.MyComments} onClick={this.props.closeMenu}>
                        <span className="fa-stack fa-2x">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-comments fa-stack-1x mess-stack"></i>
                        </span>
                        <span className="mess-text">My Comments</span> <br />
                    </Link>
                    <Link to={'/board/' + BoardTypes.Upvoted} onClick={this.props.closeMenu}>
                        <span className="fa-stack fa-2x">
                         <i className="fa fa-circle fa-stack-2x"></i>
                         <i className="fa fa-arrow-up fa-stack-1x mess-stack"></i>
                         </span>
                         <span className="mess-text">Upvoted</span> <br />
                    </Link>
                    <Link to={'/board/' + BoardTypes.Hidden} onClick={this.props.closeMenu}>
                        <span className="fa-stack fa-2x">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-ban fa-stack-1x mess-stack"></i>
                        </span>
                        <span className="mess-text">Hidden</span> <br />
                    </Link>
                </div>);
    }
}