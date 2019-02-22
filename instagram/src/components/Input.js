import React from 'react';
import styled from 'styled-components';

const InputBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
`;

const Inputs = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

const Input = (props) => {
    return (
        <form onSubmit={props.add}>
            <InputBox>
                <Inputs>
                    <input
                        type="text"
                        placeholder="Add a comment ..."
                        name="user"
                        onChange={props.change}
                        value={props.value}
                    />
                    <i className="fas fa-ellipsis-h" />
                </Inputs>
            </InputBox>
        </form>
    );
};

export default Input;
