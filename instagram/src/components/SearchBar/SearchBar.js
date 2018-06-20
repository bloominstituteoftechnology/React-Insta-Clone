import React,{Component} from 'react';
import './SearchBar.css'
import gram_icon from './gram-icon.jpg'
import gram_logo from './instagram.png'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue : ''
    }
  }

  onInputValueChange = (e) => {
    this.setState({
      inputValue : e.target.value
    })
    this.props.searchHandler(e);
  }
  render() { 
    return ( 
      <div className="container-fluid search-bar">
        <div className="row">
          <div className="col-md-3 d-flex">
            <div className="gram-icon">
              <img src={gram_icon} alt="" className="img-fluid gram-icon"/>
            </div>
            <div className="gram-logo">
              <img src={gram_logo} alt="" className="img-fluid gram-logo"/>
            </div>  
          </div>
          <div className="col-md-6 search-field">
            <input type="text" placeholder="Search by username" value={this.state.inputValue} onChange={this.onInputValueChange}/>
          </div>
          <div className="col-md-3 search-icon-group">
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
          </div>
        </div>
      </div>
     )
  }
}
export default SearchBar;