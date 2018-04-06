import React, { Component } from 'react';
import './SearchBar.css';
import PostContainer from '../PostContainer/PostContainer';
import dummyData from '../../dummy-data';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
        }
    }

    search = (e) => {
        this.setState({ input: e.target.value });
    }

    render() {
        return (
            <div>
                <input
                    className="searchbar"
                    onChange={this.search}
                    type="text"
                    placeholder="SearchBar"
                />
                {dummyData.map((post, index) => {
                    if (this.state.input === "") {
                        return <PostContainer key={index} postData={post} />
                    } else {
                        if (post.username.includes(this.state.input)) {
                            return <PostContainer key={index} postData={post} />
                        }
                    }
                })}
            </div>
        )
    }
}

export default SearchBar;