import React from "react";

class Search extends React.Component {
	constructor() {
		super();
		this.state = {
			search: ""
		};
	}
	render() {
		return (
			<div className='search'>
				<form>
					<input type='text' placeholder='&#xF002; Search' />
				</form>
			</div>
		);
	}
}

export default Search;
