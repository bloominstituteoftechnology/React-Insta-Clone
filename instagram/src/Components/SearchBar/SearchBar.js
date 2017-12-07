import React, {Component} from 'react';

class SearchBar extends Component {
  constructor () {
    super();
    this.state = 
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      this
    })
  }




  render () {
    return (
      <div className="searchBarStyle">
        <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleEmailInput} value={this.state.newEmail}/>
        </form>
      </div>
      );
  }

	}



export default SearchBar