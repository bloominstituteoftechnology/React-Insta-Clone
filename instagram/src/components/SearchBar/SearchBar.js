import React, { Component } from 'react';
import './SearchBar.css';

 class SearchBar extends Component {
 	constructor() {
 		super();
 		this.state = {
 			newItem: ''
 		};
 		this.handleItemInput = this.handleItemInput.bind(this);
 	}

 	handleItemInput(event) {
 		this.setState({
 			newItem: event.target.value
 		});
 	}

 	render() {
 		return (
			<div className="SearchBar_container">
				<div className="SearchBar_logoUrl">
					<img src="https://visualpharm.com/assets/854/Instagram-595b40b75ba036ed117d636c.svg" height="20" width="20"/>
				</div>

				<div className="SearchBar_dividerUrl">
					<img src="https://www.spreadshirt.com.au/image-server/v1/mp/designs/12474492,width=178,height=178/vertical-line.png" height="20" width=""/>
				</div>

				<div className="SearchBar_nameUrl">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" height="25" width=""/>
				</div>

				<div className="SearchBar">
					<input type="text" onChange={this.handleItemInput} placeholder="Search" value={this.state.newItem} />
				</div>

				<div className="SearchBar_locationUrl">
					<img src="https://d30y9cdsu7xlg0.cloudfront.net/png/101411-200.png" height="22" width="25"/>
				</div>

				<div className="SearchBar_likesUrl">
					<img src="https://d30y9cdsu7xlg0.cloudfront.net/png/25848-200.png" height="20" width="20"/>
				</div>

				<div className="SearchBar_profileUrl">
					<img src="https://d30y9cdsu7xlg0.cloudfront.net/png/137578-200.png" height="20" width="20"/>
				</div>
			</div>
		);
 	}
	
}

export default SearchBar;