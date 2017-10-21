import * as React from 'React';
import { Link } from 'react-router-dom';

import { Profile } from './profile';
import { Search } from './search';
import { Messages } from './messages';

export class Sidebar extends React.Component<any> {
    state: { open: SecondaryPages } = { open: SecondaryPages.None };

    constructor(props: any) {
        super(props);
    }

    showSideBar(): any {
        if(this.state.open === SecondaryPages.Message) {
            return (
                <div className="secondaryMenu">
                    <Messages />
                </div>
            )
        } else if(this.state.open === SecondaryPages.Profile) {
            return (
                <div className="secondaryMenu">
                    <Profile />
                </div>
            )
        } else if(this.state.open === SecondaryPages.Search) {
            return (
                <div className="secondaryMenu">
                    <Search />
                </div>
            )
        }

        return null
    }

    render() {
        return  (<div>
                    <div className="sidebar">
                        <Link to="/home">
                            <span className="fa-stack fa-2x" onClick={() => this.setState({open: SecondaryPages.None})}>
                                <i className="fa fa-circle fa-stack-2x sidebar-main"></i>
                                <i className="fa fa-reddit-alien fa-stack-1x"></i>
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
                </div>)
    }
}

export enum SecondaryPages {
    Profile,
    Search,
    Message,
    None
}