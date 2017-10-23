import * as React from 'React';
import axios from 'axios';
import { Redirect } from 'react-router';

export class Login extends React.Component<any> {

    constructor(props: any) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleLog = this.handleLog.bind(this);
    }

    componentWillMount()
    {
        if(this.props.match.params.out)
        {
            localStorage.clear();
        }
    }

    state: any = {token:"", success: false};
    handleLog(event: any) {
        this.setState({success: false});
        localStorage.setItem("Token", this.state.token);
        axios.defaults.headers.common['Authorization'] = "Bearer " + this.state.token;
        event.preventDefault();
        this.setState({success: true});
        return (<Redirect to = "/" />);
    }

    handleInput(event: any) {
        this.setState({token: event.target.value});
    }
    //read,edit,history,identity,mysubreddits,privatemessages,save,submit,subscribe,vote
    render() {
        return (
            <div>
                <h3 className="mess-m-text">Log In</h3>
                <a href="http://reddit.com/api/v1/authorize?client_id=NgpgFc7DxzmgBQ&response_type=code&state=hello&redirect_uri=http://127.0.0.1:5000/authorize_callback&duration=permanent&scope=read%20identity%20mysubreddits%20history%20edit%20save%20submit%20privatemessages%20subscribe%20vote">Click Me!</a>
                <form className= "form-style-4" onSubmit={this.handleLog}>
                    <input className= "form-control search-form" type="text" value={this.state.token} onChange={this.handleInput}/>
                    <input value="Pay Token" type= "submit"/>
                </form>
                {this.state.success ? (<div>Sucker!</div>):null}
            </div>
        )
    }
}