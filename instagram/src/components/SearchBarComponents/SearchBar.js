import React from 'react';
import styled from 'styled-components';
import './SearchBar.css';


const SearchBarWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
`;

const LogoImg = styled.img`
    width: 50%;
`;

const SearchInput = styled.input`
    margin-top: 80px;
    border-radius: 3px;
    height: 20px;
    font-size: 14px;
    padding-left: 10px;
    color: gray;
    background: #F7F8F7;
    margin-bottom: 0px;
`;

const IconsWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 70px;
`;

const CompassImg = styled.img`
    width: 40px;
    height: 40px;
`;

const HeartImg = styled.img`
    width: 30px;
    height: 35px;
    padding-top: 8px;
`;

const PersonImg = styled.img`
    width: 30px;
    height: 37px;
    padding-top: 8px;
`;

const SearchBar = (props)=> {
    return (
        <SearchBarWrapper>
            <div>
                <LogoImg onClick={props.logOut} src='https://images.vexels.com/media/users/3/137201/isolated/preview/83b5f2a86fa0ec9f938664da94a9bc55-instagram-silhouette-stroke-logo-by-vexels.png' className='logo-img' />
            </div>
            <div>
                <SearchInput className='search-input' type='text' placeholder='Search' onKeyDown={props.searchedPost} />
            </div>
            <IconsWrapper>
                <div>
                    <CompassImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5EGMr2m-B9HnZjVtAvKbpZMOw8sn3CiKb1Nex3gFvKIZ0vjosTA'/>
                </div>
                <div className='icons heart'>
                    <HeartImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_LktPZC6w-ymgFFTzKvQn7LXQyyZs5mlIm9zgjOiHzyBkvEFD'/>
                </div>
                <div>
                    <PersonImg src='http://www.iconarchive.com/download/i93784/custom-icon-design/silky-line-user/user.ico'/>
                </div>
            </IconsWrapper>
        </SearchBarWrapper>
    );
};

export default SearchBar;