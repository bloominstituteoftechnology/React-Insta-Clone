import React from 'react';
import Logo from '../Images/Logo.js';
import Compass from '../Images/Compass.js';
import Heart from '../Images/Heart.js';
import User from '../Images/User.js';

const SearchBar = (props) => {
	return (
		<React.Fragment>
			<div className="rowOne">
				<Logo />
				<h2>Instagram</h2>
			</div>
			<form action="submit">
				<input
					placeholder="Search"
					type="text"
					name="search"
					onChange={props.changeHandler}
					value={props.value}
					data={props.dummyData}
				/>
			</form>
			<div className="rowTwo">
				<Compass />
				<Heart />
				<User />
			</div>
		</React.Fragment>
	);
};

export default SearchBar;
