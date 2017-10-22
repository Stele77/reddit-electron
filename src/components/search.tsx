import * as React from 'React';
import { SecondaryPages } from './sidebar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BoardTypes } from '../boardTypes';

export interface SearchProps {
    closeMenu: any,
    open: any
}

export class Search extends React.Component<SearchProps> {

    state: any = {q: "", searchResults: [], isLoading: false, subreddits: []};
    
    constructor(props: SearchProps) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.search = this.search.bind(this);
    }
    
    componentWillMount() {
        this.setState({isLoading: true, data: [], dataCount: 0})
        axios.get("https://oauth.reddit.com/subreddits/mine/subscriber").then(res => {
            this.setState({isLoading: false, subreddits: res.data.data.children})
        });
    }

    search(event: any) {
        this.setState({isLoading: true});
        axios.get("https://oauth.reddit.com/search?type=sr&q=" + this.state.q).then(res => {
            this.setState({isLoading: false, searchResults: res.data.data.children});
        })
        event.preventDefault();
    }
    handleInput(event: any) {
        this.setState({q: event.target.value});
    }

    displaySubreddits() {
        if(this.state.q.length == 0)
        {
            return  (this.state.subreddits.map((x: any) => (<Link to = {"/board/" + BoardTypes.Subreddits + "/" + x.data.display_name}>
                        <div className="mess-text">{x.data.display_name_prefixed}</div>   
                    </Link>)));
        }
        return null;
    }

    render(){
        return (
            <div className= "search">
            <h3 className="mess-m-text">Search</h3>
            <form className= "form-style-4" onSubmit={this.search}>
                <input className= "form-control search-form" type="text" value={this.state.q} onChange={this.handleInput}/>
                <input className="searchBtn" type= "submit"/>
            </form>
            {this.displaySubreddits()}
            <div onClick={this.props.closeMenu}>{   this.state.searchResults.map((x: any) => (
                <Link to = {"/board/" + BoardTypes.Subreddits + "/" + x.data.display_name}>
                    <div className="mess-text">{x.data.display_name_prefixed}</div>   
                </Link>
            ))
            }</div>

            </div>
        );
    }
}