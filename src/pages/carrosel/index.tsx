import React, { useContext, useEffect, useState } from 'react';

import Card from '../../components/Card';
import { CarroselComponent } from './style';

import RecipePage from '../recipePage';
import { AppContext } from '../../context/carosselPage';

const Carrosel = (): JSX.Element => {
  const { repositories, recipe, setRecipe, fetchData, fetchDataById } =
    useContext(AppContext);
  const [position, setPosition] = useState(0);

  const handleSlider = (click): void => {
    const slide = click.target.className;
    console.log(position);
    if (slide === 'arrow right' && position > -40) {
      setPosition(position - 9);
    } else if (slide === 'arrow left' && position < 45) {
      setPosition(position + 9);
    }
  };

  useEffect(() => {
    setPosition(0);
    fetchData();
  }, []);
  return (
    <CarroselComponent id="receipts" position={position}>
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
                  onClick={(event) => {
                    setRecipe(true);
                    fetchDataById(event.target.id);
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
