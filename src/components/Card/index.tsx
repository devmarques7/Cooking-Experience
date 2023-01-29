import React from 'react';

import { CardComponent } from './style';

import { IProps } from '../../interfaces/carrosel';

const Card = ({
  id,
  name,
  category,
  img,
  ingredients,
  onClick,
}: IProps): JSX.Element => {
  return (
    <CardComponent id={id} img={img} className="card" onClick={onClick}>
      <div className="drink-description">
        <h1 className="title">{name}</h1>
        <span className="category">{category}</span>
      </div>
      <span className="details">{`${ingredients.length} Ingredient | ${
        ingredients.length * 2
      } min`}</span>
    </CardComponent>
  );
};

export default Card;
