import styled from 'styled-components';

export interface IRecipeProps {
  img: string;
}

export const RecipeComponent = styled.div<IRecipeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background-image: url(${({ img }) => img});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  gap: 20px;

  .description {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    opacity: 100%;

    .title {
      font-weight: 600;
      /* font-size: 70px; */
      font-size: 35px;
      line-height: 100%;
      text-align: center;

      color: var(--home-recipe-description-title);
    }

    .category {
      font-weight: lighter;
      /* font-size: 50px; */
      font-size: 25px;
      line-height: 61px;
      text-align: center;

      color: var(--home-recipe-description-category);
    }

    .datails {
      font-weight: 300;
      font-size: 12px;

      color: var(--home-recipe-description-details);
    }
  }

  .recipe-list {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    width: 314px;
    height: 330px;

    gap: 15px;

    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 0 !important;
    }

    .recipe {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 314px;
      min-height: 72px;

      padding: 10px 30px 10px 30px;

      background: rgba(9, 9, 9, 0.5);
      border-radius: 30px;

      .ingredient {
        font-weight: lighter;
        font-size: 20px;
        line-height: 100%;

        color: var(--home-recipe-description-details);
      }

      .measure {
        font-weight: 300;
        font-size: 12px;

        color: var(--home-recipe-description-details);
      }
    }

    .instructions {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      width: 314px;
      min-height: 72px;

      padding: 10px 30px 10px 30px;

      background-color: rgba(9, 9, 9, 0.5);
      border-radius: 30px;

      .section-hover {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        margin-bottom: 20px;

        .title-hover {
          color: var(--home-recipe-description-details);
        }

        .arrow-hover {
          color: #fff;
        }
      }

      .description {
        display: none;
        justify-content: center;
        align-items: center;
        color: var(--home-recipe-description-details);
      }
    }

    .instructions:hover {
      transition: 2s all;

      min-height: 50%;

      .description {
        display: flex;
      }
    }
  }

  .arrow {
    display: flex;

    width: 40px;
    height: 40px;

    position: relative;

    top: 30px;
    color: rgba(9, 9, 9, 0.5);

    border-radius: 100%;

    :hover {
      background: rgba(9, 9, 9, 0.5);
      color: #fff;

      transition: 1s all;
    }
  }

  @media only screen and (min-width: 600px) {
    .description {
      .title {
        font-size: 70px;
      }

      .category {
        font-size: 50px;
      }
    }
  }
`;
