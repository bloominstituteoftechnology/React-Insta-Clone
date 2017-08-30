import React from 'react';
import { Button, Modal, OverlayTrigger } from 'react-bootstrap';
import './Modal.css';

export default class ModalPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  close = () => {
    this.setState({ showModal: false });
  };
  open = () => {
    this.setState({ showModal: true });
  };
  render() {
    return (
      <div>
        <button onClick={this.open}>
          <span className="ellipsis" />
        </button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Report inappropriate</Modal.Title>
          </Modal.Header>
          <Modal.Body />
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
