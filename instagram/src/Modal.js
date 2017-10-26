import React, { Component } from 'react';
import './Modal.css'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isModalOpen: false, 
    };
    this.props = props;
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({ isModalOpen: !(this.state.isModalOpen) });
  }
  render() {
    return (
      <div>
        <label onClick={this.toggleModal}>...</label>
        <div className='modal' style={{visibility:this.state.isModalOpen ? 'visible':'hidden'}}>
          <span onClick={this.props.flag}>flag as innapropriate</span>
          <span onClick={this.toggleModal}>cancel</span>
        </div>
      </div>
    )
  }
}
export default Modal;