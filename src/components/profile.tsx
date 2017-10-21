import * as React from 'React';

export class Profile extends React.Component {

    render() {
        return (<div className='profile'>
                    <span className="fa-stack fa-2x">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-history fa-stack-1x fa-inverted"></i>
                    </span>
                    History <br />
                    <span className="fa-stack fa-2x">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-download fa-stack-1x fa-inverted"></i>
                    </span>
                    Saved <br />
                    <span className="fa-stack fa-2x">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-pencil fa-stack-1x fa-inverted"></i>
                    </span>
                    My Posts <br />
                    <span className="fa-stack fa-2x">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-comments fa-stack-1x fa-inverted"></i>
                    </span>
                    My Comments <br />
                    <span className="fa-stack fa-2x">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-reddit-thumbs-up fa-stack-1x fa-inverted"></i>
                    </span>
                    Upvoted <br />
                    <span className="fa-stack fa-2x">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-users fa-stack-1x fa-inverted"></i>
                    </span>
                    Friends <br />
                    <span className="fa-stack fa-2x">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-ban fa-stack-1x fa-inverted"></i>
                    </span>
                    Hidden <br />
                </div>);
    }
}