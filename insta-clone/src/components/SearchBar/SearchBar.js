import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInput: ''
        }
    }

    render() {
        return (
            <div className='search-container'>
                <div className='branding'>
                    <img className='logo' src='#' alt='logo'/>
                    <img className='title' src='#' alt='title'/>
                </div>

                <form>
                    <input type='text' onChange={this.props.searchPost}/>
                </form>

                <div className='search-nav'>
                    <img src='#' alt='compass'/>
                    <img src='#' alt='likes'/>
                    <img src='#' alt='profile'/>
                </div>
            </div>
        )
    }
}

export default SearchBar