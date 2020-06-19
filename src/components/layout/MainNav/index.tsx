import React from "react";
import styled from "styled-components";

import { breakpoints } from "@/styles/breakpoints";

const navHeight = 60;

const NavContainer = styled.div`
  height: ${navHeight}px;

  display: flex;
  justify-content: center;

  background-color: #fff;
`;

const NavItemContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;

  max-width: ${breakpoints["sm"]}px;
`;

class MainNav extends React.PureComponent {
  public render() {
    return (
      <NavContainer>
        <NavItemContainer>{this.props.children}</NavItemContainer>
      </NavContainer>
    );
  }
}

export default MainNav;
