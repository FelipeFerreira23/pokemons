import styled from 'styled-components';

export const handleColorType = color => {
  switch (color) {
    case "grass":
      return "background: green;";
    case "poison":
      return "background: #f56342;";
    case "fire":
      return "background: red;";
    case "water":
      return "background: blue;";
    case "flying":
      return "background: purple;";
    case "electric":
      return "background: yellow; color: #333;";
    case "ground":
      return "background: brown;";
    case "bug":
      return "background: #e9b477;";
    case "fairy":
      return "background: pink;";
    case "fighting":
      return "background: lightblue;";

    default:
      return "background: #aaa;";
  }
};

export const Card = styled.div`
  flex: calc(20% - 10px);
  border-radius: 16px;
  padding: 16px;
  background-color: var(--white);

  @media (max-width: 425px) {
    flex: 100%;
  }

  .image {
    text-align: center;
  }

  h2 {
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 8px;
  }

  h3 {
    text-transform: uppercase;
    font-size: 12px;
  }

  > div {
    margin: 15px 0;
  }

  .types-list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
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