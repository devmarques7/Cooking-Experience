import React from 'react';

import { pageConfig } from '../../utils';

import { CardComponent } from './style';

interface ICardProps {
  id: string;
  name: string;
  category: string;
  setor: string;
  img: string;
  ingredients: string[];
  instructions: string;
  measurements: string[];
}

const Card = ({
  id,
  name,
  category,
  setor,
  img,
  ingredients,
  instructions,
  measurements,
}: ICardProps): JSX.Element => {
  return (
    <CardComponent id={id} img={img} className="card">
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