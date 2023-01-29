import React from 'react';
import Nav from '../../components/NavBar';

import { pageConfig } from '../../utils';

import { Container, StartButton } from './style';
import { LandingComponent } from './style';

const LandingPage = (): JSX.Element => {
  return (
    <LandingComponent bgUrl={pageConfig.bgUrl}>
      <Nav></Nav>
      <Container>
        <span className="title">{pageConfig.intro.title}</span>
        <span className="subText">{pageConfig.intro.subText}</span>
      </Container>
      <StartButton id="strapButton">{pageConfig.intro.buttonText}</StartButton>
    </LandingComponent>
  );
};

export default LandingPage;
