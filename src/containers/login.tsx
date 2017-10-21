import * as React from 'React';
import WebView from 'react-electron-webview';

export class Login extends React.Component {

    onNavigationStateChange() {
        console.log("state changej");
    }
    //read,edit,history,identity,mysubreddits,privatemessages,save,submit,subscribe,vote
    render() {
        return (
            <WebView
                src='http://reddit.com/api/v1/authorize?client_id=NgpgFc7DxzmgBQ&response_type=code&state=hello&redirect_uri=http://127.0.0.1:5000/authorize_callback&duration=permanent&scope=read%20identity%20mysubreddits%20history%20edit%20save%20submit%20privatemessages%20subscribe%20vote'
                className='webViewContainer' />
        )
    }
}