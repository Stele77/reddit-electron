import * as React from 'React';
import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';
import { Route } from 'react-router-dom';

import { Board } from './board';
// import { Login } from './login';

export class App extends React.Component<any> {
    render() {
        var location = this.props.location;
        return (
            <div>
                <Sidebar />
                <div className="flex-container">
                    <Header location = {location}/>
                    <Route path="/board/:boardType/:subreddit" component={Board}/>
                    {/* <Route path="/Login" component={Login}/> */}
                </div>
            </div>
        )
    }
}