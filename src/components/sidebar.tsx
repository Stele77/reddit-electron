import * as React from 'React';

export class Sidebar extends React.Component {

    render() {
        return  (<div className="sidebar">
                    <span className="fa-stack fa-2x">
                        <i className="fa fa-circle fa-stack-2x sidebar-main"></i>
                        <i className="fa fa-reddit-alien fa-stack-1x"></i>
                    </span>
                    <span className="fa-stack fa-2x">
                        <i className="fa fa-circle fa-stack-2x sidebar-secondary"></i>
                        <i className="fa fa-envelope fa-stack-1x"></i>
                    </span>
                    <span className="fa-stack fa-2x">
                        <i className="fa fa-circle fa-stack-2x sidebar-secondary"></i>
                        <i className="fa fa-search fa-stack-1x"></i>
                    </span>
                    <span className="fa-stack fa-2x">
                        <i className="fa fa-circle fa-stack-2x sidebar-secondary"></i>
                        <i className="fa fa-user fa-stack-1x"></i>
                    </span>
                </div>)
    }
}