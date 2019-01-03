import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Header from 'components/Header';
import Meta from 'components/Meta';
import theme from 'theme';

import StyledPage, { Inner } from './StyledPage';

const propTypes = {
  children: PropTypes.element,
};

const defaultProps = {
  children: undefined,
};

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Meta />
      <Header />
      <Inner>{children}</Inner>
    </StyledPage>
  </ThemeProvider>
);

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
