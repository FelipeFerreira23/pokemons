import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  gap: 20px;

  @media (max-width: 425px) {
    flex-direction: column;
  }

  form {
    display: flex;
    flex: 1;
  }

  input {
    flex: 1;
    border: none;
    padding: 0 16px;
    height: 42px;
    font-size: 16px;
    border-radius: 50px 0 0 50px;
    background: #ffffff;
  }

  button {
    background: rgb(245, 99, 66);
    color: white;
    border: none;
    width: 250px;
    padding: 0 10px;
    border-radius: 0 50px 50px 0;
    transition: background-color 1s ease;

    &:hover {
      background-color: rgb(247 125 97);
    }

    @media (max-width: 425px) {
      width: auto;
      font-size: 12px;
    }
  }
`;