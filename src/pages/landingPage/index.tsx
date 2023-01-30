import React from 'react';
import Nav from '../../components/NavBar';

import { pageConfig } from '../../utils';

import { Container, StartButton } from './style';
import { LandingComponent } from './style';

const LandingPage = (): JSX.Element => {
  console.log(pageConfig.bgUrl);
  return (
    <LandingComponent bgUrl={pageConfig.bgUrl}>
      <Nav />
      <Container>
        <span className="title">{pageConfig.intro.title}</span>
        <span className="subText">{pageConfig.intro.subText}</span>
      </Container>
      <StartButton as="a" id="strapButton" href="#home">
        {pageConfig.intro.buttonText}
      </StartButton>
    </LandingComponent>
  );
};

export default LandingPage;
