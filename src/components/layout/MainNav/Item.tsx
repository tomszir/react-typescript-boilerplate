import React from "react";
import styled from "styled-components";

const Item = styled.a`
  cursor: pointer;

  height: 100%;
  padding: 0 16px;

  display: flex;
  align-items: center;

  &:hover {
    color: #6a6a6a;
    text-decoration: none;
  }
`;

class MainNavItem extends React.PureComponent<IProps> {
  public render() {
    const { title } = this.props;
    return <Item>{title}</Item>;
  }
}

export default MainNavItem;

export interface IProps {
  title: string;
  leadingIcon?: string;
  trailingIcon?: string;
}
