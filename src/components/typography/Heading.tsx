import React from "react";

class Heading extends React.PureComponent<IProps> {
  static defaultProps: IProps = {
    size: 3,
  };

  public render() {
    const { size, children } = this.props;
    return React.createElement(`h${size}`, this.props, children);
  }
}

export default Heading;

export type HeadingSize = 1 | 2 | 3 | 4 | 5 | 6;

export interface IProps {
  size?: HeadingSize;
}
