import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }

    search = (event) => {
        let value = event.target.value;
        this.setState({
           searchValue: value
        })
        
        this.props.display(value);
        
    }
    resetSearchValue = (event) => {
        event.target.value = '';
    }
    resetInputValue = (event) => {
        event.target.value = 'Search';
    }

    render() {
        // console.log(this.props)
        return (
            <div className="input">
              <input type='text' placeholder= 'Search' 
                     className='search-icon-center' 
                     value={this.state.searchValue}
                     onChange={this.search}
                     onFocus={this.resetValue}
                     onBlur={this.resetInputValue}/>
              <span className='search-icon search-icon-center'><img src='https://i.postimg.cc/Hx1q1NZC/if_icon-111-search_314807.png' alt='search-icon' /></span>
              <span className='cross-mark'><img src='https://i.postimg.cc/fTnXGQhb/if_x_alt_118584.png' alt='cross' /></span>
              {/* <FontAwesomeIcon icon={['fa', 'search']} /> */}
            </div>
        );
    }
}

export default SearchInput;
