import * as React from 'React';
import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';
import { Route } from 'react-router-dom';

import { Board } from './board';
import { Login } from './login';

export class App extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div className="flex-container">
                    <Header />
                    <Route path="/board/:boardType" component={Board}/>
                    <Route path="/Login" component={Login}/>
                </div>
            </div>
        )
    }
}