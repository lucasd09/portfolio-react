import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  min-width: 193px;
  max-width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 100%;
  background-color: var(--primary);
  overflow-x: hidden;
  padding-top: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const LogoIcon = styled.img`
  width: 55px;
  height: 68px;
  
`;
