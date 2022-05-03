import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;

`;

export const Title = styled.h1<{
  fontSize?: string;
}>`
  font-size: ${props => props.fontSize || 'auto'};
  color: var(--primary);
`;

export const TitleCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
`;

export const AboutCard = styled.div`
  display: flex;
  color: var(--primary);
  margin-bottom: 67px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 25px;
`;

export const Text = styled.p<{
  fontSize?: string;
}>`
  font-size: ${props => props.fontSize || 'auto'};
  color: var(--primary);
`;

export const Photo = styled.img`
  width: 252px;
  height: 253px;
`;