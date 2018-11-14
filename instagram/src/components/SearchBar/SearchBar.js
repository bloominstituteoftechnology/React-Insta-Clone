import React from 'react';
import like from '../../like.png';
import home from '../../home.png';
import explore from '../../explore.png';
import profile from '../../profile.png';
import PropTypes from 'prop-types'

const SearchBar = (props) => {
	return (
		<header className="navigation">
			<section className='nav'>
				<section className="home">
					<img src={home} alt="home icon" />
				</section>
				<section className="search">
					<form onSubmit={(event) => {
								props.handleSearch(event);
							}}>
						<input
							type="text"
							name="input"
							placeholder="search"
							value={props.searchInput}
							onChange={(event) => {
								props.handleSearch(event);
							}}
						/>
					</form>
				</section>
				<section className="icons">
					<img src={explore} alt="explore icon" />
					<img src={like} alt="like icon" />
					<img src={profile} alt="profile icon" />
				</section>
			</section>
		</header>
	);
};

SearchBar.propTypes = {
	searchInput: PropTypes.string,
	handleSearch: PropTypes.func,
}
export default SearchBar;
