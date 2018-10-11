// import React from 'react';
import styled, { css } from 'styled-components';
import spriteImg from '../assets/icons-sprite.png';
import spriteCoreImg from '../assets/sprite-core.png'

export const Sprite = styled.span`
    background: url(${spriteImg});
    background-size: 241px 213px;
    width: 24px;
    height: 24px;
    ${props => props.heart && css`background-position: -136px -102px;`};
    ${props => props.heartRed && css`background-position: -132px -31px;`};
    ${props => props.comment && css`background-position: -75px -189px; margin-left: 16px;`};
    ${props => props.share && css`background-position: -50px -189px; margin-left: 16px;`};
    ${props => props.smallLogo && css`background-position: -50px -164px;`};
    ${props => props.bookmark && css`
        background-position: -192px -100px;
        position: absolute;
        right: 0;
        top: 9px;
    `};
    ${props => props.logoText && css`
        width: 103px;
        height: 29px;
        background-position: -57px 0px;
        margin-top: 7px;
    `};
`;

export const SpriteCore = styled.span`
    background: url(${spriteCoreImg});
    background-size: 437px 386px;
    width: 24px;
    height: 24px;
    ${props => props.navigate && css`background-position: -363px -303px;`};
    ${props => props.heart && css`background-position: -247px -149px;`};
    ${props => props.user && css`background-position: -229px -336px;`};
    ${props => props.logo && css`
        margin: 0 auto;
        margin-top: 22px;
        margin-bottom: 12px;
        background-position: -97px 0px;
        height: 51px;
        width: 175px;
        display: block;
    `};
`;

