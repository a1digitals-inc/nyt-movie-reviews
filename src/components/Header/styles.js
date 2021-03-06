import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Options = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      font-weight: bold;

      &:hover {
        color: ${darken(0.5, '#999')};
      }
    }
  }
`;

export const Option = styled(Link)`
  color: ${props => (props.current ? darken(0.5, '#999') : '#999')};
`;
