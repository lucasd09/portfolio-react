import styled, { css } from 'styled-components';

import {
  Menu
} from '../../styles/Icons';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10px 50px 0 50px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  position: fixed;
`;

export const MenuButton = styled.button`
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
    margin-top: 16.5px;
  }

  & + button:last-child {
    margin-top: 33px;

    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

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

const iconCSS = css`
  flex-shrink: 0;

  width: 50px;
  height: 50px;
  color: var(--white);
`;

export const MenuIconLight = styled(Menu)`
  ${iconCSS}
`;

export const MenuIconDark = styled(Menu)`
  flex-shrink: 0;

width: 50px;
height: 50px;
color: var(--primary);
`;


export const LogoIcon = styled.img`
  width: 55px;
  height: 68px;
  
`;
