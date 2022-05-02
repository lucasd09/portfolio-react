import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const LogoIcon = styled.img`
  width: 300px;
  height: 441px;

  @media screen and (max-width: 600px){
    
  }
`;

export const Title = styled.h1<{
  fontSize?: string;
}>`
  font-size: ${props => props.fontSize || 'auto'};
  color: var(--light);
`;

export const SubTitle = styled.h2<{
  fontSize?: string;
}>`
  font-size: ${props => props.fontSize || 'auto'};
  color: var(--light);
`;