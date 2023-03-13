import { css } from '@emotion/react';

export const footerContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #252a34;
  color: #fff;
  height: 80px;
  margin-top: 50px;
`;

export const socialIcon = css`
  font-size: 24px;
  margin: 0 10px;
  color: #fff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export const socialIconsContainer = css`
  display: flex;
`;
