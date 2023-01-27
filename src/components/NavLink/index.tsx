import React from 'react';

import { useNavigate } from 'react-router-dom';

import { NavLinkComponent } from './style';
import { ILinkProps } from '../../interfaces/Nav';

const Link = ({ content, to }: ILinkProps) => {
  const navigate = useNavigate();
  return (
    <NavLinkComponent onClick={() => navigate(to)}>{content}</NavLinkComponent>
  );
};

export default Link;
