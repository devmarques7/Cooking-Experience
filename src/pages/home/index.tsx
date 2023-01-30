import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { pageConfig } from '../../utils';

import { AppContext } from '../../context';
import { FiSearch } from 'react-icons/fi';
import { ISubmit } from '../../interfaces/home';

import { Container, HomeComponent, VideComponent } from './style';

const Home = (): JSX.Element => {
  const { fetchDataByName, setRecipe } = useContext(AppContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: ISubmit): void => {
    fetchDataByName(data);
    setRecipe(true);
  };

  return (
    <HomeComponent id="home">
      <VideComponent loop autoPlay>
        <source src={pageConfig.bgVideoUrl} type="video/mp4" />
      </VideComponent>
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
          <a href="#recipes" className="search-icon" type="submit">
            <FiSearch className="icon" />
          </a>
        </form>
      </Container>
    </HomeComponent>
  );
};

export default Home;
