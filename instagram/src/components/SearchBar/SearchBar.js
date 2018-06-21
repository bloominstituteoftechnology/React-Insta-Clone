import React,{Component} from 'react';
import './SearchBar.css'
import gram_icon from './gram-icon.jpg'
import gram_logo from './instagram.png'
import {Tooltip} from 'reactstrap'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };

    this.state = {
      inputValue : ''
    }
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  onInputValueChange = (e) => {
    this.setState({
      inputValue : e.target.value
    })
    this.props.searchHandler(e);
  }

  logoutHandler = (e) =>{
    if (localStorage.getItem('instaclone')) 
    localStorage.removeItem('instaclone')
    window.location.reload();
  }
  
  render() { 
    return ( 
      <div className="container-fluid search-bar sticky-top">
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
            <i className="far fa-compass disabled"></i>
            <i className="far fa-heart disabled"></i>
            <i className="far fa-user disabled"></i>
            <i className="fas fa-sign-out-alt" id="logoutIcon" onClick={this.logoutHandler}></i>
            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="logoutIcon" toggle={this.toggle}>
              Logout
            </Tooltip>
          </div>
        </div>
      </div>
     )
  }
}
export default SearchBar;