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
        axios.defaults.headers.common['Authorization'] = "Bearer btT2GnB9J1IQvM0hmKYyeG8r_g0";
        axios.get("https://oauth.reddit.com/search?type=sr&q=" + this.state.q).then(res => {
            console.log(res.data.data.children);
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
            return  (this.state.searchResults.map((x: any) => (<Link to = {"/board/" + BoardTypes.Subreddits + "/" + x.data.display_name}>
                        <div>{x.data.display_name_prefixed}</div>   
                    </Link>)));
        }
        return null;
    }

    render(){
        return (
            <div className= "search">
            <form onSubmit={this.search}>
                Search: <input type="text" value={this.state.q} onChange={this.handleInput}/>
                <input type="submit" value="Submit"/>
            </form>
            {this.displaySubreddits()}
            <div onClick={this.props.closeMenu}>{   this.state.searchResults.map((x: any) => (
                <Link to = {"/board/" + BoardTypes.Subreddits + "/" + x.data.display_name}>
                    <div>{x.data.display_name_prefixed}</div>   
                </Link>
            ))
            }</div>

            </div>
        );
    }
}