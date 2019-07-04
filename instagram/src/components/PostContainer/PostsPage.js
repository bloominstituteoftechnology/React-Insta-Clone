import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

import data from '../../dummy-data';
import fuzzysearch from 'fuzzysearch';

import './PostsPage.css';

class PostsPage extends React.Component {
    constructor (props) {
        super (props);
        
        this.state = {
            data: [],
            displayClass: 'show',
        }
    }

    componentDidMount() {
        // on component mount, give every piece of data (basically every PostContainer) a
        // new key called hidden which takes on a Boolean value to be used with the search when
        // filtering out by username
        let newData = data;

        for (let i = 0; i < newData.length; i++) {
            newData[i].hidden = false;
        }
        
        this.setState({
            data: newData,
        })
    }

    handleSearch = (e) => {
        // if fuzzysearch returns false, then hide that data element, else 
        // show it
        let newData = this.state.data;

        for (let i = 0; i < newData.length; i++) {
            if (!fuzzysearch(e.target.value, newData[i].username)) {
            newData[i].hidden = true;
            } else {
            newData[i].hidden = false;
            }
        }
        
        this.setState({
            data: newData,
        });
    }

    logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('loggedIn');

        return this.setState({
            displayClass: 'hide',
        }, () => {
            setTimeout(() => window.location.reload(), 2000);
        });
    }

    render() {
        return (
            <div className = { this.state.displayClass }>
                <SearchBar 
                    handleSearch = { this.handleSearch } 
                    username = { this.props.username } 
                    logOut = { this.logOut } 
                />
                <div className = 'post-container-div'>
                    { this.state.data.map((data, index) => {
                        return <PostContainer 
                            key = { index } 
                            index = { index } 
                            data = { data } 
                            username = { this.props.username } 
                        />
                    })}
                </div>
            </div>
        );
    }
}

export default PostsPage;
