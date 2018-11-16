/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-grow: 1;
    padding-left: 24px;
    justify-content: flex-end;
    a {
        display: block;
        overflow: hidden;
        text-indent: 110%;
        background-repeat: no-repeat;
        height: 24px;
        width: 24px;
        background-image: url(https://www.instagram.com/static/bundles/base/sprite_core.png/00b79edf00fd.png);
        margin-left: 30px;
        &.social-icons--compass {
            background-position: -130px -399px;
        }
        &.social-icons--heart {
            background-position: -208px -399px;
        }
        &.social-icons--profile {
            background-position: -26px -399px;
        }
    }
`;

const SocialIcons = (props) => {
    return (
        <Div className="social-icons">
            <a className="social-icons--compass" href="#" />
            <a className="social-icons--heart" href="#" />
            <a className="social-icons--profile" href="#" />
        </Div>
    );
};

export default SocialIcons;
