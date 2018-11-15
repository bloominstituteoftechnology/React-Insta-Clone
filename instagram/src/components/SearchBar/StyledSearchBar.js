import styled from 'styled-components';

const SearchBarDiv = styled.div`
    position: relative;
    margin-right: 60px;
`;

const InputField = styled.div`
    width: 28rem;
    background-color: #FAFAFA;
    padding: 5px;
    border: 1px solid #E6E6E6;
    border-radius: 5px;
    margin: 0 auto;
    color: #A5A5A5;
    font-size: 1.8rem;
    display: flex;
    justify-content: ${props => (props.isSelected ? 'space-between' : 'center')};
    position: relative;
`;

const SearchInput = styled.input`
    width: 95%;
    background-color: #FAFAFA;
    border: none;
    text-align: ${props => (props.isSelected ? 'left' : 'center')}
    padding-left: ${props => (props.isSelected ? '10px' : null)}

    &:focus {
        outline: 0;
    }
`;

export { SearchBarDiv, InputField, SearchInput };