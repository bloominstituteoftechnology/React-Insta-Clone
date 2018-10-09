import React from 'react'
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }

    this.handleInput = this.handleInput.bind(this)
  }


  handleInput(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }
  render() {
    return (
      <div className="SearchBar">
        <div className="logo">
          <img src="https://dxkmbl8uwuv9p.cloudfront.net/kopa-life/1529542065983/d094e116-a8c1-4fdd-ae81-445ec2a792c2/Instagram-logo-black-borders-png-transparent-background.png" alt="instagram logo" />
          </div>
          <div className="divider"></div>
          <input 
            value={this.state.searchTerm}
            onChange={this.handleInput}
            placeholder="Search"></input>
          <div className="explore">explore</div>
          <div className="likes">likes</div>
          <div className="profile">profile</div>
      </div>
    )
  }
}

export default SearchBar;