import styled from 'styled-components';

export interface ICardProps {
  img: string;
}

export const CardComponent = styled.li<ICardProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 240px;
  height: 470px;

  max-width: 600px;

  background-image: url(${({ img }) => img});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  border-radius: 42px;

  margin-right: 60px;

  opacity: 50%;

  cursor: pointer;

  .drink-description {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    width: 80%;
    height: 80px;

    .title {
      font-weight: light;
      font-size: 35px;
      line-height: 100%;
      text-align: center;

      color: var(--home-card-description);
    }

    .category {
      font-weight: lighter;
      font-size: 15px;
      line-height: 61px;
      text-align: center;

      color: var(--home-card-description);
    }
  }

  .details {
    display: flex;
    position: relative;
    align-items: flex-start;

    width: 100%;

    font-weight: 300;
    font-size: 12px;

    top: 30%;

    padding-left: 30px;

    color: var(--home-card-description);
  }

  :hover {
    opacity: 100%;

    transition: 0.4s all;

    transform: scale(1.1);

    .carrosel {
      background-color: antiquewhite;
    }
  }

  @media only screen and (min-width: 600px) {
    width: 640px;
    height: 455px;

    .title {
      font-size: 45px;
    }

    .category {
      font-size: 20px;
    }
  }
`;
