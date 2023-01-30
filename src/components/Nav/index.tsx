import React from 'react';

import { pageConfig } from '../../utils';
import Link from '../Link';
import { NavComponent } from './style';

const Nav = (): JSX.Element => {
  return (
    <NavComponent id="navBar">
      <a className="appTitle" href="#contact">
        {pageConfig.nav.title}
      </a>
      <div className="navLink">
        <Link
          content={pageConfig.nav.link1.content}
          to={pageConfig.nav.link1.to}
        ></Link>
        <Link
          content={pageConfig.nav.link2.content}
          to={pageConfig.nav.link2.to}
        ></Link>
        <Link
          content={pageConfig.nav.link3.content}
          to={pageConfig.nav.link3.to}
        ></Link>
      </div>
    </NavComponent>
  );
};

export default Nav;
