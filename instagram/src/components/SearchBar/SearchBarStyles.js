import styled from 'styled-components';
import { Sprite } from '../../AppStyles';

const Header = styled.header`
	position: fixed;
	width: 100%;
	background-color: white;
	border-bottom: 1px solid #e6e6e6;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1010px;
	height: 76px;
	padding: 0 40px;
	margin: 0 auto;
`;

const LogoHeader = styled.div``;

// const LogoImageSmall = styled(Sprite)`
// 	position: absolute;
// 	background-position: -98px -205px;
// 	width: 30px;
// 	height: 30px;
// 	opacity: 0;
// 	margin: 2px 0 0;
// `;

const LogoImage = styled(Sprite)`
	background-position: -98px -203px;
	width: 176px;
	height: 35px;
	margin-top: 2px;
`;

const SearchBox = styled.div`
	display: flex;
	margin-top: 2px;
`;

const Component = styled.div`
	display: none;
`;

const SearchBarStyles = { Header, Container, LogoHeader, LogoImage, SearchBox };

export default SearchBarStyles;
