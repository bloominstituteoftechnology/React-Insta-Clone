import React from 'react';
import ReactDOM from 'react-dom';


class Modal extends React.Component {
    constructor(props) {
      super(props);
      
      // Create a div that we'll render the modal into. Because each
      // Modal component has its own element, we can render multiple
      // modal components into the modal container.
      this.el = document.createElement('div');
    }
  
    componentDidMount() {
      // Append the element into the DOM on mount. We'll render
      // into the modal container element (see the HTML tab).
      let modalRoot = document.getElementById('modalRoot')
      modalRoot.appendChild(this.el);
    }
  
    componentWillUnmount() {
      // Remove the element from the DOM when we unmount
      let modalRoot = document.getElementById('modalRoot')
      modalRoot.removeChild(this.el);
    }
    
    render() {
      // Use a portal to render the children into the element
      return ReactDOM.createPortal(
        // Any valid React child: JSX, strings, arrays, etc.
        this.props.children,
        // A DOM element
        this.el,
      );
    }
  }

  export default Modal;