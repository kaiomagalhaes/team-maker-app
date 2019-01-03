import Link from 'next/link';
import NProgress from 'nprogress';
import Router from 'next/router';

import { APP_NAME } from 'config';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => (
  <div>
    <Link href="/">
      <a>{APP_NAME}</a>
    </Link>
  </div>
);

export default Header;
