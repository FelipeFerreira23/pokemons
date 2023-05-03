import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 10px 0;

    button {
      background-color: yellow;
      width: 250px;
      height: 46px;
      border: none;
      border-radius: 50px;
      transition: background-color 1s ease;
  
      &:hover {
        background-color: rgb(233, 180, 119);
      }
    }
  }
  
`;