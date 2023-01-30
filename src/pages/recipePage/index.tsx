import React, { useContext } from 'react';

import { RecipeComponent } from './style';
import { AppContext } from '../../context';
import { IIngredients } from '../../interfaces/carrosel';

import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { IoMdArrowDropleftCircle } from 'react-icons/io';

const RecipePage = (): JSX.Element => {
  const { repositories, setRecipe, fetchData } = useContext(AppContext);

  //Selecting the first recipe brought from the request made by the user
  const item = repositories[0];

  return (
    <RecipeComponent img={item.img}>
      <section className="description">
        <h1 className="title">{item.name}</h1>
        <h2 className="category">{item.category}</h2>
        <span className="datails">{`${item.ingredients.length} Ingredient | ${
          item.ingredients.length * 2
        } min`}</span>
      </section>
      <ul className="recipe-list">
        {item.ingredients.map((ingredient: IIngredients, index) => {
          return (
            <li key={index} className="recipe">
              <h3 className="ingredient">{ingredient.name}</h3>
              {item.measurements[index] && (
                <span className="measure">
                  {item.measurements[index].measure}
                </span>
              )}
            </li>
          );
        })}
        <li key={'recipe'} className="instructions">
          <div className="section-hover">
            <span className="title-hover">Instructions</span>
            <IoIosArrowDropdownCircle className="arrow-hover" />
          </div>
          <span className="description"> {item.instructions}</span>
        </li>
      </ul>
      <IoMdArrowDropleftCircle
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
