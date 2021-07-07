import styled from "styled-components";

export const AppContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
`;

export const LoginHeader = styled.header`
    display: flex;
    align-items: center;

    h1 {
        margin-left: 15px;
    }
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input, button {
        margin: 5px;
    }
`;

export const SearchHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .home {
        display: flex;
        align-items: center;
    }

    h1 {
        margin-left: 15px;
    }

    .icons {
        width: 100px;
        display: flex;
        justify-content: space-between;
    }

    .icon {
        cursor: pointer;
        color: gray;
    }
`;

export const InstaPost = styled.section`
    width: 640px;
    margin: 20px;
    border: 1px solid lightgray;

    header {
        display: flex;
        align-items: center;
    }

    .thumb {
        width: 36px;
        height: 36px;
        margin: 15px;
        border-radius: 50%;
    }

    .icons {
        width: 70px;
        padding: 10px 10px 0;
        display: flex;
        justify-content: space-between;

        .icon {
            cursor: pointer;
        }
    }

    > p {
        padding-left: 10px;
    }
`;

export const Comments = styled.section`
    padding: 10px;
`;

export const NewCommentInput = styled.input`
    ${props => props.enable ? "display: block;" : "display: none;"}
`;