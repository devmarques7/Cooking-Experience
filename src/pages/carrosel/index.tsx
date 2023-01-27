import React, { useContext, useEffect } from 'react';

import Card from '../../components/Card';
import { CarroselComponent } from './style';

import RecipePage from '../recipePage';
import { AppContext } from '../../context/carosselPage';

const Carrosel = (): JSX.Element => {
  const { repositories, recipe, setRecipe, fetchData, fetchDataById } =
    useContext(AppContext);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <CarroselComponent>
      {recipe ? (
        <RecipePage></RecipePage>
      ) : (
        <ul className="carrosel">
          {repositories?.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                category={item.category}
                setor={item.setor}
                img={item.img}
                ingredients={item.ingredients}
                instructions={item.instructions}
                measurements={item.measurements}
                onClick={(event) => {
                  setRecipe(true);
                  fetchDataById(event.target.id);
                }}
              />
            );
          })}
        </ul>
      )}
    </CarroselComponent>
  );
};

export default Carrosel;
