import React from 'react';
import './searchbar.css';
import styled from 'styled-components';

const MenuStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 110px;
`;
const ImageStyleOne = styled.img`
	height:15px
`;

const Menu = () => {
	return (
		<MenuStyle>
			<ImageStyleOne src={require('../assets/compass.jpg')} alt={'compass'} />

			<img
				className="heart"
				src={require('../assets/heart.jpg')}
				alt={'heart'}
			/>

			<ImageStyleOne src={require('../assets/profile.jpg')} alt={'profile'} />
		</MenuStyle>
	);
};

export default Menu;
