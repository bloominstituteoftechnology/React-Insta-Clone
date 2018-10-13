import styled from 'styled-components';

/********************************************************
 * Search Bar Styling
 ************************************************/

 export const Header = styled.header`
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