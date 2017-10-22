import * as React from 'React';
import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';
import { Route } from 'react-router-dom';

import { Board } from './board';
import { PostPage } from './post-page';

import { Redirect } from 'react-router-dom';
import { BoardTypes } from '../boardTypes';

import axios from 'axios';
import { Login } from './login';


export class App extends React.Component<any> {
    location = this.props.location;

    constructor(props: any) {
        super(props);
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("Token");
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    reroute() {
        if(this.props.location.pathname == '/'){
            return <Redirect to={"/board/" + BoardTypes.Subreddits + '/popular'} />
        } else {
            return null;
        }
    }

    render() {
        
        return (
            <div>
                {this.reroute()}
                <Sidebar />
                <div className="flex-container">
                    <Header location = {location}/>

                    <Route path="/board/:boardType/:subreddit?" component={Board}/>
                    <Route path="/post/:subreddit/:article" component={PostPage} />
                    {<Route path="/Login" component={Login}/>}
                </div>
            </div>
        )
    }
}