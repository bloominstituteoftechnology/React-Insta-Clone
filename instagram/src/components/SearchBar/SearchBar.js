import React from 'react';
import './SearchBar.css';
/*At the end of Day I there will be a single instance of the Search Bar being rendered at the top of the page */
class SearchBar extends React.Component{
    state = {term:''}
  
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
        //some action to search state for term
    }

    render(){
    console.log(this.state)
    return (
        <div className="search-header-wrapper">
        <form onSubmit={this.onFormSubmit}>
            <div>
                <img src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="instagram logo" id="insta-logo"/>
                <label> 
                <h1 className="title">Instagram</h1>
                </label>
            </div>
            <input type = "text" 
        value= {this.state.term} 
        onChange={e=>this.setState({term: e.target.value})}></input>
        </form>
            <div className="rsearch">
                <img src="https://findicons.com/files/icons/1389/g5_system/32/toolbar_find.png" alt="Search"/>
                <img src="#" alt="like"/>
                <img src="#" alt="profile"/>
            </div>
        </div>
    )
}
}
export default SearchBar 

