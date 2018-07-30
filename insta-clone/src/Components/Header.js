import React from "react";

import "./Header.css";

const Header = () => {
	return (
		<header className="Header">
			<div className="container">
				<div className="Header__nav">
					<a href="#" className="Header__nav--brand">
						<i class="fab fa-instagram" />
						Instagram
					</a>
					<div className="Header__search-bar">
						<input
							type="text"
							className="Header__search--input"
							placeholder="Search"
						/>
						<div className="Header__input--overlay"></div>
					</div>
					<div className="threebuttons">
						<a href="">
							<i class="far fa-compass" />
						</a>
						<a href="">
							<i class="far fa-heart" />
						</a>
						<a href="">
							<i class="far fa-user" />
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
