import React from 'react';

import logo from '../../utils/Logo.svg';

import { Container, LogoIcon, SubTitle, Title } from './styles';

const Home: React.FC = () => {
  return <Container >
    <LogoIcon src={logo}/>
    <Title fontSize='40px'>LUCAS DALAN</Title>
    <SubTitle fontSize='20px'>Software Developer</SubTitle>

  </ Container>;
}

export default Home;