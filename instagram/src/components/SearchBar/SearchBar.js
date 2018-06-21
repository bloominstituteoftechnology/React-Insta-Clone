import React from 'react';
import {SearchBarContainer, SearchBarHeader, SearchBarSearch, SearchBarNav} from '../Styles/ReusableStyles';

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
            <SearchBarContainer>
                <SearchBarHeader>
                    <div><i className="fas fa-camera"></i></div>
                    <div>Instaclone</div>
                </SearchBarHeader>
                <SearchBarSearch>
                    <form>
                        <input
                            type="text"
                            value={this.state.search}
                            placeholder="Search"
                            onChange={this.handleChange}
                        />
                    </form>
                </SearchBarSearch>
                <SearchBarNav>
                    <div><i className="far fa-compass"></i></div>
                    <div><i className="far fa-heart"></i></div>
                    <div><i className="far fa-user"></i></div>
                    <div>{localStorage.getItem("username")}</div>
                </SearchBarNav>
            </SearchBarContainer>
        );
    }
};

export default SearchBar;