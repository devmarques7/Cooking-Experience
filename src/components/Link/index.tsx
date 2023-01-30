import React from 'react';

import { NavLinkComponent } from './style';
import { ILinkProps } from '../../interfaces/Nav';

const Link = ({ content, to }: ILinkProps) => {
  return <NavLinkComponent href={to}>{content}</NavLinkComponent>;
};

export default Link;
