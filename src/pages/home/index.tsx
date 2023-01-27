import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { pageConfig } from '../../utils';

import VideoPage from '../video';
import { Container, HomeComponent } from './style';

import { RiSearch2Fill } from 'react-icons/Ri';

const Home = (): JSX.Element => {
  const { register, handleSubmit } = useForm();
  const [search, setSearch] = useState('');

  const onSubmit = (data: any): void => {
    console.log(data);
  };

  const handleChange = (event: any): void => {
    setSearch(event.target.value);
  };

  return (
    <HomeComponent>
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
            onChange={handleChange}
          ></input>
          <RiSearch2Fill className="search-icon" />
        </form>
      </Container>
    </HomeComponent>
  );
};

export default Home;
