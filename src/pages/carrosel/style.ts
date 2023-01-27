import styled from 'styled-components';

export const CarroselComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  width: 98.9vw;
  height: 100vh;

  background: var(--home-carrosel-background-color);

  background: linear-gradient(0deg, #00000000 0%, #00000000 85%, #000000 100%),
    var(--home-carrosel-background-color);

  overflow: hidden;

  .carrosel {
    display: inline-grid;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;

    grid-template-columns: repeat(11);

    padding: 50px;

    width: 100vw;

    overflow-x: auto;

    ::-webkit-scrollbar {
      width: 0 !important;
    }
  }

  .carrosel > * {
    grid-row: 1 / -1;
  }

  @media only screen and (min-width: 600px) {
  }
`;
