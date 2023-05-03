import styled from 'styled-components';
import {handleColorType} from '../PokemonCard/styles'

export const Card = styled.div`
  border-radius: 16px;
  padding: 16px;
  background-color: var(--white);
  margin: 16px 0;

  .card-content {
    display: flex;

    @media (max-width: 425px) {
      flex-direction: column;
    }

    > div {
      flex: 1;
    }

    b {
      font-size: 26px;

      @media (max-width: 425px) {
        font-size: 24px;
      }
    }
  }

  .image {
    text-align: center;
  }

  img {
    width: 200px;
  }

  h2 {
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 8px;
    font-size: 32px;
  }

  h3 {
    text-transform: uppercase;
    font-size: 12px;
  }

  .xp b {
    font-size: 50px;
  }

  > div {
    margin: 15px 0;
  }

  .types-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .content-abilities {
    font-size: 14px;
    color: var(--darkgray);
    line-height: 1.5;
    display: flex;
    gap: 10px;
  }

  .content-stats {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: var(--darkgray);
    line-height: 1.5;
  }
`;

export const Type = styled.span`
  font-size: 14px;
  color: var(--white);
  padding: 5px 10px;
  border-radius: 20px;
  ${({ color }) => handleColorType(color)};
`;

export const SizeStat = styled.span`
    width: 100%;
    display: block;
    background: #ccc;
    height: 3px;
    overflow: hidden;

    span {
      width: ${(props) => props.size}%;
      display: block;
      background: var(--primary);
      height: 3px;
    }
`;