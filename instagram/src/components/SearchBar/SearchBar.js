import React from 'react';
import styled from 'styled-components';

// import './SearchBar.css';

// styled-components
const SearchBarContainer = styled.div`
    max-width: 1080px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    margin: 20px auto;
    border-bottom: 1px solid lightgrey;
`;

const SearchBarHeader = styled.div`
    width: 200px;
    display: flex;
    font-size: 26px;
    font-family: 'Lobster', cursive;

    div {
        padding: 0 20px;

        &:first-child {
            border-right: 2px solid grey;
        }

        &:hover {
            cursor: pointer;
        }
    }
`;

const SearchBarSearch = styled.div`
    input {
        height: 26px;
        text-align: center;
        font-size: 18px;
        border: 1px solid lightgrey;
        border-radius: 5px;
    }
`;

const SearchBarNav = styled.div`
    font-size: 24px;
    width: 200px;
    display: flex;
    justify-content: flex-end;

    div {
        padding: 0 20px;

        i:hover {
            cursor: pointer;
        }

        &:last-child {
            font-family: 'Lobster', cursive;
        }

        &:last-child:hover {
            cursor: pointer;
        }
    }
`;

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