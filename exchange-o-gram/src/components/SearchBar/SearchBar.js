import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: ''
        }
    }
    searchPosts = (event)=>{
        event.preventDefault();
        this.props.searchPosts(this.state.searchText);
        this.setState({
            searchText: ''
        })
    }

    storeSearchText = (event)=>{
        event.preventDefault();
        this.setState({
            searchText: event.target.value
        })
    }

    render(){
        return (
            <div className="search-bar">
                <div className="icon-cam"><i className="fas fa-camera-retro fa-3x"></i></div>
                <div className="name"><span className="app-name">Exchange-O-Gram</span></div>
                    <form onSubmit={this.searchPosts}>
                        <input className="search-input" onChange={this.storeSearchText} placeholder={'\ud83d\udd0d Search'} value={this.state.searchText}></input>
                    </form>
                <div className="icons"><i className="far fa-compass fa-2x"></i><i className="far fa-heart fa-2x"></i><i className="far fa-user fa-2x"></i></div>
            </div>
        )
    }
}

export default SearchBar;