import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;

  display: flex;
  flex-direction: column;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Option = styled(Link)`
  padding: 20px;
  border-radius: 4px;
  color: #000000;
  background: #fff;
  text-align: center;

  &:hover {
    color: #000000;
    background: #e6e6e6;
  }

  strong {
    display: block;
    font-size: 20px;
    font-weight: normal;
  }

  img {
    height: 60px;
    margin-top: 15px;
  }

  span {
    display: block;
    margin-top: 3px;
    color: #999;
    margin-top: 30px;
  }
`;
