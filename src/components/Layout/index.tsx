import React from 'react';
import Main from '../Main';
import Navbar from '../Navbar';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Main />
      </Wrapper>
    </Container>
  );
};

export default Layout;
