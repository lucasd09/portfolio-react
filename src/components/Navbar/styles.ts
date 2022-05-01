import styled, { css } from 'styled-components';

import {
  Menu
} from '../../styles/Icons';

export const Container = styled.div`
  max-width: 95%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
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

  width: 45px;
  height: 45px;
  color: var(--white);
`;

export const MenuIcon = styled(Menu)`
  ${iconCSS}
`;

export const LogoIcon = styled.img`
  width: 55px;
  height: 68px;
  
`;
