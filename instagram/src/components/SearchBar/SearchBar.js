import React,{Component} from 'react';
import './SearchBar.css'
import gram_icon from './gram-icon.jpg'
import gram_logo from './instagram.png'
import {Tooltip, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import styled from 'styled-components'

const StyledP = styled.p`
  font-size:.8rem;
`

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue : '',
      logOutTooltipOpen: false,
      infoTooltipOpen: false,
      modal:false
    }
  }

  logOutToggle = () => {
    this.setState({
      logOutTooltipOpen: !this.state.logOutTooltipOpen
    });
  }

  infoToggle = () => {
    this.setState({
      infoTooltipOpen: !this.state.infoTooltipOpen
    });
  }

  modalToggle = () => {
    this.setState({
      modal: !this.state.modal
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
            <i className="fas fa-info-circle" id="infoIcon" onClick={this.modalToggle}></i>
            <i className="far fa-heart disabled"></i>
            <i className="far fa-user disabled"></i>
            <i className="fas fa-sign-out-alt" id="logoutIcon" onClick={this.logoutHandler}></i>
            <Tooltip placement="bottom" isOpen={this.state.logOutTooltipOpen} target="logoutIcon" toggle={this.logOutToggle}>
              Logout
            </Tooltip>
            <Tooltip placement="bottom" isOpen={this.state.infoTooltipOpen} target="infoIcon" toggle={this.infoToggle}>
              Built With...
            </Tooltip>
          </div>
        </div>

        {/* Info Modal */}
        <Modal isOpen={this.state.modal} toggle={this.modalToggle} className={this.props.className}>
          <ModalHeader toggle={this.modalToggle}>Built With
            <li>React</li>
            <li>ReactStrap</li>
            <li>PropTypes</li>
            <li>StyledComponents</li>
            <li>FontAwesome</li>
            <li>Moment</li>
          </ModalHeader>
          <ModalBody>
            <h6>Improvements</h6>
            <StyledP>Search bar needs to be a bit better on detecting the backspace character. Something isn't totally clear about updating Asynch State. The Comment icon doesn't focus the Add comment field. A few navigation icons are disabled. Authentication is just local Storage. Got into PropTypes, but would be cool to extend this to unit tests. If you have other ideas email me at <a href="mailto:vimalshah77@gmail.com">vimalshah77@gmail.com.</a>  </StyledP>
            <h6>Lessons Learned</h6>
            <StyledP>About two weeks into React and it's pretty awesome! This was a 4 day project. I have to take more breaks as sometimes it feels that there are unlimited ways to improve and tweak these projects. Initially thinking about layout before functionality might have helped me a little. Not doing any styling, but overall component hierarchy. State hierarchy also is something I need to improve on. I placed almost all my data in App.js only to later realize that wasn't necessary. Looking forward to Redux as its a FSM and that seems right to me. Thanks for reading! :)</StyledP>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.modalToggle}>Close</Button>{' '}
          </ModalFooter>
        </Modal>

      </div>
     )
  }
}
export default SearchBar;