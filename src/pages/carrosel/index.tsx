import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { CardComponent } from '../../components/Card/style';
import { IApiData, IDrinks, IProduct } from '../../interfaces/carrosel';

import { CarroselComponent } from './style';

const Carrosel = (): JSX.Element => {
  const [repositories, setRepositories] = useState<IProduct[]>([]);

  const drinkList: IProduct[] = [];

  const handleData = ({ drinks }: IApiData) => {
    const ingredients: string[] = [];
    const measure: string[] = [];
    const newData = {
      ingredients: ingredients,
      measurements: measure,
    } as IProduct;

    drinks.forEach((drink: IDrinks) => {
      // Formatting data received from the api
      newData.id = drink.idDrink;
      newData.name = drink.strDrink;
      newData.img = drink.strDrinkThumb;
      newData.category = drink.strCategory;
      newData.setor = drink.strAlcoholic;
      newData.instructions = drink.strInstructions;

      for (let i = 0; i <= 15; i++) {
        if (drink[`strIngredient${i}`]) {
          ingredients.push(drink[`strIngredient${i}`]);
        }

        if (drink[`strMeasure${i}`]) {
          measure.push(drink[`strMeasure${i}`]);
        }
      }
    });
    drinkList.push(newData);
    setRepositories([...drinkList]);
    return newData;
  };

  const fetchData = async () => {
    for (let i = 0; i <= 10; i++) {
      await axios({
        method: 'get',
        url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
      })
        .then((res) => {
          handleData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CarroselComponent>
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
            />
          );
        })}
      </ul>
    </CarroselComponent>
  );
};

export default Carrosel;
