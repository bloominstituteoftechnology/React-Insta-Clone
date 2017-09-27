import React, {Component} from 'react';

export default class SearchNav extends Component {
    constructor(props){
        super(props);
        
    }
    updateSearch = (e) =>{
        this.props.newsFeed.setState({
            Posts: this.props.posts.filter((post) => {
                if(document.getElementById("search_bar").value !== ''){
                return post.User === document.getElementById("search_bar").value;
                } else {
                    return true;
                }
            }),
        })
        
    }
    render(){
        return(
            <div id="search_nav">
                <input id="search_bar" onChange={this.updateSearch} placeholder="Search User's Posts" type="text"/>
            </div>
        );
    }
}