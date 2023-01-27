import styled from 'styled-components';

export const HomeComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  background-color: black;

  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  position: absolute;

  width: 100%;
  height: 100%;

  padding: 0 20px 20px 20px;
  .title {
    font-weight: lighter;
    font-size: 18vw;
    line-height: 100%;

    width: 80%;

    color: var(--home-video-text);

    margin-top: 40px;
  }

  .search {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 45px;

    .input {
      width: 100%;
      height: 100%;

      background-color: transparent;

      border: 1px solid var(--home-video-border-input);
      border-radius: 30px;

      padding-left: 30px;

      color: var(--home-video-input-color);
    }

    .search-icon {
      color: var(--home-video-icon);

      width: 30px;

      margin-left: 20px;
    }
  }

  label {
    display: none;
  }

  @media only screen and (min-width: 600px) {
    flex-direction: row;

    .title {
      font-size: 10vw;
    }

    .search {
      width: 290px;

      margin-top: 40px;
    }
  }
`;
