import React from "react";
import styled from "styled-components";

import MainNav from "./layout/MainNav";
import MainNavItem from "./layout/MainNav/Item";

import Section from "./Section";
import DynamicImage from "./DynamicImage";

const StyledApp = styled.div`
  padding: 22px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: auto;
`;

class App extends React.PureComponent {
  public render() {
    return (
      <>
        <MainNav>
          <MainNavItem title="Home" />
        </MainNav>
        <StyledApp>
          <Section title="Ipsum do dolor id Lorem amet quis nostrud labore.">
            <DynamicImage image={require("../assets/thumbnail2.jpg")} />
            <p>
              Amet incididunt labore nulla non. Cupidatat elit consequat et
              laboris ea ex sint laborum pariatur. Sit sint id aliquip
              incididunt occaecat exercitation ullamco ullamco culpa enim do. Do
              ipsum ea sint aliquip cupidatat irure. Minim eiusmod fugiat in
              elit ut nostrud aliquip consectetur ut cillum qui. Occaecat
              proident Lorem sint dolore ex non ad est irure nulla qui in.
            </p>
            <DynamicImage image={require("../assets/thumbnail.jpg")} />
            <p>
              Amet incididunt labore nulla non. Cupidatat elit consequat et
              laboris ea ex sint laborum pariatur. Sit sint id aliquip
              incididunt occaecat exercitation ullamco ullamco culpa enim do. Do
              ipsum ea sint aliquip cupidatat irure. Minim eiusmod fugiat in
              elit ut nostrud aliquip consectetur ut cillum qui.
              <a href="#">
                Consequat aute cupidatat ut mollit aute laboris et pariatur
                reprehenderit id laboris.
              </a>
              Occaecat proident Lorem sint dolore ex non ad est irure nulla qui
              in.
            </p>
            <DynamicImage image={require("../assets/thumbnail.jpg")} />
            <p>
              Amet incididunt labore nulla non. Cupidatat elit consequat et
              laboris ea ex sint laborum pariatur. Sit sint id aliquip
              incididunt occaecat exercitation ullamco ullamco culpa enim do. Do
              ipsum ea sint aliquip cupidatat irure. Minim eiusmod fugiat in
              elit ut nostrud aliquip consectetur ut cillum qui. Occaecat
              proident Lorem sint dolore ex non ad est irure nulla qui in.
            </p>
          </Section>
        </StyledApp>
      </>
    );
  }
}

export default App;
