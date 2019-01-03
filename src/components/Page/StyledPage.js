import styled, { injectGlobal } from 'styled-components';
import theme from 'theme';

/* eslint-disable */
injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-size: 1.5rem;
    line-height: 2;
    margin: 0;
    padding: 0;
  }
  a {
    color: ${theme.black};
    text-decoration: none;
  }
`;
/* eslint-enable */

export const Inner = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  padding: 2rem;
`;

export default styled.div`
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`;
