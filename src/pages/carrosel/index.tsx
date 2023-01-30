import React, { useContext, useEffect, useState } from 'react';

import RecipePage from '../recipePage';
import Card from '../../components/Card';

import { AppContext } from '../../context';
import { CarroselComponent } from './style';

const Carrosel = (): JSX.Element => {
  const { repositories, recipe, setRecipe, fetchData, fetchDataById } =
    useContext(AppContext);
  const [position, setPosition] = useState(0);

  const handleSlider = (click): void => {
    const slide = click.target.className;

    if (slide === 'arrow right' && position > -40) {
      setPosition(position - 1);
    } else if (slide === 'arrow left' && position < 45) {
      setPosition(position + 1);
    }
  };

  useEffect(() => {
    setPosition(0);
    fetchData();
  }, []);
  return (
    <CarroselComponent id="recipes" position={position}>
      {recipe ? (
        <RecipePage></RecipePage>
      ) : (
        <>
          <div className="slide">
            <button className="arrow left" onClick={handleSlider}>{`<`}</button>
            <button
              className="arrow right"
              onClick={handleSlider}
            >{`>`}</button>
          </div>
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
                  onClick={() => {
                    setRecipe(true);
                    fetchDataById(item.id);
                  }}
                />
              );
            })}
          </ul>
        </>
      )}
    </CarroselComponent>
  );
};

export default Carrosel;
