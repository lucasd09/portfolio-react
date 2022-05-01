import React from 'react';
import logo from '../../utils/Logo.svg';
import logodark from '../../utils/Logo-Dark.svg';

import { Container, LogoIcon, MenuButton, MenuIcon } from './styles';
import Sidebar from '../Sidebar';

const Navbar: React.FC = () => {
  return <Container>
    <LogoIcon src={logo}/>
    <MenuButton>
      <MenuIcon />
    </MenuButton>
    <Sidebar />
  </Container>;
}

export default Navbar;