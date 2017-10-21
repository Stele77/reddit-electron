import * as React from 'React';

export class Search extends React.Component {

    render(){
        let subreddits = [];
        for(var i = 0; i < 9; i++)
        {
            subreddits.push(<div> {i} </div>);
        }
        return (<div className="search">
                    <form>
                        Search: <input type="text" name="searchVal"></input>
                    </form>
                    {subreddits};
                </div>);
    }
}