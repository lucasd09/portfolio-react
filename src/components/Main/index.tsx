import React from 'react';
import About from '../../pages/About';
import Experience from '../../pages/Experience';
import Home from '../../pages/Home';
import Knowledge from '../../pages/Knowledge';
import Projects from '../../pages/Projects';
import Skills from '../../pages/Skills';

import { Container } from './styles';

const Main: React.FC = () => {
  return <Container>
      <Home />
      <About />
      <Knowledge />
      <Experience />
      <Skills />
      <Projects />
  </Container>;
}

export default Main;