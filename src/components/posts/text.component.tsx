import * as React from "react";

export class TextPostComponent extends React.Component {
    render() {
        return <div className="container"><h1 className="title">Reddit Wrapper</h1><p className="subtitle">An Electron wrapper for Reddit!</p><button className='button'>Login to Reddit</button></div>;
    }
}