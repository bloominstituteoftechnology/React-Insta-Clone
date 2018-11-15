import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin-top: 4px;
    display: grid;
    width: 100%;
    grid-template-columns: 40px 40px 40px auto;
    div {
        display: flex;
        align-items: center;
        cursor: pointer;
        height: 40px;
        width: 40px;
        span {
            background-image: url(https://www.instagram.com/static/bundles/base/sprite_glyphs.png/07c1c2c6e459.png);
            display: block;
            background-repeat: no-repeat;
            height: 24px;
            width: 24px;
        }
        &.icon-heart {
            span {
                background-position: ${(props) => (props.liked ? '-104px -115px' : '-130px -115px')};
            }
        }
        &.icon-comment {
            span {
                background-position: -217px 0px;
            }
        }
        &.icon-share {
            span {
                background-position: -182px -167px;
            }
        }
        &.icon-bookmark {
            justify-self: end;
            margin-right: -18px;
            span {
                background-position: -52px -167px;
            }
        }
    }
`;

const SocialIcons = (props) => {
    return (
        <Div className="comment--social-icons" liked={props.liked}>
            <div
                className="icon-heart"
                onClick={() => {
                    props.likeHandler();
                }}>
                <span />
            </div>
            <div className="icon-comment">
                <span />
            </div>
            <div className="icon-share">
                <span />
            </div>
            <div className="icon-bookmark">
                <span />
            </div>
        </Div>
    );
};

export default SocialIcons;
