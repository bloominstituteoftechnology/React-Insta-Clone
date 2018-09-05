import React from 'react'
import './Search.css'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ""
    }
  }

  updateTerm = (e) => {
    this.setState({ term: e.target.value })
  }

  search = (e) => {
    e.preventDefault()
    this.props.search(this.state.term)
  }

  render() {
    return (
      <div className="Search">
        <div className="navLogo">
          <i className="fab fa-instagram navLogo1"></i>
          <span className="cookieFont navLogo2">Instagram</span>
        </div>
  
  
        <form className="navSearch" onSubmit={this.search}>
          <input
            className="navSearch-input"
            placeholder={this.state.searchStr || "🔍 Search"}
            onChange={this.updateTerm}
          />
        </form>
  
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
