import * as React from 'React';
import axios from 'axios';
import { Redirect } from 'react-router';

export class Login extends React.Component<any> {

    constructor(props: any) {
        super(props);
    }

    state: any = {token:"", success: false};
    //read,edit,history,identity,mysubreddits,privatemessages,save,submit,subscribe,vote
    render() {
        return (
            <div>
                <h3 className="mess-m-text">Log In</h3>
                <div className="container">
                    <div className='row'>
                        <div className="col-sm-12">
                            <a className="btn btn-default" href="http://reddit.com/api/v1/authorize?client_id=NgpgFc7DxzmgBQ&response_type=code&state=hello&redirect_uri=http://127.0.0.1:5000/authorize_callback&duration=permanent&scope=read%20identity%20mysubreddits%20history%20edit%20save%20submit%20privatemessages%20subscribe%20vote">Click Me!</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}