import React, { useState } from 'react';
import logo from '../../utils/Logo.svg';
import logodark from '../../utils/Logo-Dark.svg';

import { Container, LogoIcon, MenuButton, MenuIconDark, MenuIconLight } from './styles';
import Sidebar from '../Sidebar';

const Navbar: React.FC = () => {

  const [themeChange, setThemechange] = useState(false);
  const changeTheme = () =>{
    if(window.scrollY >= 900){
      setThemechange(true);
    }
    else{
      setThemechange(false);
    }
  };
  window.addEventListener('scroll', changeTheme);
  return <Container>
    <LogoIcon src={themeChange ? logodark : logo}/>
    <MenuButton>
      {themeChange ? <MenuIconDark />  : <MenuIconLight />}
    </MenuButton>
    <Sidebar />
  </Container>;
}

export default Navbar;