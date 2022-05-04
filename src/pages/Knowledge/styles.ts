import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  border: 1px solid green;

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
  border: 1px solid red;
`;

export const ListItem = styled.li`
  
`;