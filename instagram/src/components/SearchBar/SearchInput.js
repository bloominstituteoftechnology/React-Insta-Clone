import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    flex: 0 1 auto;
    min-width: 125px;
    width: 215px;
    height: 28px;
    align-items: stretch;
    display: flex;
    flex-direction: column;
    position: relative;
    input {
        border: solid 1px #dbdbdb;
        border-radius: 3px;
        color: #262626;
        padding: 3px 10px 3px 26px;
        z-index: 2;
        height: 28px;
        width: 100%;
        line-height: 18px;
        background-color: #fafafa;
        text-align: center;
        font-size: 0.5re;
        &::placeholder {
            color: #999999;
            font-weight: 300;
        }
        &:focus {
            background-color: white;
        }
    }
    .search--icon_magnify {
        background-image: url(https://www.instagram.com/static/bundles/base/sprite_core.png/00b79edf00fd.png);
        left: 75px;
        top: 10px;
        width: 10px;
        height: 10px;
        position: absolute;
        background-position: -444px -264px;
        background-repeat: no-repeat;
        display: block;
        z-index: 4;
    }
`;

const SearchInput = (props) => {
    return (
        <Div className={props.active ? 'search--input active' : 'search--input'}>
            <input type="text" name="search" id="search" placeholder="Search" />
            <span className="search--icon_magnify" />
            <span className="search--icon_clear" />
        </Div>
    );
};

export default SearchInput;
