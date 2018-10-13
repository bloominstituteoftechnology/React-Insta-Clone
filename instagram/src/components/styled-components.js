import styled from 'styled-components';

/********************************************************
 * SearchBar Styling
 ************************************************/

 export const SBHeader = styled.header`
    width: 100 %;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    height: 70px;

        .left {
            display: flex;
            align-items: center;
            margin-left: 15px;

            p {
                font-size: 30px;
                font-family: 'Damion', cursive;
                font-family: 'Devonshire', cursive;
            }

            .insta {
                border-left: 1px solid #2D2D2D;
                color: #2D2D2D;
                margin-left: 20px;
                padding-left: 20px;
            }

        }

        .middle {
            display: flex;
            align-items: center;
            position: relative;

            .input {
                background: #FAFAFA;
                border: 1px solid #E6E6E6;
                height: 25px;
                width: 210px;
                outline-color: inherit;
            }
        }

        .right {
            display: flex;
            align-items: center;
        }
 `;


 /********************************************************
 * PostContainer Styling
 ************************************************/

 export const PCDiv = styled.div`
    border-top: 1px solid #2d2d2d;
    border-bottom: 1px solid #2d2d2d;
    text-align: left;

    .post-heading {
        display: flex;
        align-items: center;
        margin: 15px auto 10px;
        color: #2D2D2D;
        font-size: 14px;
        font-weight: bold;

    }

    .thumbnail {
        border-radius: 50%;
        margin: 0 10px;
    }

    .likes {
        padding-left: 5px;
    }

 `;

  /********************************************************
 * CommentSection Styling
 ************************************************/

export const CSDiv = styled.div`

    width: 100%;
    max-width: 620px;
    margin: 0 auto;

        .timestamp {
            font-size: 13px;
            opacity: .5;
        }
        form {
            margin-bottom: 30px;
        }
`;

export const CommentInput = styled.input`
    width: 90%;
    height: 30px;
    margin-left: .5%;
    border: 1px solid #E6E6E6;
    outline-color: inherit;
    padding: 1px;
`;

export const CommentButton = styled.button`
    width: 6%;
    height: 30px;
    margin-right: .5%;
    margin-left: .5%;

    /* Example of using props */
    /* ${props => props.type===`success` ? `background: #2d2d2d;` : null} */
`;