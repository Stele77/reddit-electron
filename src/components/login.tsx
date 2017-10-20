import * as React from 'React';
import WebView from 'react-electron-webview';

export class Login extends React.Component {
    render() {
        return <WebView src='reddit.com/api/v1/authorize?client_id=NgpgFc7DxzmgBQ&response_type=code&state=hello&redirect_uri=http://127.0.0.1:5000/authorize_callback&duration=temporary&scope=read' className='webViewContainer' />
    }
}