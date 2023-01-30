import styled from 'styled-components';

export const NavComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 0;

  width: 100%;
  height: 46px;

  padding: 50px;

  display: none;

  .appTitle {
    font-weight: 300;
    font-size: 40px;
    line-height: 48px;
    text-align: center;

    color: var(--land-nav-title);
  }

  .navLink {
    display: flex;
  }
`;
