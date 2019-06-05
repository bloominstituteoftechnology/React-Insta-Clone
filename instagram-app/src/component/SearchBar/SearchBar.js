import React from 'react';

class SearchBar extends React.Component {
    // state = {

    // }
    render(){
        return( 
            <input 
                name="search" 
                onChange={this.props.searchFilter}
                placeholder="search..."
                type="text"
                //value={this.props.newSearch}
                 
            />
        );
    }
}
export default SearchBar;