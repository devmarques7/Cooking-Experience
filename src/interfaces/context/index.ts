import { ReactNode } from 'react';
import { ISubmit } from '../home';
import { IApiData } from '../carrosel';
import { IProduct } from '../carrosel';

export interface IProvide {
  children?: ReactNode;
}

export interface IAppProvider {
  repositories: IProduct[];
  recipe: boolean;
  setRecipe: React.Dispatch<React.SetStateAction<boolean>>;
  handleData: ({ drinks }: IApiData) => void;
  fetchData: () => Promise<void>;
  fetchDataById: (id: string) => Promise<void>;
  fetchDataByName: (search: ISubmit) => Promise<void>;
}
