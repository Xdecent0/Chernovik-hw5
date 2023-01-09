import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: white;
  &.active {
    color: #c99e10;
  }
`;
