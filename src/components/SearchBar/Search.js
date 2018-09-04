import React from 'react'
import './Search.css'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchStr: ""
    }
  }

  handleSearch = (e) => {
    this.setState({ searchStr: e.target.value })
    this.props.search(this.state.searchStr)
  }

  render() {
    return (
      <div className="Search">
        <div className="navLogo">
          <i className="fab fa-instagram navLogo1"></i>
          <span className="cookieFont navLogo2">Instagram</span>
        </div>
  
  
        <div className="navSearch">
          <input
            className="navSearch-input"
            placeholder={this.state.searchStr || "🔍 Search"}
            onChange={(e) => this.handleSearch(e)}
          />
        </div>
  
        <div className="navIcons">
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
        </div>
      </div>
    )
  }
}

export default Search
