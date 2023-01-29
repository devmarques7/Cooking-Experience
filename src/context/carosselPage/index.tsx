import axios from 'axios';
import React, { useState } from 'react';
import { createContext, ReactNode } from 'react';
import {
  IApiData,
  IDrinks,
  IIngredients,
  IMeasurements,
  IProduct,
} from '../../interfaces/carrosel';
import { ISubmit } from '../../pages/home';
import { pageConfig } from '../../utils';

export interface IAppProvider {
  repositories: IProduct[];
  recipe: boolean;
  setRecipe: React.Dispatch<React.SetStateAction<boolean>>;
  handleData: ({ drinks }: IApiData) => void;
  fetchData: () => Promise<void>;
  fetchDataById: (id: string) => Promise<void>;
  fetchDataByName: (search: ISubmit) => Promise<void>;
}

export interface IProvider {
  children: ReactNode;
}

export const AppContext = createContext<IAppProvider>({} as IAppProvider);

const AppProvider = ({ children }: IProvider) => {
  const [repositories, setRepositories] = useState<IProduct[]>([]);
  const [recipe, setRecipe] = useState<boolean>(false);

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

  const fetchDataById = async (id: string) => {
    await axios({
      method: 'get',
      url: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    })
      .then((res) => {
        handleData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchDataByName = async ({ search }: ISubmit) => {
    await axios({
      method: 'get',
      url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search.toLowerCase()}`,
    })
      .then((res) => {
        handleData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
