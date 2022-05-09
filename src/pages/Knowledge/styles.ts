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

export const ListContainer = styled.div`
  max-width: 1280px;
  width: 100%;
`;

export const ListItem = styled.li`
  
`;