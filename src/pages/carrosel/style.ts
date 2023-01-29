import styled from 'styled-components';

export interface ICarroselProps {
  position: number;
}

export const CarroselComponent = styled.div<ICarroselProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background: var(--home-carrosel-background-color);

  background: linear-gradient(0deg, #00000000 0%, #00000000 85%, #000000 100%),
    linear-gradient(180deg, #00000000 0%, #00000000 85%, #000000 100%)
      var(--home-carrosel-background-color);

  overflow: hidden;

  .slide {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    width: 100vw;

    z-index: 1;

    padding: 0 40px 0 40px;

    bottom: -266px;
    .arrow {
      width: 30px;
      height: 30px;

      background: rgb(0, 0, 0, 0.5);

      border: none;

      font-size: 10px;

      color: #fff;

      border-radius: 20px;
    }
  }

  .carrosel {
    display: inline-grid;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;

    grid-template-columns: repeat(11);

    padding: 20px;

    min-width: 100%;

    overflow-x: auto;

    transform: translateX(${({ position }) => position}%);

    gap: 35px;

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
