import React from 'react';

const Authenticate = App => {
    class HOC extends React.Component {
        constructor(){
          super();
        }

        render(){
            return <App />
        }
    }
    return HOC;
}

export default Authenticate;