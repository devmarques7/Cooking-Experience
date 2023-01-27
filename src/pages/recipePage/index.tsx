import React, { useContext } from 'react';

import { RecipeComponent } from './style';
import { AppContext } from '../../context/carosselPage';
import { IIngredients } from '../../interfaces/carrosel';

import { RiArrowDownSLine } from 'react-icons/Ri';
import { TfiArrowCircleLeft } from 'react-icons/Tfi';

const RecipePage = (): JSX.Element => {
  const { repositories, setRecipe, fetchData } = useContext(AppContext);
  console.log(repositories);
  return (
    <RecipeComponent img={repositories[0].img}>
      <section className="description">
        <h1 className="title">{repositories[0].name}</h1>
        <h2 className="category">{repositories[0].category}</h2>
        <span className="datails">{`${
          repositories[0].ingredients.length
        } Ingredient | ${repositories[0].ingredients.length * 2} min`}</span>
      </section>
      <ul className="recipe-list">
        {repositories[0].ingredients.map((ingredient: IIngredients, index) => {
          return (
            <li key={index} className="recipe">
              <h3 className="ingredient">{ingredient.name}</h3>

              {repositories[0].measurements[index] && (
                <span className="measure">
                  {repositories[0].measurements[index].measure}
                </span>
              )}
            </li>
          );
        })}
        <li key={'recipe'} className="instructions">
          <div className="section-hover">
            <span className="title-hover">Instructions</span>
            <RiArrowDownSLine className="arrow-hover" />
          </div>

          <span className="description"> {repositories[0].instructions}</span>
        </li>
      </ul>

      <TfiArrowCircleLeft
        className="arrow"
        onClick={() => {
          fetchData();
          setRecipe(false);
        }}
      />
    </RecipeComponent>
  );
};

export default RecipePage;
