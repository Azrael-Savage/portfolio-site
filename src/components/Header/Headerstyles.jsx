import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 2rem;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  height: 50px;
`;

export const NavigationContainer = styled.div`
  display: flex;
  gap: 2rem;
`;
