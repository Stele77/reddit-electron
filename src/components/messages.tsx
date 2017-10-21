import * as React from 'React';

export class Messages extends React.Component {

    render() {
        let messageList = [];
        for(var i = 0; i < 9; i++)
        {
            messageList.push(<div> {i} </div>);
        }
        return (<div className='messages'>
                    <h1>Messages</h1>
                    {messageList};
                </div>);
    }
}