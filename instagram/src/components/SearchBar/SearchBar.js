import React from 'react';
import like from '../../like.png';
import home from '../../home.png';
import explore from '../../explore.png';
import profile from '../../profile.png';

const SearchBar = (props) => {
	return (
		<header className="navigation">
			<section className='nav'>
				<section className="home">
					<img src={home} alt="home icon" />
				</section>
				<section className="search">
					<form onSubmit={props.filterPosts}>
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

export default SearchBar;
