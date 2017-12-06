import React, { Component } from 'react';

export default class Comments extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
    	<div className="comments">
				{
					this.props.comments.map((com, i) => {
						return <p key={i}><strong>{com.username}</strong>&nbsp;{com.text}</p>
					})
				}
			</div>
    );
  }
}
