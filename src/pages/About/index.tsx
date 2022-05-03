import React from 'react';
import photo from '../../utils/photo.png';

import { AboutCard, CardContent, Container, Photo, Title, Wrapper, Text, TitleCard } from './styles';

const About: React.FC = () => {
  return <Container>
    <Wrapper>
      <TitleCard>
        <Title fontSize='64px'>About</Title>
      </TitleCard>
      <AboutCard>
        <Photo src={photo}/>
        <CardContent>
          <Title fontSize='48px'>Lucas Dalan</Title>
          <Text fontSize='24px'>Software Developer</Text>
          <Text fontSize='24px'>React.js | UI/UX | Python | Flutter</Text>
        </CardContent>
      </AboutCard>
      <Text fontSize='24px'>Hi! my name is Lucas, I’m 20 years old and I work as a Developer.
My main goal is to have my own IT company, but in order to acomplish
that I must start from the beginning. when I work on  important, 
modern projects I get excited to develop it, making me even more 
eager to see it working perfectly.</Text>
    </Wrapper>
  </Container>;
}

export default About;