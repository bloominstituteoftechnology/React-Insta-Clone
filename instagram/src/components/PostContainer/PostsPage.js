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
        localStorage.removeItem('username');
        window.location.reload();
    }

    render() {
        return (
            <div>
                <SearchBar handleSearch = { this.handleSearch } />
                <div className = 'welcome-div'>Hello { this.props.username }</div>
                <button onClick = { this.logOut } >Log Out</button>
                { this.state.data.map((data, index) => {
                    return <PostContainer 
                        key = { index } 
                        index = { index } 
                        data = { data } 
                        username = { this.props.username } 
                    />
                })}
            </div>
        );
    }
}

export default PostsPage;
