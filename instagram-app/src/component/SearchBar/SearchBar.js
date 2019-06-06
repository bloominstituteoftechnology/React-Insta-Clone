import React from 'react';

class SearchBar extends React.Component {
    // state = {

    // }
    render(){
        return( 
            <div className="instagram-logo">
                <i class="fab fa-instagram"></i>
            </div>
            
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