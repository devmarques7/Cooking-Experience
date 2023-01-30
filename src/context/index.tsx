import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {
  IApiData,
  IDrinks,
  IIngredients,
  IMeasurements,
  IProduct,
} from '../interfaces/carrosel';

import { pageConfig } from '../utils';
import { ISubmit } from '../interfaces/home';
import { IAppProvider, IProvide } from '../interfaces/context';
import { requestData } from '../service';

export const AppContext = createContext<IAppProvider>({} as IAppProvider);

const AppProvider = ({ children }: IProvide) => {
  const [recipe, setRecipe] = useState<boolean>(false);
  const [repositories, setRepositories] = useState<IProduct[]>([]);
  //base URL for the repository
  const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/';

  //Saving product list from Api
  const drinkList: IProduct[] = [];

  // Formatting data received from the api
  const handleData = ({ drinks }: IApiData) => {
    const ingredients: IIngredients[] = [];
    const measure: IMeasurements[] = [];
    const newData = {
      ingredients: ingredients,
      measurements: measure,
    } as IProduct;

    drinks.forEach((drink: IDrinks): void => {
      // Formatting data
      newData.id = drink.idDrink;
      newData.name = drink.strDrink;
      newData.img = drink.strDrinkThumb;
      newData.category = drink.strCategory;
      newData.setor = drink.strAlcoholic;
      newData.instructions = drink.strInstructions;

      for (let i = 0; i <= 15; i++) {
        if (drink[`strIngredient${i}`]) {
          ingredients.push({ id: i, name: drink[`strIngredient${i}`] });
        }

        if (drink[`strMeasure${i}`]) {
          measure.push({ id: i, measure: drink[`strMeasure${i}`] });
        }
      }
    });

    drinkList.push(newData);
    setRepositories([...drinkList]);
  };

  const fetchData = async () => {
    // Request object many times from the server to create a drink list
    for (let i = 0; i <= pageConfig.carrosel.amountOfDrinks; i++) {
      handleData(await requestData(`${baseURL}random.php`));
    }
  };

  const fetchDataById = async (id: string) => {
    handleData(await requestData(`${baseURL}lookup.php?i=${id}`));
  };

  const fetchDataByName = async ({ search }: ISubmit) => {
    if (search) {
      handleData(
        await requestData(`${baseURL}search.php?s=${search.toLowerCase()}`)
      );
    }
  };

  return (
    <AppContext.Provider
      value={{
        repositories,
        recipe,
        handleData,
        setRecipe,
        fetchData,
        fetchDataById,
        fetchDataByName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
