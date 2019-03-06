import styled from 'styled-components';

export const customLayout = (justify, align) => (
  `display: flex;
  justify-content: ${justify};
  align-items: ${align};
  `
);

const flexSpaceBetween = customLayout('space-between', 'center');

export const FixedNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid #eaeaea;
  background-color: #fff;
  z-index: 1;
`;

export const Container = styled.div`
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
  ${flexSpaceBetween}

  @media (max-width: 500px) {
    width: 95%;
  }

  input {
    width: 26%;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    padding: 5px;
    text-align: center;
    background-color: #fafafa;
    font-size: 1.4rem;

    @media (max-width: 500px) {
      width: 50%;
    }

    ::placeholder {
      font-family: 'FontAwesome', sans-serif;
      color: #b6b6b6;
    }

    :focus {
      outline: none;
    }

    :focus::placeholder {
      color: transparent;
    }
  }

  .Menu {
    width: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Header = styled.header`
  width: 20%;
  ${flexSpaceBetween}

  @media (max-width: 500px) {
    width: 30%;
  }
`;

export const Divider = styled.div`
  border-left: 1px solid #aaa;
  height: 30px;
  margin-left: 3%;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 70%;
  height: auto;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  width: 26%;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  padding: 5px;
  text-align: center;
  background-color: #fafafa;
  font-size: 1.4rem;

  ::placeholder {
    font-family: 'FontAwesome', sans-serif;
    color: #b6b6b6;
  }

  :focus {
    outline: none;
  }

  :focus::placeholder {
    color: transparent;
  }
`;

export const Menu = styled.div`
  width: 15%;
  ${flexSpaceBetween}

  @media (max-width: 500px) {
    display: none;
  }
`;
