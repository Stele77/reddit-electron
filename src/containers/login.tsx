import * as React from 'React';
import axios from 'axios';
import WebView from 'react-electron-webview';

export class Login extends React.Component {

    constructor(props: any) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleLog = this.handleLog.bind(this);
    }

    state: any = {token:"", success: false};
    handleLog(event: any) {
        this.setState({success: false});
        localStorage.setItem("Token", this.state.token);
        axios.defaults.headers.common['Authorization'] = "Bearer " + this.state.token;
        event.preventDefault();
        this.setState({success: true});
    }

    handleInput(event: any) {
        this.setState({token: event.target.value});
    }
    //read,edit,history,identity,mysubreddits,privatemessages,save,submit,subscribe,vote
    render() {
        return (
            <div>
                <h3 className="mess-m-text">Log In</h3>
                <form className= "form-style-4" onSubmit={this.handleLog}>
                    <input className= "form-control search-form" type="text" value={this.state.token} onChange={this.handleInput}/>
                    <input value="Pay Token" type= "submit"/>
                </form>
                {this.state.success ? (<div>Sucker!</div>):null}
            </div>
        )
    }
}