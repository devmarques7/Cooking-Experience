import styled from 'styled-components';

export const FooterComponent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 50vh;

  background: linear-gradient(0deg, #00000000 0%, #00000000 85%, #000000 100%),
    var(--footer-background);

  .welcome {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;

    .acknowledgment {
      font-weight: bold;
      font-size: 50px;
      line-height: 61px;
      text-align: center;

      color: var(--footer-acknowledgment);
    }

    .reference {
      font-weight: lighter;
      font-size: 20px;
      line-height: 61px;
      text-align: center;

      color: var(--footer-reference);

      .logo {
        width: 30px;
      }

      .text {
        color: #f7b141;
        margin-left: 2px;
      }
    }
  }

  .contact {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    width: 80%;

    max-width: 800px;

    gap: 15px;

    .user {
      display: flex;
      align-items: center;

      gap: 10px;

      .userPerfil {
        width: 55px;

        border-radius: 100%;
      }

      .userName {
        font-weight: lighter;
        font-size: 15px;
        line-height: 61px;
        text-align: center;

        color: var(--footer-userName);
      }
    }

    .link {
      display: flex;
      align-items: center;
      gap: 20px;

      button {
        width: 50px;
      }
      .tag {
        border: none;
      }

      .instagram {
        background-color: var(--footer-instagram);
      }

      .github {
        background-color: var(--footer-github);
      }
      .linkedin {
        background-color: var(--footer-linkedin);
      }

      .web {
        background-color: var(--footer-webPortifolio);
      }
    }
  }

  @media only screen and (min-width: 600px) {
    .contact {
      flex-direction: row;

      gap: 0px;
    }
  }
`;
