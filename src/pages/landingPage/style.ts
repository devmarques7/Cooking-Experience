import styled from 'styled-components';

import { IPageConfig } from '../../interfaces/config/indext';

export const LandingComponent = styled.div<IPageConfig>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  height: 100vh;

  background-image: linear-gradient(
      180deg,
      #00000000 0%,
      #00000000 85%,
      #ffffff 100%
    ),
    url(${({ bgUrl }) => bgUrl});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  padding-bottom: 60px;

  .title {
    font-weight: bold;
    font-size: 7vw;
    text-align: center;
    line-height: 100%;

    width: 75%;

    color: var(--land-title);

    margin-bottom: 10px;
  }

  .subText {
    font-weight: lighter;
    font-size: 2.5vw;
    text-align: center;
    line-height: 100%;

    width: 40%;

    color: var(--land-subText);

    margin-bottom: 10px;
  }

  @media only screen and (min-width: 600px) {
    justify-content: center;

    #navBar {
      display: flex;
    }

    .title {
      font-size: 6vw;

      width: 65%;
    }

    .subText {
      font-size: 1.5vw;

      width: 40%;
    }

    #strapButton {
      display: none;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;

export const StartButton = styled.button`
  margin: 0 auto;

  width: 45%;
  height: 45px;

  max-width: 300px;

  background-color: var(--land-button);
  color: var(--land-button-text);

  border: none;
  border-radius: 30px;
`;
