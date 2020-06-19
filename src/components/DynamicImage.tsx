import React from "react";
import styled from "styled-components";

const Image = styled.img`
  display: none;

  ${(props: { [key: string]: any }) => props.loaded && `display: block;`}
`;

const PlaceholderImage = styled.img`
  filter: blur(6px);
`;

class DynamicImage extends React.PureComponent<IProps, IState> {
  state: Readonly<IState> = {
    loaded: false,
  };

  public onLoad() {
    setTimeout(() => {
      this.setState({
        loaded: true,
      });
    }, 5000);
  }
  s;
  public render() {
    const { image } = this.props;
    const { loaded } = this.state;

    return (
      <>
        {!loaded && <PlaceholderImage src={image.placeholder} />}
        <Image
          src={image.src}
          srcSet={image.srcSet}
          onLoad={() => this.onLoad()}
          {...this.state}
        />
      </>
    );
  }
}

export default DynamicImage;

export interface IProps {
  image: any;
}

export interface IState {
  loaded: boolean;
}
