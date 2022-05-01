import styled from 'styled-components';

import { Dot } from '../../styles/Icons';

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

export const ListButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }

    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 1.5px;
  }

  /* & + button:last-child {
    margin-top: 33px;

    width: 40px;
    height: 40px;

    > span {
      display: none;
    } */

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;
`;

export const ListIcon = styled(Dot)`
  flex-shrink: 0;

  width: 45px;
  height: 45px;
  color: var(--white);
`;