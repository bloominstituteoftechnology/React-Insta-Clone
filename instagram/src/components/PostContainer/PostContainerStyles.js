import styled from 'styled-components';

const AddAComentDiv = styled.div``;
const TimeStampDiv = styled.div``;
const LikesDiv = styled.div``;
const ImageUrlImg = styled.img``;
const TitleDiv = styled.div``;
const PostContainerDiv = styled.div``;

const PostContainerSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 100px;

    & > ${ PostContainerDiv } {
        border: 1px solid gray;
        width: 45%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 10px 0;

        & > ${ TitleDiv } {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            & > * {
                margin-top: 5px;
                margin-bottom: -3px;
            }

            & > h4 {
                font-size: 15px;
            }

            & > img {
                height: 28px;
                border-radius: 50%;
                margin: 7px 0 8px 9px;
            }
        } // TitleDiv

        & > ${ ImageUrlImg } {
            max-width: 99%;
            max-height: 99%;
            width: auto;
            height: auto;
        }

        & > ${ LikesDiv } {
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            margin: 10px;

            & > i {
                font-size: 24px;

                &:hover {
                    cursor: pointer;
                    filter:opacity(30%);
                }
            }

            & > .fa-comment {
                -webkit-transform: scaleX(-1);
                transform: scaleX(-1);
                margin-left: 6px;
            }

            & > h4 {
                width: 100%;
                text-align: left;
                margin-top: 0;
                margin-bottom: 0;
            }
        } // LikesDiv

        & > ${ TimeStampDiv } {
            display: flex;
            justify-content: left;
            width: 100%;
            font-size: 10.5px;
            margin-top: -24px;
            color: gray;
            margin: 10px 0 10px 10px;
        }

        & > ${ AddAComentDiv } {
            width: 100%;
            margin-bottom: 5px;

            & > form {
                width: 100%;
                height: 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 0;

                & > input {
                    font-size: 14.5px;
                    border: 1px solid white;
                    width: 100%;
                    height: 100%;
                    padding: 0 5px;
                    margin: 0 5px;
                }

                & > button {
                    background: none;
                    border: none;

                    & > .fa-ellipsis-h {
                        cursor: pointer;
                        padding: 5px;
    
                        &:hover {
                            color: white;
                            background: black;
                            border-radius: 50%;
                        }
                    }
                }
            }
        }
    } // PostContainerDiv
`; // PostContainerSection

export { 
    PostContainerSection, 
    PostContainerDiv, 
    TitleDiv, 
    ImageUrlImg, 
    LikesDiv, 
    TimeStampDiv, 
    AddAComentDiv
};
