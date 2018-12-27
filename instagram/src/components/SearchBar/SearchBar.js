import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: this.props.users,
      searched: ""
    }
  }

  handleNewSearch = (event) => {
    this.setState({searched: event.target.value});
  }

  onSearch = (event) => {
    event.preventDefault();
    const searchedUser = this.state.searched;
    const searchedUserResult = this.state.users.filter(user => user === searchedUser);
    console.log(searchedUserResult)
    if (searchedUserResult.length > 0) {
      this.setState({users: searchedUserResult});
    } else {
      alert(`No user found`);
    }
    this.setState({
      searched: ""
    })
    // console.log(searchedUserResult);
    
  }

  render() {  
    // console.log(this.props.users)
    // console.log(this.state.users)
  
    return (
      <div className="header">
  
        <div className="header-bar">
  
          <div className="search-logos">
            <div className="insta-logo">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="spacer-line"></div>
            <div className="insta-logo-text">
              <img src="https://i.imgur.com/wOWyaBc.png" alt="Instagram Text Logo" />
            </div>
          </div>
  
          <div className="search-bar-input">
            <form onSubmit={this.onSearch}>
              <input type="text" placeholder="Search" onChange={this.handleNewSearch}/>
            </form>
          </div>
          
          <div className="search-bar-icons">
            <div className="search-history search-icon">
            <i className="far fa-compass"></i>
            </div>
            <div className="search-likes search-icon">
              <i className="far fa-heart"></i>
            </div>
            <div className="search-profile search-icon">
              <i className="far fa-user"></i>
            </div>
          </div>
          
        </div>
        
      </div>
    )
  }
  
}
export default SearchBar;