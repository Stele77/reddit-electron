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
    loginState = false;

    constructor(props: any) {
        super(props);
        this.reroute();
        this.GoBack = this.GoBack.bind(this);
    }

    reroute() {
        axios.get('/auth/token').then(res => {
            let token = res.data.token;

            if(token == null) {
                this.props.history.push('/Login');
            } else {
                this.loginState = true;
                axios.defaults.headers.common['Authorization'] = "Bearer " + res.data.token;
                axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                if(this.props.location.pathname == '/'){
                    this.props.history.push("/board/" + BoardTypes.Subreddits + '/popular');                
                }
            }
        })
    }

    GoBack() {
        this.props.history.goBack();
    }

    render() {
        
        return (
            <div>
                <Sidebar />
                <div className="flex-container">
                    <Header location = {location} loginState={this.loginState} back={this.GoBack} showBack={this.props.history.length > 2}/>

                    <Route path="/board/:boardType/:subreddit?" component={Board}/>
                    <Route path="/post/:subreddit/:article" component={PostPage} />
                    {<Route path="/Login" component={Login}/>}
                </div>
            </div>
        )
    }
}