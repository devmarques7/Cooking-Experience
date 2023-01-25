import styled from 'styled-components';

export const NavLinkComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 30px;

  color: var(--land-nav-link);

  :hover {
    border-bottom: 1px solid var(--land-nav-link);

    -webkit-transition-duration: 2s, 2s;
    -moz-transition-duration: 2s, 2s;
    -o-transition-duration: 2s, 2s;
    transition-duration: 2s, 2s;
  }
`;
