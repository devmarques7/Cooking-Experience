import React from 'react';

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { pageConfig } from '../../utils';

import { FooterComponent } from './style';

import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineContactPage } from 'react-icons/Md';

const Footer = (): JSX.Element => {
  return (
    <FooterComponent id="contact">
      <section className="welcome">
        <h1 className="acknowledgment"> Thanks</h1>
        <div className="reference">
          Web | <img src="./src/favicon/logo.svg" className="logo" />
          <span className="text">ails</span>
        </div>
      </section>
      <div className="contact">
        <div className="user">
          <img
            className="userPerfil"
            src={`https://github.com/${pageConfig.user.gitHubUser}.png`}
            alt={pageConfig.user.nameUser}
            title={pageConfig.user.nameUser}
          />
          <span className="userName">{pageConfig.user.nameUser}</span>
        </div>
        <div className="link">
          <Button
            className="instagram tag"
            as="a"
            target="_blank"
            href={`https://instagram.com/${pageConfig.user.instagramUser}`}
          >
            <FaInstagram />
          </Button>
          <Button
            className="github tag"
            as="a"
            target="_blank"
            href={`https://github.com/${pageConfig.user.gitHubUser}`}
          >
            <FaGithub />
          </Button>
          <Button
            className="linkedin tag"
            as="a"
            target="_blank"
            href={`https://linkedin.com/in/${pageConfig.user.linkedinUser}`}
          >
            <FaLinkedinIn />
          </Button>
          <Button
            className="web tag"
            as="a"
            target="_blank"
            href={pageConfig.user.webProfileUser}
          >
            <MdOutlineContactPage />
          </Button>
        </div>
      </div>
    </FooterComponent>
  );
};

export default Footer;
