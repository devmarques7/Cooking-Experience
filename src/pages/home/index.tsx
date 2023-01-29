import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { pageConfig } from '../../utils';

import VideoPage from '../video';
import { Container, HomeComponent } from './style';

import { RiSearch2Fill } from 'react-icons/Ri';
import { AppContext } from '../../context/carosselPage';

export interface ISubmit {
  search: string;
}

const Home = (): JSX.Element => {
  const { register, handleSubmit } = useForm();
  const [search, setSearch] = useState('');
  const { fetchDataByName, setRecipe } = useContext(AppContext);

  const onSubmit = (data: ISubmit): void => {
    fetchDataByName(data);
    setRecipe(true);
  };

  return (
    <HomeComponent id="home">
      <VideoPage />
      <Container>
        <h2 className="title over">{pageConfig.home.inicialText}</h2>
        <form className="search over" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor={pageConfig.home.label.htmlfor}>
            {pageConfig.home.label.description}
          </label>
          <input
            placeholder={pageConfig.home.input.placeholder}
            type={pageConfig.home.input.type}
            {...register('search')}
            className="input over"
          ></input>
          <RiSearch2Fill className="search-icon" />
        </form>
      </Container>
    </HomeComponent>
  );
};

export default Home;
