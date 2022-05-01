import React from 'react';
import logo from '../../utils/Logo.svg';

import { Container, ListButton, ListIcon, LogoIcon, Wrapper } from './styles';

const Sidebar: React.FC = () => {
  return <Container>
    <Wrapper>
      <LogoIcon src={logo}/>

      <ListButton>
        <ListIcon />
        <span>Home</span>
      </ListButton>

      <ListButton>
        <ListIcon />
        <span>About</span>
      </ListButton>

      <ListButton>
        <ListIcon />
        <span>Knowledge</span>
      </ListButton>

      <ListButton>
        <ListIcon />
        <span>Experience</span>
      </ListButton>

      <ListButton>
        <ListIcon />
        <span>Skills</span>
      </ListButton>

      <ListButton>
        <ListIcon />
        <span>Projects</span>
      </ListButton>

      <ListButton>
        <ListIcon />
        <span>Hobbies</span>
      </ListButton>
    
    </Wrapper>
  </Container>;
}

export default Sidebar;