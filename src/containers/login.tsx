import * as React from 'React';
import WebView from 'react-electron-webview';

export class Login extends React.Component {

    onNavigationStateChange() {
        console.log("state changej");
    }

    render() {
        return (
            <WebView
                src='http://reddit.com/api/v1/authorize?client_id=NgpgFc7DxzmgBQ&response_type=code&state=hello&redirect_uri=http://127.0.0.1:5000/authorize_callback&duration=permanent&scope=read'
                className='webViewContainer' />
        )
    }
}