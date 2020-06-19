import React from "react";
import styled from "styled-components";

import Heading, { HeadingSize } from "./typography/Heading";

const StyledSection = styled.section`
  max-width: 640px;

  & + & {
    margin-top: 22px;
  }
`;

const StyledSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;

  img {
    height: auto;

    height: 40vh;
    min-height: 258px;
    max-height: 456px;

    max-width: 100%;

    margin: 32px 0;

    object-fit: cover;
    border-radius: 4px;
  }

  p + p {
    margin-top: 18px;
  }

  p a {
    margin-left: 4px;
    margin-right: 4px;
  }
`;

class Section extends React.PureComponent<IProps> {
  public render() {
    const { title, headingSize, children } = this.props;

    return (
      <StyledSection>
        <Heading size={headingSize}>{title}</Heading>
        <StyledSectionContent>{children}</StyledSectionContent>
      </StyledSection>
    );
  }
}

export default Section;

export interface IProps {
  title: string;
  headingSize?: HeadingSize;
}
