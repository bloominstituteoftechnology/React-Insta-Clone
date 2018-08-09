import React from 'react';
import Instagram from './instagram.png'
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            posts: props.posts,
            
        }
    
        
    }  
        
      
    render () {  
        return (
            <div className="search-container">
                <div className="image-container">
                    <img src={Instagram} alt="instagram" className="instagram-img" />
                </div>
                <div>
                    <input type="text" 
                    placeholder="Search"
                    onKeyDown={this.props.handleInput}//Todo Research onChange events
                    value={this.props.value}
                    />
                </div>
                <div className="icon-container">
                    <div className="icon">
                        <i className="fa fa-compass" />
                    </div>
                    <div className="icon">
                        <i className="fa fa-heart" />
                    </div>
                    <div className="icon">
                        <i className="fa fa-user-circle" />
                    </div>
                </div>
            </div>
        );
    }
};   

export default SearchBar;