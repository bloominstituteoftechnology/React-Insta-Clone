import React from 'react';
 const Authenticate = PassedComponent => {
    return class WrappedComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
             }
        }
         render () {
            return (
                <div>
                    <PassedComponent />
                </div>
            )
        }
    }
} 
    
 export default Authenticate;