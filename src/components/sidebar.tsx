import * as React from 'React';
import { Link } from 'react-router-dom';

import { Profile } from './profile';
import { Search } from './search';
import { Messages } from './messages';
import { BoardTypes } from '../boardTypes';

export class Sidebar extends React.Component<any> {
    state: { open: SecondaryPages, isLoggedIn: boolean} = { open: SecondaryPages.None, isLoggedIn: false};

    constructor(props: any) {
        super(props);
        this.state.isLoggedIn = true;

        this.closeSideBar = this.closeSideBar.bind(this);
    }

    showSideBar(): any {
        switch(this.state.open) {

            case(SecondaryPages.Message):
                return (
                    <div className="secondaryMenu">
                        <Messages closeMenu = {this.closeSideBar} open={this.props.open}/>
                    </div>
                )
            case(SecondaryPages.Profile):
                return (
                    <div className="secondaryMenu">
                        <Profile closeMenu = {this.closeSideBar} open={this.props.open}/>
                    </div>
                )
            case(SecondaryPages.Search):
                return (
                    <div className="secondaryMenu">
                        <Search closeMenu = {this.closeSideBar} open={this.props.open}/>
                    </div>
                )
            default:
                return null;
        }
    }

    closeSideBar() {
        this.setState({open: SecondaryPages.None, isLoggedIn: true})
    }

    render() {
        if(this.state.isLoggedIn) {
        return  (<div>
                    <div className="sidebar">
                        <Link to={"/board/" + BoardTypes.Subreddits + "/popular"}>
                            <span className="fa-stack fa-2x" onClick={this.closeSideBar}>
                                <i className="fa fa-circle fa-stack-2x sidebar-main"></i>
                                <i className="fa fa-pied-piper fa-stack-1x logo-color"></i>
                            </span>
                        </Link>
                        <span className="fa-stack fa-2x" onClick={() => this.setState({open: SecondaryPages.Message})}>
                            <i className="fa fa-circle fa-stack-2x sidebar-secondary"></i>
                            <i className="fa fa-envelope fa-stack-1x"></i>
                        </span>
                        <span className="fa-stack fa-2x" onClick={() => this.setState({open: SecondaryPages.Search})}>
                            <i className="fa fa-circle fa-stack-2x sidebar-secondary"></i>
                            <i className="fa fa-search fa-stack-1x"></i>
                        </span>
                        <span className="fa-stack fa-2x" onClick={() => this.setState({open: SecondaryPages.Profile})}>
                            <i className="fa fa-circle fa-stack-2x sidebar-secondary"></i>
                            <i className="fa fa-user fa-stack-1x"></i>
                        </span>
                    </div>
                    {this.showSideBar()}
                </div>);
        } else {
            return null;
        }
    }
}

export enum SecondaryPages {
    Profile,
    Search,
    Message,
    None
}