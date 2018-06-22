import React from 'react';
import {SearchBarContainer, SearchBarHeader, SearchBarSearch, SearchBarNav} from '../Styles/ReusableStyles';

// Return SearchBar
// Props: posts={this.state.posts}
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };
    }

    handleChange = (e) => {
        this.setState({search: e.target.value});
    };

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
                            onKeyDown={this.props.handleSearch}
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