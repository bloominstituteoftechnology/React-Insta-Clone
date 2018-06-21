import React from 'react';
import './SearchBar.css';

// Return SearchBar
// Props: posts={this.state.posts}
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: props.posts,
            filteredPosts: [],
            search: ""
        };
    }

    componentDidMount() {
        // const id = this.props.postId;
        // // If postId in localStorage, setState, JSON.parse, and getItem
        // // Else setComments()
        // if (localStorage.getItem(id)) {
        //     this.setState({
        //         comments: JSON.parse(localStorage.getItem(id))
        //     });
        // } else {
        //     this.setComments();
        // }
    }

    handleChange = (e) => {
        this.setState({search: e.target.value});
    }

    filterPosts= () => {

    }

    render() {
        return (
            <div className="search-bar-container">
                <div className="search-bar-header">
                    <div><i className="fas fa-camera"></i></div>
                    <div>Instaclone</div>
                </div>
                <div className="search-bar-search">
                    <form onSubmit="">
                        <input
                            type="text"
                            value={this.state.search}
                            placeholder="Search"
                            onChange={this.handleChange}
                        />
                    </form>
                </div>
                <div className="search-bar-nav">
                    <div><i className="far fa-compass"></i></div>
                    <div><i className="far fa-heart"></i></div>
                    <div><i className="far fa-user"></i></div>
                    <div>{localStorage.getItem("username")}</div>
                </div>
            </div>
        );
    }
};

export default SearchBar;