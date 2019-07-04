import styled from 'styled-components';

const DeleteBtn = styled.span``;

const CommentSectionDiv = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    font-size: 17.5px;
    margin: -10px 10px 0 10px;

    & > h4 {
        margin-right: 0;
    }

    & > p {
        margin-left: 4px;
        font-size: 13px;

        & > ${ DeleteBtn } {
            background: lightcoral;
            border: 1px solid black;
            padding: 5px 7px;
            border-radius: 5px;
            margin-left: 5px;
    
            &:hover {
                background: black;
                border: 1px solid lightcoral;
                color: lightcoral;
                cursor: pointer;
            }
        }
    }
`;

export { CommentSectionDiv, DeleteBtn };
