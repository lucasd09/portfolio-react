import React, { useState } from 'react';
import logo from '../../utils/Logo.svg';

import { Container, LogoIcon, Wrapper } from './styles';

const Sidebar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);
  
  const showSidebar = () => setSidebar(!sidebar);
  
  return <Container>
    <Wrapper>
      <LogoIcon src={logo}/>
    </Wrapper>
  </Container>;
}

export default Sidebar;