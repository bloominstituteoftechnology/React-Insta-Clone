import React, { Component } from 'react';

const Authenticate = App => {
	class extends React.Component {
    constructor(){
      super();
    }
		render() {
			return <App />;
		}
	}
};

export default Authenticate;

